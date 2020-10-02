import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import {device} from "../modules/device";
import {icons} from "../modules/weatherIcons";

const CurrentWeatherContainer = styled.div`
    grid-area: current;
    display: flex;
    align-items: center;
    
    @media ${device.laptopL} {
       margin-left: 150px;
    }
`;

const WeatherIcon = styled.img`
    width: 55%;
    float: left;
    
    @media ${device.laptop} {
        width: 60%
    }
`;

const WeatherData = styled.div`
    width: 45%;
    float: left;
    overflow-x: hidden;
    
    @media ${device.laptop} {
        width: 40%
    }
`;

const CurrentTemp = styled.h1`
    text-align: left;
    font-size: 60px;
    margin-bottom: 0;
    
    @media ${device.laptop} {
        font-size: 70px;
    }
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
        <CurrentWeatherContainer className="current">
            <WeatherIcon alt={"current weather"} src={weatherIconSrc}/>
            <WeatherData>
                <CurrentTemp>{temp}&#8451;</CurrentTemp>
                <WeatherDescription>{description}</WeatherDescription>
                <LowAndHighTemp>H: {highestTemp}&#8451; L: {lowestTemp}&#8451;</LowAndHighTemp>
            </WeatherData>
        </CurrentWeatherContainer>
    )
};

CurrentWeather.propTypes = {
    code: PropTypes.number,
    icon: PropTypes.string,
    temp: PropTypes.number,
    highestTemp: PropTypes.number,
    lowestTemp: PropTypes.number,
    description: PropTypes.string
};

export default CurrentWeather;