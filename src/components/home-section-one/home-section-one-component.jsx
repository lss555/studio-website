import { SectionOneContainer, Header, ImageSection, RowImage, ImageContainer, Text, ProjectLink, Container } from './home-section-one-styles.jsx'
import { frontPageHeader, homepageHighlights } from '../data/data.js';




const SectionOne = () => {
  return (
  <SectionOneContainer>
    <Header>{frontPageHeader}</Header>
    <ImageSection>
      {homepageHighlights.map(project => {
        return (
          <Container key={project.id}>
            <ProjectLink to='google.com'>
              <ImageContainer>
                <RowImage src={project.src}/>
                <Text>{project.projectName}</Text>
              </ImageContainer>
            </ProjectLink>
          </Container>
        );
      })}
    </ImageSection>

  </SectionOneContainer>
  )
}

export default SectionOne;
