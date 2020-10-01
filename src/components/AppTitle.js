import React from "react";
import styled from "styled-components";
import {device} from "../modules/device";

const Title = styled.h1`
    margin-top: 20px;
    margin-bottom: 30px;
    
    @media ${device.tablet} {
       margin-top: 50px;
       margin-bottom: 50px;
    }
     
    @media ${device.laptop} {
       margin-top: 70px;
       margin-bottom: 70px;
    }
`;

const AppTitle = () => {

    return (
        <Title>ForecastApp</Title>
    );

};

export default AppTitle;