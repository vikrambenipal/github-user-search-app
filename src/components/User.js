import React from 'react';
import styled from 'styled-components';
import UserDescription from './UserDescription';
import UserInfo from './UserInfo';
import UserStats from './UserStats';

const media = {
  tablet: '@media(min-width: 768px)',
  desktop: '@media(min-width: 992px)',
}
const Row = styled.div`
  display: flex;
  border: 2px solid white;
  flex-direction: row;
  position: relative;
  h1 {
    position: absolute;
    left: 5%;
  }
`
const Avatar = styled.img`
    width: 0px;
    height: 0px;
    ${media.desktop}{
      display: visible;
      position: absolute;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-top: 40px;
      margin-left: 25px;
    }
  `
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    //align-items: center;
    margin-top: 30px;
    width: 80%;
    margin: 20px auto 0px auto;
    max-width: 730px;
    ${media.desktop}{
      //padding-left: 200px;
    }
    background-color: #1E2A47;
`
const D = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #1E2A47;
    margin-top: 20px;
    border-radius: 15px;
    width: 80%;
    max-width: 730px;
`
const User = ({ data }) => {

  const empty = "---";
  const noResult = "Not Available";

  return (
    <D>
      <Container>
        <UserDescription data={data} empty={empty} />
        <UserInfo data={data} empty={empty} />
        <UserStats data={data} noResult={noResult} />
      </Container>
    </D>
  )
}

export default User;