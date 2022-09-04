import React from 'react';
import styled from 'styled-components';
import UserDescription from './UserDescription';
import UserInfo from './UserInfo';
import UserStats from './UserStats';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    margin-top: 30px;
    width: 80%;
    margin: 20px auto 0px auto;
    max-width: 730px;
    background-color: #1E2A47;
`
const ParentContainer = styled.div`
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
    <ParentContainer>
      <Container>
        <UserDescription data={data} empty={empty} />
        <UserInfo data={data} empty={empty} />
        <UserStats data={data} noResult={noResult} />
      </Container>
    </ParentContainer>
  )
}

export default User;