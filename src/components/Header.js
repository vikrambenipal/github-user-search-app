import React, { useState } from 'react';
import styled from 'styled-components'
import icon_moon from '../assets/icon-moon.svg';
import icon_sun from '../assets/icon-sun.svg';
import theme from '../theme';

const Heading = styled.h1`
  color: ${props => props.dark ? theme.dark.heading : theme.light.heading};
`
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
  color: ${props => props.dark ? theme.dark.text_color : theme.light.text_color};
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
  :hover{
    p,img {
      filter: ${props => props.dark ? theme.dark.theme_hover : theme.light.theme_hover};
    }
  }
`

const Header = ({ dark, handleTheme }) => {

  const [isMoon, setMoon] = useState(true);

  const handleThemeChange = () => {
    setMoon(!isMoon);
    handleTheme();
  }

  return (
    <HeaderContainer>
        <Heading dark={dark}>devfinder</Heading>
        <Theme onClick={handleThemeChange}>
            {isMoon ? <P dark={dark}>Light</P> : <P dark={dark}>Dark</P>}
            <Icon src={isMoon ? icon_sun : icon_moon}/>
        </Theme>
    </HeaderContainer>
  )
}

export default Header;