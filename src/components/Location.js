import React from 'react';
import styled from 'styled-components';

const ResultLocation = styled.h1`
    grid-area: Location;
    text-align: left;
`;

const Location = ({city, country}) => {

    return (
        <ResultLocation className="Location">{city}, {country}</ResultLocation>
    )

};

export default Location;