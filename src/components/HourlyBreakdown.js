import React from 'react';
import styled from 'styled-components';
import {icons} from "../modules/weatherIcons";


const HourlyBreakdownWrapper = styled.div`
    position: relative;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-top: 20px;
    margin-bottom: 20px;
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

        return <HourData key={item.dt_txt}>
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

export default HourlyBreakDown;