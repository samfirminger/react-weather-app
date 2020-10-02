import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const ResultLocation = styled.h1`
    grid-area: Location;
    text-align: left;
    margin: 20px 0px 20px 0px;
`;

const Location = ({city, country}) => {

    return (
        <ResultLocation className="Location">{city}, {country}</ResultLocation>
    )
};

Location.propTypes = {
    city: PropTypes.string,
    country: PropTypes.string
};

export default Location;