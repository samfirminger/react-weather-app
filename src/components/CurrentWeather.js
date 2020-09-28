import React from 'react';
import styled from 'styled-components';
import {device} from "./device";


const CurrentWeatherContainer = styled.div`
    grid-area: Current;
    margin-left: 50px;

     @media ${device.tablet} { 
        margin-left: 100px;
     }
     
     @media ${device.laptop} {
        margin-left: 150px;
     }
`;

const WeatherIcon = styled.img`
    float: left;
`;

const WeatherData = styled.div`
    float: left;
`;

const CurrentTemp = styled.h1`
    text-align: left;
`;


const CurrentWeather = ({icon, temp, highestTemp, lowestTemp}) => {

    return (
        <CurrentWeatherContainer className="Current-Weather">
            <WeatherIcon alt={"current weather"} src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"}/>
            <WeatherData>
                <CurrentTemp>{temp}&#8451;</CurrentTemp>
                <h3>H: {highestTemp} L: {lowestTemp}</h3>
            </WeatherData>
        </CurrentWeatherContainer>
    )
};

export default CurrentWeather;