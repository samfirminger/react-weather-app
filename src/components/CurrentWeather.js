import React from 'react';
import styled from 'styled-components';
import {device} from "../modules/device";
import {icons} from "../modules/weatherIcons";


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

const WeatherDescription = styled.h3`
    text-align: left;
`;

const LowAndHighTemp = styled.h3`
    margin-top: 0;
    text-align: left;
`;


const CurrentWeather = ({code, icon, temp, highestTemp, lowestTemp, description}) => {

    highestTemp = Math.round(highestTemp);
    lowestTemp = Math.round(lowestTemp);
    description = description.charAt(0).toUpperCase() + description.slice(1);

    const weatherIconSrc = icons.getWeatherIcon(code, icon);

    return (
        <CurrentWeatherContainer className="Current-Weather">
            <WeatherIcon alt={"current weather"} src={weatherIconSrc}/>
            <WeatherData>
                <CurrentTemp>{temp}&#8451;</CurrentTemp>
                <WeatherDescription>{description}</WeatherDescription>
                <LowAndHighTemp>H: {highestTemp}&#8451; L: {lowestTemp}&#8451;</LowAndHighTemp>
            </WeatherData>
        </CurrentWeatherContainer>
    )
};

export default CurrentWeather;