import { homepageHighlights } from '../data/data.js';
import { useParams } from 'react-router-dom';
import { RowImage, ImageContainer, Text, ProjectLink, Container } from '../home-section-one/home-section-one-styles.jsx'


const Projects = (props) => {
  let params = useParams();

  return (
    <div>
    {homepageHighlights.map(project => {
      return (
        <b key={project.id}>{params.id === project.id ?
          <Container key={project.id}>
            <ImageContainer>
              <ProjectLink href={project.to}>
                <RowImage src={project.src}/>
                <Text>{project.projectName}</Text>
              </ProjectLink>
            </ImageContainer>
          </Container> : null}</b>
      );
    })}
    </div>
  );
}

export default Projects;
