
import { AboutContainer, AboutImageHeader, AboutHeader, HeaderSection, AboutInfoSection, InfoHeader, InfoPoints, InfoPointSection, InfoPointText, InfoPointContainer } from './about-styles';
import NavBar from '../navbar/navbar-component.jsx';
import Footer from '../footer/footer-component.js';
import { aboutHeader, aboutImageHeader } from '../data/data.js';
import { motion } from 'framer-motion';


const About = () => {

  return (
    <div>
    <NavBar />
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <AboutContainer>
        <HeaderSection>
          <AboutHeader>{aboutHeader}</AboutHeader>
          <AboutImageHeader src={aboutImageHeader} alt='media image'/>
        </HeaderSection>
        <AboutInfoSection>
          <InfoHeader>Through,</InfoHeader>
          <InfoPointSection>
            <InfoPointContainer>
              <InfoPoints>Strategy</InfoPoints>
              <InfoPointText>strategy and stuff strategy and stuff strategy and stuff strategy and stuff strategy and stuff strategy and stuff</InfoPointText>
            </InfoPointContainer>
            <InfoPointContainer>
              <InfoPoints>Creativity</InfoPoints>
              <InfoPointText>strategy and stuff strategy and stuff strategy and stuff strategy and stuff strategy and stuff strategy and stuff</InfoPointText>
            </InfoPointContainer>
            <InfoPointContainer>
              <InfoPoints>Execution</InfoPoints>
              <InfoPointText>Creativity and stuff Creativity and stuff Creativity and stuff Creativity and stuff Creativity and stuff</InfoPointText>
            </InfoPointContainer>
            <InfoPointContainer>
              <InfoPoints>Production</InfoPoints>
              <InfoPointText>Production and stuff Production and stuff Production and stuff Production and stuff Production and stuff</InfoPointText>
            </InfoPointContainer>
          </InfoPointSection>
        </AboutInfoSection>
      </AboutContainer>
      </motion.div>
    <Footer />
    </div>
  );
}

export default About;
