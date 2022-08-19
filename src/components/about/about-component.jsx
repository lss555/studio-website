
import { AboutContainer, AboutImageHeader, AboutHeader, HeaderSection, AboutInfoSection, InfoHeader, InfoPoints, InfoPointSection, InfoPointText } from './about-styles';
import NavBar from '../navbar/navbar-component.jsx';
import Footer from '../footer/footer-component.js';
import { aboutHeader, aboutImageHeader } from '../data/data.js';


const About = () => {

  return (
    <div>
    <NavBar />
      <AboutContainer>
        <HeaderSection>
          <AboutHeader>{aboutHeader}</AboutHeader>
          <AboutImageHeader src={aboutImageHeader} alt='media image'/>
        </HeaderSection>
        <AboutInfoSection>
          <InfoHeader>Through,</InfoHeader>
          <InfoPointSection>
            <InfoPoints>Strategy</InfoPoints>
            <InfoPointText>strategy and stuff strategy and stuff strategy and stuff strategy and stuff strategy and stuff strategy and stuff</InfoPointText>
            <InfoPoints>Creativity</InfoPoints>
            <InfoPointText>strategy and stuff strategy and stuff strategy and stuff strategy and stuff strategy and stuff strategy and stuff</InfoPointText>
            <InfoPoints>Execution</InfoPoints>
            <InfoPointText>Creativity and stuff Creativity and stuff Creativity and stuff Creativity and stuff Creativity and stuff</InfoPointText>
            <InfoPoints>Production</InfoPoints>
            <InfoPointText>Production and stuff Production and stuff Production and stuff Production and stuff Production and stuff</InfoPointText>
          </InfoPointSection>
        </AboutInfoSection>
      </AboutContainer>
    <Footer />
    </div>
  );
}

export default About;
