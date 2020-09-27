import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import styled from 'styled-components';


const CityInputWrapper = styled.div`
    height: 40px;
    text-align: left;
    display: flex;
    justify-content: center;
    
`;


const StyledAlgolia = styled(AlgoliaPlaces)`
    @media only screen and (min-width: 320px) {
        width: 200px;
    }

    @media only screen and (min-width: 768px) {
        width: 500px;
    }

    @media only screen and (min-width: 1024px) {
        width: 700px;
    }
`;


const SearchBar = ({value, submit, change}) => {

    return (
        <form onSubmit={submit}>
            <CityInputWrapper>
                <StyledAlgolia
                    placeholder='e.g. London'
                    options={{
                        appId: 'plVPZLHU2YCV',
                        apiKey: '9873dda9187da827786d0e05a6c6490b',
                        language: 'gb',
                    }}
                    value={value}
                    onChange={change}
                />
            </CityInputWrapper>
        </form>
    )
};

export default SearchBar;