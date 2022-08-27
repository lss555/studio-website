import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink } from './sidebar-styles.jsx';

const SideBar = ({ toggle, isOpen }) => {
  
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
            <SideBarWrapper>
              <SideBarMenu>
                <SideBarLink to='/ourteam' onClick={toggle}>
                  Our Team
                </SideBarLink>
                <SideBarLink to='/about' onClick={toggle}>
                  About
                </SideBarLink>
                <SideBarLink to='/work' onClick={toggle}>
                  Work
                </SideBarLink>
                <SideBarLink to='/contact' onClick={toggle}>
                  Contact
                </SideBarLink>
              </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
