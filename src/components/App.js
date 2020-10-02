import React, {Component} from 'react';
import {GlobalStyle} from "./GlobalStyle";
import AppTitle from "./AppTitle";
import ResultsContainer from './ResultsContainer'
import ErrorResponse from './ErrorResponse';
import SearchBar from './SearchBar';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: null,
            todayForecast: null,
            weekForecast: null,
            city: '',
            country: '',
            hasSearched: false,
        }
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

    groupBy = (result) => {

        const groupedByDay = {};
        result.forEach(function (item) {
            const date = item.dt_txt.slice(8, 10);
            if (!groupedByDay.hasOwnProperty(date)) {
                this.addDayOfWeek(item);
                const items = [];
                items.push(item);
                groupedByDay[date] = items;
            } else {
                groupedByDay[date].push(item);
            }
        }, this);

        return groupedByDay;
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

                const todayForecast = forecast.list.slice(0, 6);
                const weekForecast = this.groupBy(forecast.list);

                this.setState({error: false, weatherInfo, todayForecast, weekForecast});
            }).catch(error => {
                console.log(error);
                this.setState({
                    error: true,
                    weatherInfo: null,
                });
            });
    }

    render() {

        const {weatherInfo, todayForecast, weekForecast, inputValue, error, hasSearched} = this.state;

        return <div className="App">
            <GlobalStyle/>
            <AppTitle/>
            <SearchBar change={this.handleInputChange} inputValue={inputValue} hasSearched={hasSearched}/>
            {error && <ErrorResponse/>}
            {weatherInfo && <ResultsContainer weatherInfo={weatherInfo} todayForecast={todayForecast} weekForecast={weekForecast}/>}
        </div>
    };
}

export default App;
