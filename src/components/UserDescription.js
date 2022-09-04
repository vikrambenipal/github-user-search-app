import React from 'react';
import styled from 'styled-components';

const media = {
    tablet: '@media(min-width: 768px)',
    desktop: '@media(min-width: 992px)'
}

const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    align-self: center;
    margin-right: 20px;
    ${media.tablet}{
        width: 100px;
        height: 100px;
    }
`
const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
`
const Bio = styled.p`
    text-align: left;
    margin-bottom: 30px;
`
const Profile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-bottom: 15px;
    margin-top: 10px;
`
const ProfileContent = styled.div`
    h2 {
        margin: 0px auto;
    }
    p {
        margin: 5px auto;
    }
    .login {
        color: #0079FF;
    }
`

const UserDescription = ({ data, empty }) => {

    console.log(data);
    const noBio = "This user has no bio"
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
                    <ProfileContent>
                        {Object.keys(data).length !== 0 ? <h2>{data.name}</h2> : <p>{empty}</p>}
                        {Object.keys(data).length !== 0 ? <p className="login">@{data.login}</p> : <p>{empty}</p>}
                        {Object.keys(data).length !== 0 ? <p>Joined {getDate(data.created_at)}</p> : <p>{empty}</p>}
                    </ProfileContent>
                </Profile>
                {data.bio ? <Bio>{data.bio}</Bio> : <Bio>{noBio}</Bio>}
            </DescriptionContainer>
        </Container>
  )
}
export default UserDescription;