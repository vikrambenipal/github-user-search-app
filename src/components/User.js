import React from 'react';
import UserDescription from './UserDescription';
import styled from 'styled-components';
import placeholder from '../assets/favicon-32x32.png';
import icon_company from '../assets/icon-company.svg';
import icon_location from '../assets/icon-location.svg';
import icon_twitter from '../assets/icon-twitter.svg';
import icon_website from '../assets/icon-website.svg';

const User = ({ data }) => {

  const empty = "---";
  const noResult = "Not Available";

  

  const checkResult = (result) => {
    if(result) return result;
    return noResult;
  }

  return (
    <div>
        <UserDescription data={data} empty={empty} />
        <div>
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
        </div>
        
        <div>
            <div>
                <span>
                    <img src={icon_location}/>
                    {Object.keys(data).length !== 0 ? <p>{checkResult(data.location)}</p> : <p>{noResult}</p>}
                </span>
                <span>
                    <img src={icon_website}/>
                    {Object.keys(data).length !== 0 ? <p>{checkResult(data.blog)}</p> : <p>{noResult}</p>}
                </span>
            </div>
            <div>
                <span>
                    <img src={icon_twitter}/>
                    {Object.keys(data).length !== 0 ? <p>{checkResult(data.twitter_username)}</p> : <p>{noResult}</p>}
                </span>
                <span>
                    <img src={icon_company}/>
                    {Object.keys(data).length !== 0 ? <p>{checkResult(data.company)}</p> : <p>{noResult}</p>}
                </span>
            </div>
        </div>

    </div>
  )
}

export default User;