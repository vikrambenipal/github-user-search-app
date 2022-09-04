import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    width: 90%;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 15px;
    background-color: #141D2F;
`
const UserInfo = ({ data, empty }) => {
  return (
    <Container>
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