import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #68746c;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto 0 auto;
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    margin-top: auto;

  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
   display: flex;
   justify-content: center;

   @media screen and (max-width: 468px) {
     padding-top: 32px;
   }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 128px;
  text-align: left;
  width: 160px;
  boz-sizing: border-box;
  color: #fff;
  padding: 20px;
  @media screen and (max-width: 768px) {
    margin: 16px;
  }
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  margin-bottom: 5px;
  color: black;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: .5rem;
  font-size: 14px;
  &:hover {
    color: #bc986a;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto 5rem auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  font-weight: bold;
  @media screen and (min-width: 820px) {
    padding: 5rem;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin: 12px auto;
  @media screen and (min-width: 820px) {
    padding: 5rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  @media screen and (min-width: 820px) {
    padding: 5rem;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
