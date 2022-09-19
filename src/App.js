import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import theme from './theme';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import User from './components/User';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.dark ? theme.dark.app_background : theme.light.app_background};
    transition: 1s;
  }
`

const Container = styled.div`
  margin-bottom: 60px;
`
const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  h1 {
    position: absolute;
    left: 5%;
  }
`
const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {

  const [data, setData] = useState({});
  const [dark, setDark] = useState(true);

  useEffect(() => {
    console.log(new Date("2016-12-28T01:37:11Z"));
    axios.get(`https://api.github.com/users/octocat`)
    .then(res => {
        setData(res.data);
    })
  },[])

  const handleTheme = () => {
    setDark(!dark);
  }

  return (
    <Container className="App">
      <GlobalStyle dark={dark}/>
      <TopContainer>
        <Header dark={dark} handleTheme={handleTheme}/>
        <Search dark={dark} setData={setData}/>
      </TopContainer>
      <Row>
        <User data={data} dark={dark}/>
      </Row> 
    </Container>
  );
}

export default App;
