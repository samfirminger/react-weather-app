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


const SearchBar = ({value, change, search}) => {

    return (<CityInputWrapper className={'test'} search={search}>
                <StyledAlgolia
                    placeholder='e.g. London'
                    options={{
                        appId: 'plVPZLHU2YCV',
                        apiKey: '9873dda9187da827786d0e05a6c6490b',
                        language: 'gb',
                    }}
                    value={value}
                    onChange={change}
                    onClear={() =>
                        console.log('Fired when the input is cleared.')}
                    onError={({ message }) =>
                        console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
                />
            </CityInputWrapper>
    )
};

export default SearchBar;