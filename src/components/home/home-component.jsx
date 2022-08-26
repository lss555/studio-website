import NavBar from '../navbar/navbar-component.jsx'
import React from 'react'
import SectionOne from '../home-section-one/home-section-one-component.jsx'
import SectionTwo from '../home-section-two/home-section-two-component.jsx'
import { HomeContainer } from './home-styles.jsx';
import Footer from '../footer/footer-component.js';
import { motion } from 'framer-motion';

const Home = () => {

  return (
    <HomeContainer>
      <NavBar />
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
      <SectionOne />
      <SectionTwo />
      </motion.div>
      <Footer />
    </HomeContainer>
  )
}

export default Home;
