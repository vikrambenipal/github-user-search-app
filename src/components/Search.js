import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import icon_search from '../assets/icon-search.svg';

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const Input = styled.input`
    height: 60px;
    padding-right: 50px;
`
const Bnput = styled.input`
    height: 30px;
    margin-left: -50px;
`
const Form = styled.form`
    display: flex;
    flex-direction: row;
    img {
        align-self: center;
    }
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
                <img src={icon_search}/>
                <Input id="value" placeholder="Search Github username..."/>
                {error ? <p>No results</p> : <Fragment />}
                <Bnput type="submit" value="Search"/>
            </Form>
        </SearchContainer>
    )
}

export default Search;