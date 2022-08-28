import { SectionOneContainer, Header, ImageBg, HeroBg } from './home-section-one-styles.jsx';
import { frontPageHeader } from '../data/data.js';
import DirtBike from '../../images/dirtbike.gif'



const SectionOne = () => {
  return (
  <SectionOneContainer>
    <HeroBg>
      <ImageBg src={DirtBike} />
    </HeroBg>
        <Header>{frontPageHeader}</Header>
  </SectionOneContainer>
  )
}

export default SectionOne;
