import React, {Component} from 'react';
import '../App.css';
import ResultsContainer from './ResultsContainer'
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
        console.log(suggestion);
        this.setState({
            city: suggestion.name,
            country: suggestion.countryCode
        });
        this.makeCall(this.state.city, this.state.country);
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

    makeCall = (city, country) => {

        const APIkey = process.env.REACT_APP_API_KEY;

        let urls = [
            'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + APIkey + '&units=metric',
            'https://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + country + '&appid=' + APIkey + '&units=metric',
        ];

        // map every url to the promise of the fetch
        let requests = urls.map(url => fetch(url));

        // Promise.all waits until all jobs are resolved
        Promise.all(requests)
            .then(([res1, res2]) => {
                if (res1.ok && res2.ok) {
                    return Promise.all([res1.json(), res2.json()]);
                }
                throw Error(res1.statusText, res2.statusText);
            })
            .then(([data1, data2]) => {

                console.log(data1);
                console.log(data2);

                const weatherInfo = {
                    city: data1.name,
                    country: data1.sys.country,
                    description: data1.weather[0].description,
                    main: data1.weather[0].main,
                    temp: Math.floor(data1.main.temp),
                    highestTemp: data1.main.temp_max,
                    lowestTemp: data1.main.temp_min,
                    clouds: data1.clouds.all,
                    humidity: data1.main.humidity,
                    wind: data1.wind.speed,
                    icon: data1.weather[0].icon,
                };

                const todayForecast = data2.list.filter(item => this.isToday(item.dt));
                const groupedForecast = this.groupBy(data2.list);

                this.setState({weatherInfo, todayForecast, groupedForecast});
            }).catch(error => {
            console.log(error);

            this.setState({
                error: true,
                weatherInfo: null,
            });
        });
    }


    componentDidMount() {
        //do something
    }


    render() {

        const {weatherInfo, todayForecast, groupedForecast, value} = this.state;

        return <div className="App">
            <h1>Weather Forecast</h1>
            <SearchBar submit={this.handleInputSubmit} change={this.handleInputChange} value={value}/>
            {weatherInfo && <ResultsContainer
                weatherInfo={weatherInfo}
                todayForecast={todayForecast}
                groupedForecast={groupedForecast}/>}
            <script defer
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCyi6Yr-xAHYBMJhoEX0BwhwSWl_zDZHqk&callback=initMap">
            </script>
        </div>

    };
}

export default App;
