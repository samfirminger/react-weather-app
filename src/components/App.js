import React, {Component} from 'react';
import '../App.css';
import ResultsContainer from './ResultsContainer'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: null,
        }

    }

    isToday = (today, date) => {
        const dateFormatted = new Date(date * 1000);
        return (today.toDateString() === dateFormatted.toDateString());
    }


    componentDidMount() {

        let urls = [
            'https://api.openweathermap.org/data/2.5/weather?q=London&appid=0ca4eb97fc6746f542157b9bed567279&units=metric',
            'https://api.openweathermap.org/data/2.5/forecast?q=London&appid=0ca4eb97fc6746f542157b9bed567279&units=metric',
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

                const today = new Date();
                const todayForecast = data2.list.filter(item => this.isToday(today, item.dt));

              this.setState({weatherInfo, todayForecast});
            }).catch(error => {
            console.log(error);

            this.setState({
                error: true,
                weatherInfo: null,
            });
        });
    }


    render() {
        const {weatherInfo, todayForecast} = this.state;
        return <div className="App">
            <h1>Weather Forecast</h1>
            {weatherInfo && <ResultsContainer weatherInfo={weatherInfo}
                              todayForecast={todayForecast}/>}
        </div>
    };
}

export default App;
