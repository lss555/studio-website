import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const SectionTwoContainer = styled.div`
  margin-top: 28rem;
  margin-left: auto;
  margin-right: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  width: 96vw;
  justify-content: center;
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
  @media screen and (min-height: 1000px) {
    z-index: 10001;
    display: flex;
    margin-top: 48rem;
  }
`;

export const RowContainer = styled.div`
  @media screen and (min-height: 1000px) {
    margin-top: 5rem;
  }
`;
