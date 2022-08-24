import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import icon_search from '../assets/icon-search.svg';

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const SearchIcon = styled.img`
    position: absolute;
    left: 18px;
    z-index: 2;
`
const Input = styled.input`
    height: 60px;
    padding-right: 50px;
    padding-left: 50px;
`
const Submit = styled.input`
    position: absolute;
    right: 30px;
    height: 46px;
    width: 84px;
    margin-top: 10px;
`
const Form = styled.form`
    display: flex;
    position: relative;
    flex-direction: row;
    width: 80%;
    img {
        align-self: center;
    }
    max-width: 730px;
`
const Error = styled.p`
    position: absolute;
    right: 135px;
    top: 8px;
`
const Search = ({ setData }) => {

    const [error, setError] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = document.getElementById("value").value;
        console.log(searchValue);
        axios.get(`https://api.github.com/users/${searchValue}`)
        .then(res => {
            console.log(res)
            setError(false);
            setData(res.data);
        })
        .catch(error => {
            console.log(error);
            setError(true);
        })
    }

    return (
        <SearchContainer>
            <Form onSubmit={handleSubmit}>
                <SearchIcon src={icon_search}/>
                <Input id="value" placeholder="Search Github username..."/>
                {error ? <Error>No results</Error> : <Fragment />}
                <Submit type="submit" value="Search"/>
            </Form>
        </SearchContainer>
    )
}

export default Search;