
import { AboutContainer, AboutImageHeader, AboutHeader, HeaderSection, AboutInfoSection, InfoHeader, InfoPoints, InfoPointSection, InfoPointText, InfoPointContainer } from './about-styles';
import ContactUs from '../contact-us/contact-us-component.jsx';
import { aboutHeader, aboutImageHeader } from '../data/data.js';
import { motion } from 'framer-motion';


const About = () => {

  return (
    <div>
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
              <InfoPointText>We strategically plan our films so we can achieve the best results</InfoPointText>
            </InfoPointContainer>
            <InfoPointContainer>
              <InfoPoints>Creativity</InfoPoints>
              <InfoPointText>We use creativity to make films pop and break barriers to set us appart from any other film group</InfoPointText>
            </InfoPointContainer>
            <InfoPointContainer>
              <InfoPoints>Execution</InfoPoints>
              <InfoPointText>When you take great strategy and lots of creativity into a project it will set you to have the best results</InfoPointText>
            </InfoPointContainer>
            <InfoPointContainer>
              <InfoPoints>Production</InfoPoints>
              <InfoPointText>Production quailty and great equipment to accomplish any dream sets us apart</InfoPointText>
            </InfoPointContainer>
          </InfoPointSection>
        </AboutInfoSection>
        <ContactUs />
      </AboutContainer>
      </motion.div>
    </div>
  );
}

export default About;
