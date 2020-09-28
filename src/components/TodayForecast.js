import React from 'react';
import styled from 'styled-components';
import HourlyBreakDown from "./HourlyBreakdown";


const HourlyBreakdownContainer = styled.div`
    grid-area: Hourly;
    text-align: left;
`;


const TodayForecast = ({forecast}) => {

    return (
        <HourlyBreakdownContainer className="Hourly">
            <HourlyBreakDown forecast={forecast}/>
        </HourlyBreakdownContainer>
    )

};

export default TodayForecast;