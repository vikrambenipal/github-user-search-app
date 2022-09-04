import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const media = {
    phone: '@media(min-width: 450px)',
    desktop: '@media(min-width: 992px)'
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    border-radius: 15px;
    p {
        color: ${props => props.dark ? theme.dark.text_color : theme.light.text_color};
    }
    background-color: ${props => props.dark ? theme.dark.app_background : theme.light.app_background};
    transition: 1s;
    ${media.phone}{
        flex-direction: row;
    }
`
const UserInfo = ({ data, empty, dark }) => {
  return (
    <Container dark={dark}>
        <div>
            <p>Repos</p>
            {Object.keys(data).length !== 0 ? <p>{data.public_repos}</p> : <p>{empty}</p>}
        </div>
        <div>
            <p>Followers</p>
            {Object.keys(data).length !== 0 ? <p>{data.followers}</p> : <p>{empty}</p>}
        </div>
        <div>
            <p>Following</p>
            {Object.keys(data).length !== 0 ? <p>{data.following}</p> : <p>{empty}</p>}
        </div>
    </Container>
  )
}
export default UserInfo;