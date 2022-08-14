
import { AboutContainer } from './about-styles';
import NavBar from '../navbar/navbar-component.jsx';
import Footer from '../footer/footer-component.js';


const About = () => {

  return (
    <div>
    <NavBar />
      <AboutContainer>
        <h1>About</h1>
      </AboutContainer>
    <Footer />
    </div>
  );
}

export default About;
