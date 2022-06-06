import { SectionOneContainer, Header, ImageSection, RowImage, ImageContainer, Text } from './home-section-one-styles.jsx'
import MtnImage from '../../images/mountains.jpg'


const SectionOne = () => {
  return (
  <SectionOneContainer>
    <Header>A FILM STUDIO DRIVEN BY RESEARCH AND STRATEGY</Header>
    <ImageSection>
      <ImageContainer>
        <RowImage src={MtnImage} />
        <Text>Project1</Text>
      </ImageContainer>
      <ImageContainer>
        <RowImage src={MtnImage} />
        <Text>Project2</Text>
      </ImageContainer>
      <ImageContainer>
        <RowImage src={MtnImage} />
        <Text>Project3</Text>
      </ImageContainer>
      <ImageContainer>
        <RowImage src={MtnImage} />
        <Text>Project4</Text>
      </ImageContainer>
    </ImageSection>

  </SectionOneContainer>
  )
}

export default SectionOne;
