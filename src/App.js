import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import User from './components/User';

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    console.log(new Date("2016-12-28T01:37:11Z"));
    axios.get(`https://api.github.com/users/octocat`)
    .then(res => {
        setData(res.data);
    })
  },[])

  return (
    <div className="App">
      
      <TopContainer>
        <Header />
        <Search setData={setData}/>
      </TopContainer>
      <User data={data}/>
    </div>
  );
}

export default App;
