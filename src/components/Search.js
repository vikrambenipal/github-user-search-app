import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import icon_search from '../assets/icon-search.svg';
import theme from '../theme';

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
const SearchIcon = styled.img`
    position: absolute;
    user-select: none;
    left: 18px;
    z-index: 2;
`
const Input = styled.input`
    height: 60px;
    padding-right: 50px;
    padding-left: 60px;
    background-color: ${props => props.dark ? theme.dark.content_background : theme.light.content_background};
    border: none;
    border-radius: 15px;
    cursor: pointer;
    outline: none;
    caret-color: #0079FF;
    line-height: 200px;
    font-family: SpaceMonoRegular;
    :focus{
        color: ${props => props.dark ? theme.dark.text_color : theme.light.text_color};
        background-color: ${props => props.dark ? theme.dark.content_background : theme.light.content_background};
    }
    color: ${props => props.dark ? theme.dark.text_color : theme.light.text_color};
    ::placeholder{
        color: ${props => props.dark ? theme.dark.text_color : theme.light.text_color};
    }
`
const Submit = styled.input`
    position: absolute;
    right: 30px;
    height: 46px;
    width: 84px;
    margin-top: 8px;
    color: white;
    background-color: #0079FF;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-family: SpaceMonoRegular;
    :hover{
        background-color: #60ABFF;
    }
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
    user-select: none;
    right: 135px;
    top: 4px;
    color: #F74646;
    margin: 10px auto;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
`
const Search = ({ dark, setData }) => {

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
    const handleClick = () => {
        setError(false);
    }

    return (
        <SearchContainer>
            <Container>
                <Form onClick={handleClick} onSubmit={handleSubmit}>
                    <SearchIcon src={icon_search}/>
                    <Input dark={dark} id="value" placeholder="Search Github username..."/>
                    <Submit type="submit" value="Search"/>
                </Form>
                {error ? <Error>No results</Error> : <Fragment />}
            </Container>
            
        </SearchContainer>
    )
}

export default Search;