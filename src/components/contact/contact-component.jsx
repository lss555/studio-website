
import { ContactContainer } from './contact-styles';
import NavBar from '../navbar/navbar-component.jsx';
import Footer from '../footer/footer-component.js';


const Contact = () => {

  return (
    <div>
    <NavBar />
      <ContactContainer>
        <h1>Contact</h1>
      </ContactContainer>
    <Footer />
    </div>
  );
}

export default Contact;
