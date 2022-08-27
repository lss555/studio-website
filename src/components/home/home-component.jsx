import React from 'react';
import SectionOne from '../home-section-one/home-section-one-component.jsx'
import SectionTwo from '../home-section-two/home-section-two-component.jsx'
import SectionThree from '../home-section-three/home-section-three-component.jsx'
import { HomeContainer } from './home-styles.jsx';
import { motion } from 'framer-motion';

const Home = () => {

  return (
    <HomeContainer>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      </motion.div>
    </HomeContainer>
  )
}

export default Home;
