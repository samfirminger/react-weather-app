import React from 'react';
import styled from 'styled-components';
import {device} from "../modules/device";
import {icons} from "../modules/weatherIcons";

const FiveDayForecastContainer = styled.div`
    grid-area: Five-Day;
`;

const ForecastContainer = styled.div`
    margin-left: 0px;
    display: inline-block;
    float: left;
`;

const DayForecast = styled.div`
    flex-wrap: wrap;
    float:left;
    margin-right: 10px;
    min-width: 100%;
    text-align: left;
    margin-bottom: 20px;
    
    @media ${device.tablet} { 
        min-width: 200px;
    }
    
    @media ${device.laptop} { 
        min-width: 250px;
        margin-bottom: 0px;
    }
    
    
    border-radius: 7px;
    background-color: rgba(255,255,255,0.5);
    padding: 10px 0 10px 10px;
    
    
`;

const HourWeatherIcon = styled.img`
    height: 50px;
    width: 50px;      
`;

const DayOfWeek = styled.p`
    margin-bottom: 0;
 `;

const Temps = styled.p`
    margin-top: 0.5em;
`;

const InfoWrapper = styled.div`
    float: left;
    width: 80%;
    
    @media ${device.tablet} { 
        width: 68%;
    }
    
    @media ${device.laptop} { 
        width: 75%;
    }
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

        //TODO work out how to get an avg icon for a predicted day
        const weatherIconSrc = icons.getWeatherIcon(forecast[property][0].weather[0].id, forecast[property][0].weather[0].icon);

        const dayForecast = <DayForecast key={forecast[property][0].dayOfweek}>
            <InfoWrapper>
                <DayOfWeek>{forecast[property][0].dayOfweek} {property}</DayOfWeek>
                <Temps>{maxtemp}&#8451; / {mintemp}&#8451;</Temps>
            </InfoWrapper>
            <HourWeatherIcon src={weatherIconSrc}/>
        </DayForecast>;

        forecastComponents.push(dayForecast);
    }


    return (
        <FiveDayForecastContainer className="Five-Days">
            <ForecastContainer>{forecastComponents}</ForecastContainer>
        </FiveDayForecastContainer>
    )

};

export default FiveDayForecast;