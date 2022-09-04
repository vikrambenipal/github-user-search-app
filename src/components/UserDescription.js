import React from 'react';
import styled from 'styled-components';

const media = {
    tablet: '@media(min-width: 768px)',
    desktop: '@media(min-width: 992px)'
}

const Avatar = styled.img`
    // width: 70px;
    // height: 70px;
    width: 20%;
    height: 20%;
    border-radius: 50%;
`
const AvatarContainer = styled.div`
    display: flex;
    //position: absolute;
    // top: 30px;
    // left: -30%;
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
    // justify-content: center;
    //position: relative;
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
        padding-right: 30%;
        margin-right: 50px;
        p{
            width: 160%;
        }
    }
`
const Bio = styled.p`
    text-align: left;
`
const Profile = styled.div`

`

const UserDescription = ({ data, empty }) => {

    console.log(data);
    const noBio = "LoreLorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis erosLorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis erosLorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis erosm ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."
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