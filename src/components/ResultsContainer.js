import React from 'react';
import styled from 'styled-components';
import HourlyBreakDown from "./HourlyBreakdown";

const ResultsWrapper = styled.div`
   
`;

const Location = styled.h2`
    text-align: left;

`;

const CurrentWeather = styled.div`

`;

const HourlyBreakdownContainer = styled.div`
    text-align: left;

`;


const ResultsContainer = ({weatherInfo, todayForecast}) => {
    const {city, temp, icon, country} = weatherInfo;
    const forecast = todayForecast;



    return (
        <ResultsWrapper>
            <Location className="Location">{city}, {country}</Location>
            <CurrentWeather className="Current-Weather">
                <img alt={"current weather"} src={"http://openweathermap.org/img/wn/" +  icon + "@2x.png"}/>
                <p>{temp}&#8451;</p>
            </CurrentWeather>
            <HourlyBreakdownContainer className="hourly-breakdown-container">
                <HourlyBreakDown forecast={forecast}/>
            </HourlyBreakdownContainer>
        </ResultsWrapper>
    );
};

export default ResultsContainer;