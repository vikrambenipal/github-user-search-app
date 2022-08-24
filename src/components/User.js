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
    ${media.desktop}{
      display: visible;
      width: 20%;
      height: 20%;
      border-radius: 50%;
      margin-top: 35px;
      margin-left: 15px;
    }
  `
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    //align-items: center;
    border: 3px solid blue;
    margin-top: 30px;
    width: 80%;
    margin: 20px auto 0px auto;
    max-width: 730px;
    ${media.desktop}{
      //padding-left: 200px;
    }
`
const D = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid pink;
    width: 80%;
    max-width: 730px;
`
const User = ({ data }) => {

  const empty = "---";
  const noResult = "Not Available";

  return (
    <D>
      <Avatar src={data.avatar_url}/>
      <Container>
        <UserDescription data={data} empty={empty} />
        <UserInfo data={data} empty={empty} />
        <UserStats data={data} noResult={noResult} />
      </Container>
    </D>
  )
}

export default User;