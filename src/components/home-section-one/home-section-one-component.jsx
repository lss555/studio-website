import { SectionOneContainer, Header, ImageSection, RowImage, ImageContainer, Text, ProjectLink, Container } from './home-section-one-styles.jsx';
import { frontPageHeader, homepageHighlights } from '../data/data.js';
import { CarouselWrapper } from 'react-pretty-carousel';



const SectionOne = () => {
  return (
  <SectionOneContainer>
    <Header>{frontPageHeader}</Header>
    <ImageSection>
      {homepageHighlights.map(project => {
        return (
          <Container key={project.id}>
            <ImageContainer>
              <ProjectLink href={project.to}>
                <RowImage src={project.src}/>
                <Text>{project.projectName}</Text>
              </ProjectLink>
            </ImageContainer>
          </Container>
        );
      })}
    </ImageSection>

  </SectionOneContainer>
  )
}

export default SectionOne;
