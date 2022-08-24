import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
    left: 0px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
`
const AvatarContainer = styled.div`
    position: absolute;
    width: 100%;
    left: 20px;
`
const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
                <AvatarContainer>
                    <Avatar src={data.avatar_url} />
                </AvatarContainer>
                <Profile>
                    {Object.keys(data).length !== 0 ? <h2>{data.name}</h2> : <p>{empty}</p>}
                    {Object.keys(data).length !== 0 ? <p>@{data.login}</p> : <p>{empty}</p>}
                    {Object.keys(data).length !== 0 ? <p>Joined {getDate(data.created_at)}</p> : <p>{empty}</p>}
                </Profile>
            </DescriptionContainer>
            {data.bio ? <p>{data.bio}</p> : <p>{noBio}</p>}
        </Container>
  )
}
export default UserDescription;