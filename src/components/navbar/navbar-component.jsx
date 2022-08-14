import React from 'react'
// , { useState, useEffect }
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItemLeft, NavItemRight, NavLinks } from './navbar-styles.jsx'

const NavBar = ({ toggle }) => {

    const toggleHome = () => {
      scroll.scrollToTop();
    }

    return (
        <React.Fragment>
          <IconContext.Provider value={{ color: '#010606' }}>
            <Nav>
              <NavBarContainer>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItemLeft>
                    <NavLinks to='faq'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Our Team</NavLinks>
                  </NavItemLeft>
                  <NavItemLeft>
                    <NavLinks to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >About</NavLinks>
                  </NavItemLeft>
                  <NavLogo to='/' onClick={toggleHome}>
                    Sovereign Studios
                  </NavLogo>
                  <NavItemRight>
                    <NavLinks to='faq'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Work</NavLinks>
                  </NavItemRight>
                  <NavItemRight>
                    <NavLinks to='services'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Contact</NavLinks>
                  </NavItemRight>
                </NavMenu>
              </NavBarContainer>
            </Nav>
          </IconContext.Provider>
        </React.Fragment>
    )
}

export default NavBar;
