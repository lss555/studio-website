import { SectionOneContainer, Header } from './home-section-one-styles.jsx';
import { frontPageHeader } from '../data/data.js';




const SectionOne = () => {
  return (
  <SectionOneContainer>
        <Header>{frontPageHeader}</Header>
  </SectionOneContainer>
  )
}

export default SectionOne;
