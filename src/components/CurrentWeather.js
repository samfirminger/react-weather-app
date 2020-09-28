import React from 'react';
import styled from 'styled-components';
import {device} from "./device";


const CurrentWeatherContainer = styled.div`
    grid-area: Current;
    display: flex;
    align-items: center;

     @media ${device.tablet} { 
        margin-left: 100px;
     }
     
     @media ${device.laptop} {
        margin-left: 150px;
     }
`;

const WeatherIcon = styled.img`
    width: 60%;
    float: left;
`;

const WeatherData = styled.div`
    width: 40%;
    float: left;
`;

const CurrentTemp = styled.h1`
    text-align: left;
    margin-bottom: 0;
`;

const LowAndHighTemp = styled.h3`
    margin-top: 0;
    text-align: left;
`;


const CurrentWeather = ({icon, temp, highestTemp, lowestTemp}) => {

    highestTemp = Math.round(highestTemp);
    lowestTemp = Math.round(lowestTemp);

    return (
        <CurrentWeatherContainer className="Current-Weather">
            <WeatherIcon alt={"current weather"} src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"}/>
            <WeatherData>
                <CurrentTemp>{temp}&#8451;</CurrentTemp>
                <LowAndHighTemp>H: {highestTemp}&#8451; L: {lowestTemp}&#8451;</LowAndHighTemp>
            </WeatherData>
        </CurrentWeatherContainer>
    )
};

export default CurrentWeather;