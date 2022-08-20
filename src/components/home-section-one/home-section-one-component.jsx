import { SectionOneContainer, Header, ImageBg, HeroBg } from './home-section-one-styles.jsx';
import { frontPageHeader } from '../data/data.js';
import Skate from '../../images/skate.gif'



const SectionOne = () => {
  return (
  <SectionOneContainer>
    <HeroBg>
      <ImageBg src={Skate} />
    </HeroBg>
        <Header>{frontPageHeader}</Header>
  </SectionOneContainer>
  )
}

export default SectionOne;
