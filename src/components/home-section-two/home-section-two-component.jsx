import { SectionTwoContainer } from './home-section-two-styles.jsx';
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
          <div className='card-div'>
            <Card className="text-white projects-card" body inverse>
              <CardBody>
                <CardTitle>{project.projectName}</CardTitle>
              </CardBody>
              <img width="100%" src={project.src} alt='project img' />
              <CardBody>
                <CardText>{project.info}</CardText>
                <Link to={`/projects/${project.id}`}>More on this project</Link>
              </CardBody>
            </Card>
          </div>
        </Col>
      ))

      return (
          <SectionTwoContainer key={projects.id}>
            <Row>
              {projects}
            </Row>
          </SectionTwoContainer>
        )
      }

export default SectionTwo;
