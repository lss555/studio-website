import { homepageHighlights } from '../data/data.js';
import { useParams } from 'react-router-dom';
import { Title, ProjectContainer, PlayerContainer, InfoText, SubTitle } from './projects-styles';
import NavBar from '../navbar/navbar-component.jsx';
import ReactPlayer from 'react-player';
import Footer from '../footer/footer-component.js';
import { motion } from 'framer-motion';


const Projects = (props) => {
  let params = useParams();

  return (
    <div>
    <NavBar />
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    {homepageHighlights.map(project => {
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
          </ProjectContainer> : null}</b>
      );
    })}
    </motion.div>
    <Footer />
    </div>
  );
}

export default Projects;
