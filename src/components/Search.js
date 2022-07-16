import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Search = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = document.getElementById("value").value;
        console.log(searchValue);
    }

    return (
    <SearchContainer>
        <form onSubmit={handleSubmit}>
            <input id="value" placeholder="Search Github username..."/>
            <input type="submit" value="Search"/>
        </form>
    </SearchContainer>
    )
}

export default Search;