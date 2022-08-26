
import { WorkContainer, AllProjectsHeaders, AllProjectsSubHeader, AllProjectsHeader } from './work-styles';
import NavBar from '../navbar/navbar-component.jsx';
import Footer from '../footer/footer-component.js';
import { allProjectCards } from '../project-cards/project-cards-component.jsx';
import {
  Row
} from 'reactstrap';
import { motion } from 'framer-motion';


const Work = () => {

  return (
    <div>
      <NavBar />
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
      <WorkContainer>
        <AllProjectsHeaders>
          <AllProjectsHeader>Our Work</AllProjectsHeader>
          <AllProjectsSubHeader to="/">Back To Home</AllProjectsSubHeader>
        </AllProjectsHeaders>
        <Row>
          {allProjectCards}
        </Row>
      </WorkContainer>
      </motion.div>
      <Footer />
    </div>
  );
}

export default Work;
