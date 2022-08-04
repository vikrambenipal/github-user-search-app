import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
`
const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid black;
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
                <div>
                    {Object.keys(data).length !== 0 ? <p>{data.name}</p> : <p>{empty}</p>}
                    {Object.keys(data).length !== 0 ? <p>@{data.login}</p> : <p>{empty}</p>}
                    {Object.keys(data).length !== 0 ? <p>Joined {getDate(data.created_at)}</p> : <p>{empty}</p>}
                </div>
            </DescriptionContainer>
            {data.bio ? <p>{data.bio}</p> : <p>{noBio}</p>}
        </Container>
  )
}
export default UserDescription;