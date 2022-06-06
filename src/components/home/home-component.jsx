import NavBar from '../navbar/navbar-component.jsx'
import React from 'react'
import SectionOne from '../home-section-one/home-section-one-component.jsx'
import SectionTwo from '../home-section-two/home-section-two-component.jsx'
import { HomeContainer } from './home-styles.jsx';

const Home = () => {

  return (
    <HomeContainer>
      <NavBar />
      <SectionOne />
      <SectionTwo />
    </HomeContainer>
  )
}

export default Home;