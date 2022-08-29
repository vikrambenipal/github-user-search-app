import React from 'react';
import styled from 'styled-components';
import icon_company from '../assets/icon-company.svg';
import icon_location from '../assets/icon-location.svg';
import icon_twitter from '../assets/icon-twitter.svg';
import icon_website from '../assets/icon-website.svg';

const media = {
    tablet: '@media(min-width: 768px)',
    desktop: '@media(min-width: 992px)'
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    ${media.tablet}{
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        padding-bottom: 50px;
        justify-content: space-between;
    }
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    ${media.tablet}{
        margin-left: 15%;
        ${props => props.second ? 'right: 10%' : 'left: 12%'}
    }
`
const Stat = styled.span`
    display: flex;
    flex-direction: row;
    p,a {
        width: 150px;
    }
    a {
        text-decoration: none;
        color: white;
        margin-top: 16px;
        margin-bottom: 16px;
    }
    img {
        align-self: center;
        margin-right: 10px;
    }
`
const UserStats = ({ data, noResult }) => {

    const checkResult = (result) => {
        if(result) return result;
        return noResult;
    }
    
  return (
    <div>
        <Container>
            <InfoContainer second={false}>
                <Stat>
                    <img src={icon_location}/>
                    {Object.keys(data).length !== 0 ? <p>{checkResult(data.location)}</p> : <p>{noResult}</p>}
                </Stat>
                <Stat>
                    <img src={icon_website}/>
                    {Object.keys(data).length !== 0 ? <a href={data.blog} target="_blank">{checkResult(data.blog)}</a> : <p>{noResult}</p>}
                </Stat>
            </InfoContainer>
            <InfoContainer second={true}>
                <Stat>
                    <img src={icon_twitter}/>
                    {Object.keys(data).length !== 0 ? <p>{checkResult(data.twitter_username)}</p> : <p>{noResult}</p>}
                </Stat>
                <Stat>
                    <img src={icon_company}/>
                    {Object.keys(data).length !== 0 ? <p>{checkResult(data.company)}</p> : <p>{noResult}</p>}
                </Stat>
            </InfoContainer>
        </Container>
    </div>
  )
}
export default UserStats;