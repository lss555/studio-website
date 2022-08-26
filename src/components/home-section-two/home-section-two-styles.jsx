import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const SectionTwoContainer = styled.div`
  margin-top: 28rem;
  margin-left: 1rem;
  margin-right: 3rem;
  width: 96vw;
  color: black;
  @media screen and (max-width: 768px) {
    margin-top: 30rem;
  }
`;

export const Header = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  letter-spacing: .07rem;
`;

export const SubHeader = styled(LinkR)`
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

export const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
`;
