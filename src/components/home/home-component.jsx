import NavBar from '../navbar/navbar-component.jsx'
import React from 'react'
import SectionOne from '../home-section-one/home-section-one-component.jsx'
import SectionTwo from '../home-section-two/home-section-two-component.jsx'
import { HomeContainer } from './home-styles.jsx';
import Footer from '../footer/footer-component.js';

const Home = () => {

  return (
    <HomeContainer>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </HomeContainer>
  )
}

export default Home;
