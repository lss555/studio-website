import { SectionOneContainer, Header, ImageSection, RowImage, ImageContainer, Text } from './home-section-one-styles.jsx'
import { frontPageHeader, homepageHighlights } from '../data/data.js';




const SectionOne = () => {
  return (
  <SectionOneContainer>
    <Header>{frontPageHeader}</Header>
    <ImageSection>
      {homepageHighlights.map(project => {
        return (
          <div key={project.id}>
            <ImageContainer>
              <RowImage src={project.src}/>
              <Text>{project.projectName}</Text>
            </ImageContainer>
          </div>
        );
      })}
    </ImageSection>

  </SectionOneContainer>
  )
}

export default SectionOne;
