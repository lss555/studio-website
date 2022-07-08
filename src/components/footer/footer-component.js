import React from 'react';
import { FooterContainer, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './footer-styles.js'
import { FaFacebook } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

    return (
        <FooterContainer>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact</FooterLinkTitle>
                  <FooterLink to='/sign-in'>850 palm Dr.</FooterLink>
                  <FooterLink to='/sign-in'>Red Lodge, MT 84040</FooterLink>
                  <FooterLink to='/sign-in'>+1-888-888-8888</FooterLink>
                  <FooterLink to='/sign-in'>Sovereignstudios@gmail.com</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Links and Media</FooterLinkTitle>
                  <FooterLink href='https://www.facebook.com' target='_blank'>Facebook</FooterLink>
                  <FooterLink href='https://instagram.com' target='_blank'>Instagram</FooterLink>
                  <FooterLink href='https://vimeo.com' target='_blank'>Vimeo</FooterLink>
                  <FooterLink href='https://www.youtube.com' target='_blank' >Youtube</FooterLink>
                  <FooterLink href='https://www.youtube.com' target='_blank' >Something</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
                Sovereign Studios
              </SocialLogo>
                <WebsiteRights>Sovereign Studios © {new Date().getFullYear()}</WebsiteRights>
                <SocialIcons>
                  <SocialIconLink href='https://www.facebook.com' target='_blank' aria-label='Facebook'><FaFacebook /></SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterContainer>
    )
}

export default Footer;
