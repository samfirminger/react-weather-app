import React from 'react';
import styled from 'styled-components';
import HourlyBreakDown from "./HourlyBreakdown";
import FiveDayForecast from "./FiveDayForecast";
import {device} from './device';

const ResultsWrapper = styled.div`

    @media ${device.mobileS} { 
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 0.5fr 1fr 1fr 1fr;
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

const Location = styled.h2`
    grid-area: Location;
    text-align: left;

`;

const CurrentWeather = styled.div`
    grid-area: Current;

`;

const HourlyBreakdownContainer = styled.div`
    grid-area: Hourly;
    text-align: left;
`;

const FiveDayForecastContainer = styled.div`
    grid-area: Five-Day;
`;


const ResultsContainer = ({weatherInfo, todayForecast, groupedForecast}) => {
    const {city, temp, icon, country} = weatherInfo;
    const forecast = todayForecast;
    const futureForecast = groupedForecast;


    return (
        <ResultsWrapper>
            <Location className="Location">{city}, {country}</Location>
            <CurrentWeather className="Current-Weather">
                <img alt={"current weather"} src={"http://openweathermap.org/img/wn/" + icon + "@2x.png"}/>
                <h1>{temp}&#8451;</h1>
            </CurrentWeather>
            <HourlyBreakdownContainer className="Hourly">
                <HourlyBreakDown forecast={forecast}/>
            </HourlyBreakdownContainer>
            <FiveDayForecastContainer className="Five-Day">
                <FiveDayForecast forecast={futureForecast}/>
            </FiveDayForecastContainer>
        </ResultsWrapper>
    );
};

export default ResultsContainer;