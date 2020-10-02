import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import {device} from '../modules/device';
import {fadeIn} from './FadeIn'
import Location from "./Location";
import CurrentWeather from "./CurrentWeather";
import TodayForecast from "./TodayForecast";
import FiveDayForecast from "./FiveDayForecast";

const ResultsWrapper = styled.div`

    padding-left: 5%;
    padding-right: 5%;
    opacity: 0;
    animation: ${fadeIn} 1s 0.3s forwards;
    
    @media ${device.mobileS} { 
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 0.5fr 1fr 1fr;
        gap: 1px 1px;
        grid-template-areas:
        "location location location location"
        "current current current current"
        "hourly hourly hourly hourly"
        "five-day five-day five-day five-day";
    }
    
    @media ${device.tablet} {
        display: grid;
        grid-template-rows: auto 0.5fr 1fr;
        gap: 1px 1px;
        grid-template-areas:
        "location location location location"
        "current current hourly hourly"
        "five-day five-day five-day five-day";
    }
    
    @media ${device.laptop} {
        padding-left: 10%;
        padding-right: 10%;
    }
`;

const ResultsContainer = ({weatherInfo, todayForecast, weekForecast}) => {
    const {code, city, temp, icon, country, highestTemp, lowestTemp, description} = weatherInfo;

    return (
        <ResultsWrapper>
            <Location city={city} country={country}/>
            <CurrentWeather code={code} icon={icon} temp={temp} highestTemp={highestTemp} lowestTemp={lowestTemp}
                            description={description}/>
            <TodayForecast forecast={todayForecast}/>
            <FiveDayForecast forecast={weekForecast}/>
        </ResultsWrapper>
    );
};

ResultsContainer.propTypes = {
    weatherInfo: PropTypes.object,
    todayForecast: PropTypes.array,
    weekForecast: PropTypes.object
};

export default ResultsContainer;