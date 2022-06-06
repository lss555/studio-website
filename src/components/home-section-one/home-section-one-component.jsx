import { SectionOneContainer, Header, ImageSection, RowImage } from './home-section-one-styles.jsx'
import MtnImage from '../../images/mountains.jpg'


const SectionOne = () => {
  return (
  <SectionOneContainer>
    <Header>A FILM STUDIO DRIVEN BY RESEARCH AND STRATEGY</Header>
    <ImageSection>
      <RowImage src={MtnImage} />
      <RowImage src={MtnImage} />
      <RowImage src={MtnImage} />
      <RowImage src={MtnImage} />
    </ImageSection>

  </SectionOneContainer>
  )
}

export default SectionOne;
