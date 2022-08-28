import { allProjects } from '../data/data.js';
import { useParams } from 'react-router-dom';
import { Title, ProjectContainer, PlayerContainer, InfoText, SubTitle } from './projects-styles';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';


const Projects = (props) => {
  let params = useParams();

  return (
    <div>
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    {allProjects.map(project => {
      return (
        <b key={project.id}>{params.id === project.id ?
          <ProjectContainer key={project.id}>
            <Title>{project.projectName}</Title>
            <SubTitle>
              {project.subTitle}
            </SubTitle>
            <PlayerContainer>
              <ReactPlayer controls url={project.url}/>
            </PlayerContainer>
            <InfoText>
              {project.info}
            </InfoText>
          </ProjectContainer> : null
        }</b>
      );
    })}
    </motion.div>
    </div>
  );
}

export default Projects;
