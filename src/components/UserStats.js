import React from 'react';
import styled from 'styled-components';
import icon_company from '../assets/icon-company.svg';
import icon_location from '../assets/icon-location.svg';
import icon_twitter from '../assets/icon-twitter.svg';
import icon_website from '../assets/icon-website.svg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid green;
`
const Stat = styled.span`
    display: flex;
    flex-direction: row;
    img {
        align-self: center;
    }
`
const UserStats = ({ data, noResult }) => {

    const checkResult = (result) => {
        if(result) return result;
        return noResult;
    }
    
  return (
    <div>
        <div>
            <Container>
                <Stat>
                    <img src={icon_location}/>
                    {Object.keys(data).length !== 0 ? <p>{checkResult(data.location)}</p> : <p>{noResult}</p>}
                </Stat>
                <Stat>
                    <img src={icon_website}/>
                    {Object.keys(data).length !== 0 ? <p>{checkResult(data.blog)}</p> : <p>{noResult}</p>}
                </Stat>
            </Container>
            <Container>
                <Stat>
                    <img src={icon_twitter}/>
                    {Object.keys(data).length !== 0 ? <p>{checkResult(data.twitter_username)}</p> : <p>{noResult}</p>}
                </Stat>
                <Stat>
                    <img src={icon_company}/>
                    {Object.keys(data).length !== 0 ? <p>{checkResult(data.company)}</p> : <p>{noResult}</p>}
                </Stat>
            </Container>
        </div>
    </div>
  )
}
export default UserStats;