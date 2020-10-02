import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import HourlyBreakDown from "./HourlyBreakdown";


const HourlyBreakdownContainer = styled.div`
    grid-area: hourly;
    text-align: left;
    margin-top: auto;
    margin-bottom: auto;
`;


const TodayForecast = ({forecast}) => {

    return (
        <HourlyBreakdownContainer className="hourly">
            <HourlyBreakDown forecast={forecast}/>
        </HourlyBreakdownContainer>
    )

};

TodayForecast.propTypes = {
    forecast: PropTypes.array
};

export default TodayForecast;