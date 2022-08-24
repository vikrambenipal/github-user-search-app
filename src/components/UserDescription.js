import React from 'react';
import styled from 'styled-components';

const media = {
    tablet: '@media(min-width: 768px)',
    desktop: '@media(min-width: 992px)'
}

const Avatar = styled.img`
    // width: 70px;
    // height: 70px;
    width: 25%;
    height: 25%;
    border-radius: 50%;
`
const AvatarContainer = styled.div`
    display: flex;
    position: absolute;
    left: -35px;
    //width: 100%;
    //left: 20px;
    ${media.desktop}{
        display: none;
    }
`
const DescriptionContainer = styled.div`
    display: flex;
    //border: 2px solid purple;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 70%;
    ${media.desktop}{
        justify-content: left;
        padding-left: 20px;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid black;
    ${media.desktop}{
        width: 70%;
    }
`
const Bio = styled.p`
    text-align: left;
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
                    {data.bio ? <Bio>{data.bio}</Bio> : <Bio>{noBio}</Bio>}
                </Profile>
                
            </DescriptionContainer>
        </Container>
  )
}
export default UserDescription;