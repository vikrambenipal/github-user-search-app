import React from 'react';
import styled from 'styled-components';
import UserDescription from './UserDescription';
import UserInfo from './UserInfo';
import UserStats from './UserStats';

const Container = styled.div`
    border: 3px solid blue;
    margin-top: 30px;
`
const User = ({ data }) => {

  const empty = "---";
  const noResult = "Not Available";

  return (
    <Container>
        <UserDescription data={data} empty={empty} />
        <UserInfo data={data} empty={empty} />
        <UserStats data={data} noResult={noResult} />
    </Container>
  )
}

export default User;