import React from 'react';
import styled from 'styled-components';
import Location from "./Location";
import CurrentWeather from "./CurrentWeather";
import TodayForecast from "./TodayForecast";
import FiveDayForecast from "./FiveDayForecast";
import {device} from '../modules/device';
import {keyframes} from 'styled-components';

const fadeIn = keyframes`
   to {
        opacity: 1;
        visibility: visible;
        top: 0;
  }
`;

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
        "Location Location Location Location"
        "Current Current Current Current"
        "Hourly Hourly Hourly Hourly"
        "Five-Day Five-Day Five-Day Five-Day";
    }
    
    @media ${device.tablet} {
        display: grid;
        grid-template-rows: auto 0.5fr 1fr;
        gap: 1px 1px;
        grid-template-areas:
        "Location Location Location Location"
        "Current Current Hourly Hourly"
        "Five-Day Five-Day Five-Day Five-Day";
    }
`;

const ResultsContainer = ({weatherInfo, todayForecast, groupedForecast}) => {
    const {code, city, temp, icon, country, highestTemp, lowestTemp, description} = weatherInfo;
    const forecast = todayForecast;
    const futureForecast = groupedForecast;

    return (
        <ResultsWrapper>
            <Location city={city} country={country}/>
            <CurrentWeather code={code} icon={icon} temp={temp} highestTemp={highestTemp} lowestTemp={lowestTemp}
                            description={description}/>
            <TodayForecast forecast={forecast}/>
            <FiveDayForecast forecast={futureForecast}/>
        </ResultsWrapper>
    );
};

export default ResultsContainer;