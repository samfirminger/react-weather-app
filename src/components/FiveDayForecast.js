import React from 'react';
import styled from 'styled-components';

const FiveDayForecastContainer = styled.div`
    grid-area: Five-Day;
`;

const ForecastContainer = styled.div`
    margin-left: 0px;
    display: flex;
    overflow-x: auto;
`;

const FiveDayDataPoint = styled.div`
    float:left;
    margin-right: 10px;
    min-width: 80px;
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
            <p>{forecast[property][0].dayOfweek}</p>
            <p>{property}</p>
            <p>{maxtemp}&#8451;</p>
            <p>{mintemp}&#8451;</p>
        </FiveDayDataPoint>

        forecastComponents.push(dayForecast);
    }


    return (
        <FiveDayForecastContainer className="Five-Day">
            <ForecastContainer>{forecastComponents}</ForecastContainer>
        </FiveDayForecastContainer>
    )

};

export default FiveDayForecast;