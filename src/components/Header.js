import React, { useState } from 'react';
import styled from 'styled-components'
import icon_moon from '../assets/icon-moon.svg';
import icon_sun from '../assets/icon-sun.svg';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 30px;
`

const Theme = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  cursor: pointer;
  margin-right: 30px;
  img {
    margin-left: 16px;
  }
`

const Header = () => {

  const [isMoon, setMoon] = useState(true);

  const handleThemeChange = () => {
    setMoon(!isMoon);
  }

  return (
    <HeaderContainer>
        <h1>devfinder</h1>
        <Theme onClick={handleThemeChange}>
            {isMoon ? <p>Dark</p> : <p>Light</p>}
            <img src={isMoon ? icon_moon : icon_sun}/>
        </Theme>
    </HeaderContainer>
  )
}

export default Header;