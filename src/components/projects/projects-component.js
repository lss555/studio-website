import { homepageHighlights } from '../data/data.js';
import { useParams } from 'react-router-dom';
import { Title, ProjectContainer, PlayerContainer, InfoText } from './projects-styles';
import NavBar from '../navbar/navbar-component.jsx';
import ReactPlayer from 'react-player';


const Projects = (props) => {
  let params = useParams();

  return (
    <div>
    <NavBar />
    {homepageHighlights.map(project => {
      return (
        <b key={project.id}>{params.id === project.id ?
          <ProjectContainer key={project.id}>
            <Title>{project.projectName}</Title>
            <PlayerContainer>
              <ReactPlayer controls url={project.url}/>
            </PlayerContainer>
            <InfoText>
              {project.info}
            </InfoText>
          </ProjectContainer> : null}</b>
      );
    })}
    </div>
  );
}

export default Projects;
