import styled from 'styled-components';

export const TeamContainer = styled.div`
  height: 65vh;
  box-sizing: border-box;
  @media screen and (max-width: 576px) {

  }
`;

export const TeamMember = styled.div`
  height: 60vh;
  box-shadow: 0 2px 20px gray;
  display: flex;
  margin-right: 1rem;
  margin-left: 1rem;
  border-radius: 2rem;
`;

export const TeamMemberImage = styled.img`
  display: flex;
  height: 100%;
  border-radius: 2rem;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    height: 15rem;
    margin-right: 1rem;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const TeamMemberName = styled.h2`
  display: flex;
  justify-content: flex-start;
  margin-right: 5rem;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    margin-right: 0;
  }
`;

export const TeamMemberSummary = styled.p`
  display: flex;
  letter-spacing: .05rem;
  color: red;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 1rem 1rem 1rem;
  width: 100%;
  overflow-wrap: break-word;
`;

export const TeamMemberText = styled.div`
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    margin-right: 2rem;
  }
`;

export const TeamMemberTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-left: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }
`;

export const TeamMemberSocial = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 2rem;
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
    margin-top: 1rem;
  }
`;

export const Spacer = styled.h1`
  display: flex;
  margin-top: 8rem;
  justify-content: center;
  margin-bottom: 3rem;
`;
