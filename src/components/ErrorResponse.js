import React from "react";
import styled from 'styled-components';
import {device} from "../modules/device";
import {fadeIn} from "./FadeIn";

const ErrorContainer = styled.div`
    display: inline-block;
    border-radius: 7px;
    background-color: rgba(255,255,255,0.5);
    padding: 40px;
    margin: 150px auto;
    opacity: 0;
    animation: ${fadeIn} 1s 0.3s forwards;
    
    @media ${device.tablet} { 
         margin: 200px auto;
    }
    
`;

const ErrorMessage = styled.p`
`;

const ErrorResponse = () => {

    return (
        <ErrorContainer>
            <ErrorMessage>:( No results for this location!</ErrorMessage>
        </ErrorContainer>
    );
};

export default ErrorResponse;