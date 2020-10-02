import React from 'react';
import PropTypes from 'prop-types';
import AlgoliaPlaces from 'algolia-places-react';
import styled from 'styled-components';
import {device} from "../modules/device";


const CityInputWrapper = styled.div`
    height: 40px;
    text-align: left;
    display: flex;
    justify-content: center;
    transition: all 0.8s ease;
    ${props => props.hasSearched ? 'margin-top: 0px' : 'margin-top: 200px'}
`;


const StyledAlgolia = styled(AlgoliaPlaces)`
    border-radius: 8px;
    @media ${device.mobileS} {
        width: 300px;
    }

    @media ${device.tablet} { {
        width: 500px;
    }

    @media ${device.laptop} { {
        width: 700px;
    }
`;


const SearchBar = ({inputValue, change, hasSearched}) => {

    const APIkey = process.env.REACT_APP_ALGOLIA_API_KEY;

    return (<CityInputWrapper hasSearched={hasSearched}>
                <StyledAlgolia
                    placeholder='e.g. London'
                    options={{
                        appId: 'plVPZLHU2YCV',
                        apiKey: APIkey,
                        language: 'gb',
                    }}
                    value={inputValue}
                    onChange={change}
                />
            </CityInputWrapper>
    )
};

SearchBar.propTypes = {
    inputValue: PropTypes.string,
    change: PropTypes.func,
    hasSearched: PropTypes.bool
};

export default SearchBar;