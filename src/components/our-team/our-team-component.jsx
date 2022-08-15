import { team } from '../data/data.js';
import { TeamContainer, TeamMember, TeamMemberImage, TeamMemberName, TeamMemberSummary, TeamMemberText, TeamMemberTop, TeamMemberSocial } from './our-team-styles';
import NavBar from '../navbar/navbar-component.jsx';
import Footer from '../footer/footer-component.js';
import { FaInstagram, FaYoutube } from 'react-icons/fa';


const OurTeam = () => {

  const teamMembers = team.map(theTeam => (
    <TeamContainer key={theTeam.id}>
      <TeamMember>
        <TeamMemberImage src={theTeam.src}/>
        <TeamMemberText>
          <TeamMemberTop>
            <TeamMemberName>{theTeam.name}</TeamMemberName>
            <TeamMemberSocial>
              <FaInstagram size={28}/>
            </TeamMemberSocial>
            <TeamMemberSocial>
              <FaYoutube size={28}/>
            </TeamMemberSocial>
          </TeamMemberTop>
          <TeamMemberSummary>{theTeam.summary}</TeamMemberSummary>
        </TeamMemberText>
      </TeamMember>
    </TeamContainer>
  ))

  return (
    <div>
    <NavBar />
      {teamMembers}
    <Footer />
    </div>
  );
}

export default OurTeam;
