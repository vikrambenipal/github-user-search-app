import React from 'react';
import styled from 'styled-components';

const media = {
    tablet: '@media(min-width: 768px)',
    desktop: '@media(min-width: 992px)'
}

const Avatar = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    align-self: center;
    margin-right: 20px;
    ${media.tablet}{
        width: 100px;
        height: 100px;
    }
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
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    //position: relative;
    width: 95%;
    ${media.desktop}{
        // justify-content: left;
        // padding-left: 20px;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    ${media.desktop}{
        // width: 70%;
        // padding-right: 30%;
        // margin-right: 50px;
        // p{
        //     width: 160%;
        // }
    }
`
const Bio = styled.p`
    text-align: left;
`
const Profile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
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
                <Profile>
                    <Avatar src={data.avatar_url}/>
                    <div>
                        {Object.keys(data).length !== 0 ? <h2>{data.name}</h2> : <p>{empty}</p>}
                        {Object.keys(data).length !== 0 ? <p>@{data.login}</p> : <p>{empty}</p>}
                        {Object.keys(data).length !== 0 ? <p>Joined {getDate(data.created_at)}</p> : <p>{empty}</p>}
                    </div>
                </Profile>
                {data.bio ? <Bio>{data.bio}</Bio> : <Bio>{noBio}</Bio>}
            </DescriptionContainer>
        </Container>
  )
}
export default UserDescription;