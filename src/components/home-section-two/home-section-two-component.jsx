import { SectionTwoContainer, Header, SubHeader, Headers } from './home-section-two-styles.jsx';
import './home-section-two.css';
import { homepageHighlights } from '../data/data.js';
import {
  Card, CardText, CardBody,
  CardTitle, Row, Col
} from 'reactstrap'
import { Link } from 'react-router-dom'

const SectionTwo = () => {

  const projects = homepageHighlights.map(project => (
        <Col sm='4' key={project.id}>
          <Link to={`/projects/${project.id}`} className="card-link">
            <div className='card-div'>
              <Card className="projects-card" body inverse>
                <CardBody>
                  <CardTitle className="card-title">{project.projectName}</CardTitle>
                </CardBody>
                <img width="100%" src={project.src} alt='project img' />
                <CardBody>
                  <CardText className="card-text">{project.info}</CardText>
                </CardBody>
              </Card>
            </div>
          </Link>
        </Col>
      ))

      return (
          <SectionTwoContainer key={projects.id}>
          <Headers>
            <Header>Work</Header>
            <SubHeader to="">View All</SubHeader>
          </Headers>
            <Row>
              {projects}
            </Row>
          </SectionTwoContainer>
        )
      }

export default SectionTwo;
