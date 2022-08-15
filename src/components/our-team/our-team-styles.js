import styled from 'styled-components';

export const TeamContainer = styled.div`
  height: 100vh;
  margin-top: 200px;
`;

export const TeamMember = styled.div`
  height: 60vh;
  box-shadow: 0 2px 20px gray;
  display: flex;
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const TeamMemberImage = styled.img`
  display: flex;
  height: 40vh;
  border-radius: 2rem;

`;

export const TeamMemberName = styled.h2`
  display: flex;
  justify-content: flex-start;
  margin-right: 5rem;
`;

export const TeamMemberSummary = styled.p`
  display: flex;
  letter-spacing: .05rem;
  color: red;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 1.5rem 1rem 1rem 1rem;
  width: 100%;
`;

export const TeamMemberText = styled.div`
  margin-top: 1rem;
`;

export const TeamMemberTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const TeamMemberSocial = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 2rem;
`;
