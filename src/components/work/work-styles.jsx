import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const WorkContainer = styled.div`
  margin-top: 10rem;
  margin-left: 1rem;
  margin-right: 3rem;
  width: 100%;
  color: black;
`;

export const AllProjectsHeader = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  letter-spacing: .07rem;
`;

export const AllProjectsSubHeader = styled(LinkR)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: .07rem;
  text-decoration: none;
  color: black;
  :hover {
  cursor: pointer;
  color: #610517;
  }
`;

export const AllProjectsHeaders = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
`;
