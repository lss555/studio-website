import styled from 'styled-components';

export const AboutContainer = styled.div`
  height: 100%;
  margin-top: 150px;
  margin-bottom: 5rem;
  box-sizing: border-box;
`;

export const AboutImageHeader = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 5rem auto;
  width: 90%;
  height: auto;
`;

export const AboutHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 3rem auto;
  @media screen and (max-width: 768px) {
    margin: 0 2rem 1rem 2rem;
  }
`;

export const HeaderSection = styled.div`
  height: 100%;
`;

export const AboutInfoSection = styled.div`
  height: 100%;
`;

export const InfoHeader = styled.h1`
  margin-left: 5rem;
  margin-bottom: 2rem;

`;

export const InfoPointSection = styled.div`
  display: flex;
  margin-left: 2rem;
  flex-wrap: wrap;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    display: block;
    flex-basis: 90%;
    width: 90%;
  }
`;

export const InfoPoints = styled.h3`
  display: flex;
  width: 40rem;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    flex-direction: column;
  }
`;

export const InfoPointText = styled.p`
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  padding: 1rem;
  border-bottom: 2px solid black;
`;

export const InfoPointContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  width: 40%;
  margin: auto auto 5rem auto;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
