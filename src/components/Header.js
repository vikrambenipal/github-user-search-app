import React, { useState } from 'react';
import styled from 'styled-components'
import icon_moon from '../assets/icon-moon.svg';
import icon_sun from '../assets/icon-sun.svg';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 730px;
`
const P = styled.p`
  user-select: none;
`
const Icon = styled.img`
  user-select: none;
`
const Theme = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
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
            {isMoon ? <P>Dark</P> : <P>Light</P>}
            <Icon src={isMoon ? icon_moon : icon_sun}/>
        </Theme>
    </HeaderContainer>
  )
}

export default Header;