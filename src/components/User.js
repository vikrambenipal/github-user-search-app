import React from 'react';
import styled from 'styled-components';
import placeholder from '../assets/favicon-32x32.png';
import icon_company from '../assets/icon-company.svg';
import icon_location from '../assets/icon-location.svg';
import icon_twitter from '../assets/icon-twitter.svg';
import icon_website from '../assets/icon-website.svg';

const User = () => {
  return (
    <div>
        <div>
            <img src={placeholder} />
            <div>
                <h2>Name</h2>
                <p>username</p>
                <p>date joined</p>
            </div>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. 
            Quisque volutpat mattis eros.
        </p>

        <div>
            <div>
                <p>Repos</p>
                <p>8</p>
            </div>
            <div>
                <p>Followers</p>
                <p>3938</p>
            </div>
            <div>
                <p>Following</p>
                <p>9</p>
            </div>
        </div>
        
        <div>
            <div>
                <span><img src={icon_location}/><p>Location</p></span>
                <span><img src={icon_website}/><p>Website</p></span>
            </div>
            <div>
                <span><img src={icon_twitter}/><p>Twitter</p></span>
                <span><img src={icon_company}/><p>Company</p></span>
            </div>
        </div>
        
    </div>
  )
}

export default User;