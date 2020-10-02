import React, {Component} from 'react';
import '../App.css';
import AppTitle from "./AppTitle";
import ResultsContainer from './ResultsContainer'
import ErrorResponse from './ErrorResponse';
import SearchBar from './SearchBar'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: null,
            todayForecast: null,
            groupedForecast: null,
            city: '',
            country: '',
            search: false,
        }
    }

    isToday = (date) => {
        const today = new Date().setHours(0, 0, 0, 0);
        const thatDay = new Date(date * 1000).setHours(0, 0, 0, 0);

        return (today === thatDay);
    }

    addDayOfWeek = (item) => {
        const a = new Date(item.dt * 1000);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeek = days[a.getDay()];

        item.dayOfweek = dayOfWeek;
    }

    handleInputChange = ({suggestion}) => {
        this.setState({
            city: suggestion.name,
            country: suggestion.countryCode,
            hasSearched: true,
            weatherInfo: null,
        });
        this.sendRequest(this.state.city, this.state.country);
    };

    groupBy = (array) => {

        const grouped = {};
        array.forEach(function (item) {
            const date = item.dt_txt.slice(8, 10);
            if (!grouped.hasOwnProperty(date)) {
                this.addDayOfWeek(item);
                const items = [];
                items.push(item);
                grouped[date] = items;
            } else {
                grouped[date].push(item);
            }
        }, this);

        return grouped;
    }

    sendRequest = (city, country) => {

        const APIkey = process.env.REACT_APP_OWM_API_KEY;

        let urls = [
            'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + APIkey + '&units=metric',
            'https://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + country + '&appid=' + APIkey + '&units=metric',
        ];

        // map every url to the promise of the fetch
        let requests = urls.map(url => fetch(url));

        // Promise.all waits until all jobs are resolved
        Promise.all(requests)
            .then(([request1, request2]) => {
                if (request1.ok && request2.ok) {
                    return Promise.all([request1.json(), request2.json()]);
                }
                throw Error(request1.statusText);
            })
            .then(([current, forecast]) => {

                const weatherInfo = {
                    code: current.weather[0].id,
                    city: current.name,
                    country: current.sys.country,
                    description: current.weather[0].description,
                    main: current.weather[0].main,
                    temp: Math.floor(current.main.temp),
                    highestTemp: current.main.temp_max,
                    lowestTemp: current.main.temp_min,
                    clouds: current.clouds.all,
                    humidity: current.main.humidity,
                    wind: current.wind.speed,
                    icon: current.weather[0].icon,
                    timezone: forecast.city.timezone
                };

                //const todayForecast = data2.list.filter(item => this.isToday(item.dt));
                const todayForecast = forecast.list.slice(0, 6);
                const groupedForecast = this.groupBy(forecast.list);
                const error = false;

                this.setState({error, weatherInfo, todayForecast, groupedForecast});
            }).catch(error => {
                console.log(error);
                this.setState({
                    error: true,
                    weatherInfo: null,
                });
            });
    }

    render() {

        const {weatherInfo, todayForecast, groupedForecast, value, error, hasSearched} = this.state;

        return <div className="App">
            <AppTitle/>
            <SearchBar change={this.handleInputChange} value={value} hasSearched={hasSearched}/>
            {error && <ErrorResponse/>}
            {weatherInfo && <ResultsContainer weatherInfo={weatherInfo} todayForecast={todayForecast} groupedForecast={groupedForecast}/>}
        </div>

    };
}

export default App;
