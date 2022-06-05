import NavBar from '../navbar/navbar-component.jsx'
import React from 'react'
import SectionOne from '../home-section-one/home-section-one-component.jsx'
import { HomeContainer } from './home-styles.jsx';

const Home = () => {

  return (
    <HomeContainer>
      <NavBar />
      <SectionOne />
    </HomeContainer>
  )
}

export default Home;
