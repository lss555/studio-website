import styled from 'styled-components'

export const SectionTwoContainer = styled.div`
  margin-top: 25rem;
  margin-left: 1rem;
  margin-right: 3rem;
  width: 100%;
  color: black;
`;

export const Header = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  letter-spacing: .07rem;
`;

export const SubHeader = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: .07rem;
  text-decoration: none;
  color: black;
  :hover {
  cursor: pointer;
  color: red;
  }
`;

export const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
`;
