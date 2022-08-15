
import { WorkContainer, AllProjectsHeaders, AllProjectsSubHeader, AllProjectsHeader } from './work-styles';
import NavBar from '../navbar/navbar-component.jsx';
import Footer from '../footer/footer-component.js';
import { allProjectCards } from '../project-cards/project-cards-component.jsx';
import {
  Row
} from 'reactstrap';


const Work = () => {

  return (
    <div>
      <NavBar />
      <WorkContainer>
        <AllProjectsHeaders>
          <AllProjectsHeader>Our Work</AllProjectsHeader>
          <AllProjectsSubHeader to="/">Back To Home</AllProjectsSubHeader>
        </AllProjectsHeaders>
        <Row>
          {allProjectCards}
        </Row>
      </WorkContainer>
      <Footer />
    </div>
  );
}

export default Work;
