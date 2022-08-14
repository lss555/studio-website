
import { TeamContainer } from './our-team-styles';
import NavBar from '../navbar/navbar-component.jsx';
import Footer from '../footer/footer-component.js';


const OurTeam = () => {

  return (
    <div>
    <NavBar />
      <TeamContainer>
        <h1>Our Team</h1>
      </TeamContainer>
    <Footer />
    </div>
  );
}

export default OurTeam;
