import { homepageHighlights } from '../data/data.js';
import { useParams } from 'react-router-dom';

const Projects = (props) => {
  const { projectId } = useParams();

  return (
    <div>
      <h1>{props.projectName}</h1>
      <h3>{projectId}</h3>
    </div>
  );
}

export default Projects;
