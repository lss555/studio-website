import { team } from '../data/data.js';
import { TeamContainer, TeamMember, TeamMemberImage, TeamMemberName, TeamMemberSummary, TeamMemberText, TeamMemberTop, TeamMemberSocial, Spacer } from './our-team-styles';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';


const OurTeam = ({ toggle, isOpen }) => {

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
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <Spacer>Our Team</Spacer>
        {teamMembers}
      </motion.div>
    </div>
  );
}

export default OurTeam;
