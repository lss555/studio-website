import {
  Card, CardText, CardBody,
  CardTitle, Col
} from 'reactstrap'
import { Link } from 'react-router-dom';
import { } from './project-cards-styles.jsx';
import { homepageHighlights, allProjects } from '../data/data.js';
import './project-cards.css';


export const projectCards = homepageHighlights.map(project => (
      <Col className='card-column' sm='4' key={project.id}>
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

    export const allProjectCards = allProjects.map(allProject => (
          <Col className='card-column' sm='4' key={allProject.id}>
            <Link to={`/projects/${allProject.id}`} className="card-link">
              <div className='card-div'>
                <Card className="projects-card" body inverse>
                  <CardBody>
                    <CardTitle className="card-title">{allProject.projectName}</CardTitle>
                  </CardBody>
                  <img width="100%" src={allProject.src} alt='project img' />
                  <CardBody>
                    <CardText className="card-text">{allProject.info}</CardText>
                  </CardBody>
                </Card>
              </div>
            </Link>
          </Col>
        ))
