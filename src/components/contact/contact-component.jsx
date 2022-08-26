
import { ContactContainer } from './contact-styles';
import NavBar from '../navbar/navbar-component.jsx';
import Footer from '../footer/footer-component.js';
import { motion } from 'framer-motion';


const Contact = () => {

  return (
    <div>
    <NavBar />
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <ContactContainer>
        <h1>Contact</h1>
      </ContactContainer>
    </motion.div>
    <Footer />
    </div>
  );
}

export default Contact;
