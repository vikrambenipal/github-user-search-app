import React from 'react';
import styled from 'styled-components';
import UserDescription from './UserDescription';
import UserInfo from './UserInfo';
import UserStats from './UserStats';
import theme from '../theme';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    margin-top: 30px;
    width: 80%;
    margin: 20px auto 0px auto;
    margin-bottom: 40px;
    max-width: 730px;
`
const ParentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${props => props.dark ? theme.dark.content_background : theme.light.content_background};
    box-shadow: ${props => props.dark ? "none" : theme.light.box_shadow};
    margin-top: 20px;
    border-radius: 15px;
    width: 80%;
    max-width: 730px;
`
const User = ({ data, dark }) => {

  const empty = "---";
  const noResult = "Not Available";

  return (
    <ParentContainer dark={dark}>
      <Container>
        <UserDescription data={data} empty={empty} dark={dark}/>
        <UserInfo data={data} empty={empty} dark={dark} />
        <UserStats data={data} noResult={noResult} dark={dark}/>
      </Container>
    </ParentContainer>
  )
}

export default User;