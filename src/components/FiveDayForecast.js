import React from 'react';
import styled from 'styled-components';
import {device} from "./device";

const FiveDayForecastContainer = styled.div`
    grid-area: Five-Day;
`;

const ForecastContainer = styled.div`
    margin-left: 0px;
    display: inline-block;
    float: left;
`;

const FiveDayDataPoint = styled.div`
    flex-wrap: wrap;
    float:left;
    margin-right: 10px;
    min-width: 100%;
    text-align: left;
    
    @media ${device.tablet} { 
        min-width: 200px;
    }
`;

const DayOfWeek = styled.p`
    margin-bottom: 0;
 `;

const Temps = styled.p`
    margin-top: 0.5em;
`;

const FiveDayForecast = ({forecast}) => {

    const forecastComponents = [];

    for (const property in forecast) {
        if(forecast[property].length !== 8) {
            continue;
        }

        let maxtemp = forecast[property][0].main.temp;
        let mintemp = forecast[property][0].main.temp;
        forecast[property].forEach(function(item) {
            if(item.main.temp > maxtemp) {
                maxtemp = item.main.temp;
            }
            if(item.main.temp < mintemp) {
                mintemp = item.main.temp;
            }
        });
        mintemp = Math.floor(mintemp);
        maxtemp = Math.floor(maxtemp);

        const dayForecast = <FiveDayDataPoint key={forecast[property][0].dayOfweek}>
            <DayOfWeek>{forecast[property][0].dayOfweek} {property}</DayOfWeek>
            <Temps>{maxtemp}&#8451; / {mintemp}&#8451;</Temps>
        </FiveDayDataPoint>;

        forecastComponents.push(dayForecast);
    }


    return (
        <FiveDayForecastContainer className="Five-Days">
            <ForecastContainer>{forecastComponents}</ForecastContainer>
        </FiveDayForecastContainer>
    )

};

export default FiveDayForecast;