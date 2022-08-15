import { SectionTwoContainer, Header, SubHeader, Headers } from './home-section-two-styles.jsx';
import './home-section-two.css';
import { projectCards } from '../project-cards/project-cards-component.jsx';
import {
  Row
} from 'reactstrap';

const SectionTwo = () => {

      return (
          <SectionTwoContainer>
            <Headers>
              <Header>Work</Header>
              <SubHeader to="/work">View All</SubHeader>
            </Headers>
            <Row>
              {projectCards}
            </Row>
          </SectionTwoContainer>
        )
      }

export default SectionTwo;
