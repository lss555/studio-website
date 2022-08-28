import styled from 'styled-components';

export const ProjectContainer = styled.div`
  display: flex;
  height: 100%;
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-right: 1 rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
`;

export const SubTitle = styled.h3`
  display: flex;
`;

export const PlayerContainer = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 90vw;
  }
`;

export const InfoText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 5%;
`;
