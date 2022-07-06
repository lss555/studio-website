import React from 'react'
// , { useState, useEffect }
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './navbar-styles.jsx'

const NavBar = ({ toggle }) => {

    const toggleHome = () => {
      scroll.scrollToTop();
    }

    return (
        <React.Fragment>
          <IconContext.Provider value={{ color: '#010606' }}>
            <Nav>
              <NavBarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                  Sovereign Studios
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='about'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='faq'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Work</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to='services'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Contact</NavLinks>
                  </NavItem>
                </NavMenu>
              </NavBarContainer>
            </Nav>
          </IconContext.Provider>
        </React.Fragment>
    )
}

export default NavBar;
