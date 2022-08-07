import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-left: 30px;
`
const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: auto;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid black;
`
const Profile = styled.div`

`

const UserDescription = ({ data, empty }) => {

    console.log(data);
    const noBio = "This profile has no bio."

    const getDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'long' });
        return date.getDate() + " " + month + " " + date.getFullYear();
    }

    return (
        <Container>
            <DescriptionContainer>
                <Avatar src={data.avatar_url} />
                <Profile>
                    {Object.keys(data).length !== 0 ? <p>{data.name}</p> : <p>{empty}</p>}
                    {Object.keys(data).length !== 0 ? <p>@{data.login}</p> : <p>{empty}</p>}
                    {Object.keys(data).length !== 0 ? <p>Joined {getDate(data.created_at)}</p> : <p>{empty}</p>}
                </Profile>
            </DescriptionContainer>
            {data.bio ? <p>{data.bio}</p> : <p>{noBio}</p>}
        </Container>
  )
}
export default UserDescription;