import React from 'react';
import styled from 'styled-components';


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
        return <HourData key={item.dt_txt}>
            <HourWeatherIcon src={"http://openweathermap.org/img/wn/" +  item.weather[0].icon + "@2x.png"}/>
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