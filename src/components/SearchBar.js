import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import styled from 'styled-components';


const CityInputWrapper = styled.div`
    height: 40px;
    text-align: left;
    display: flex;
    justify-content: center;
    margin-top: 15%;
    transition: all 0.8s ease;
    ${props => props.search ? 'margin-top: 0px' : 'margin-top: 200px'}
`;


const StyledAlgolia = styled(AlgoliaPlaces)`

    border-radius: 8px;
    @media only screen and (min-width: 320px) {
        width: 300px;
    }

    @media only screen and (min-width: 768px) {
        width: 500px;
    }

    @media only screen and (min-width: 1024px) {
        width: 700px;
    }
`;


const SearchBar = ({value, change, search}) => {

    const APIkey = process.env.REACT_APP_ALGOLIA_API_KEY;

    return (<CityInputWrapper search={search}>
                <StyledAlgolia
                    placeholder='e.g. London'
                    options={{
                        appId: 'plVPZLHU2YCV',
                        apiKey: APIkey,
                        language: 'gb',
                    }}
                    value={value}
                    onChange={change}
                />
            </CityInputWrapper>
    )
};

export default SearchBar;