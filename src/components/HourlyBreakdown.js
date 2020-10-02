import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import {icons} from "../modules/weatherIcons";
import {fadeIn} from "./FadeIn";

const HourlyBreakdownWrapper = styled.div`
    position: relative;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-top: 20px;
    margin-bottom: 20px;
    
    .hour-block {
        opacity: 0;
        animation: ${fadeIn} 1s 0.5s forwards;
    }
    
    .hour-block:nth-child(1) {
        animation: ${fadeIn} 1s 0.5s forwards;
    }
    
    .hour-block:nth-child(2) {
         animation: ${fadeIn} 1s 0.6s forwards;
     }
    
    .hour-block:nth-child(3) {
        animation: ${fadeIn} 1s 0.7s forwards;
    }
    
    .hour-block:nth-child(4) {
        animation: ${fadeIn} 1s 0.8s forwards;
    }
    
    .hour-block:nth-child(5) {
        animation: ${fadeIn} 1s 0.9s forwards;
    }
    
    .hour-block:nth-child(6) {
        animation: ${fadeIn} 1s 1.0s forwards;
    }
`;

const HourData = styled.div`
    flex-shrink: 0;
    flex-basis: 60px;
    padding: 10px;
    margin: 0px 5px;
    border-radius: 5px;
    text-align: center;
    border-radius: 7px;
    background-color: rgba(255,255,255,0.5);
`;

const Hour = styled.p`
    margin: 0;
`;

const HourTemp = styled.p`
    margin: 0;
`;

const HourWeatherIcon = styled.img`
    height: 50px;
    width: 50px;      
`;

const HourlyBreakDown = ({forecast}) => {

    const list = forecast.map(function (item) {
        const hour = item.dt_txt.substring(11, 16);
        const temp = Math.floor(item.main.temp);
        const weatherIconSrc = icons.getWeatherIcon(item.weather[0].id, item.weather[0].icon);

        return <HourData key={item.dt_txt} className={'hour-block'}>
            <HourWeatherIcon src={weatherIconSrc}/>
            <Hour>{hour}</Hour>
            <HourTemp>{temp}&#8451;</HourTemp>
        </HourData>;
    });

    return (
        <HourlyBreakdownWrapper>
            {list}
        </HourlyBreakdownWrapper>
    )
};

HourlyBreakDown.propTypes = {
    forecast: PropTypes.array
};

export default HourlyBreakDown;