import styled from 'styled-components'

export const SectionOneContainer = styled.div`
  background-color: #c6bfb6;
  height: 100vh;
  padding-top: 200px;
  display: grid;
  grid-template-rows: repeat(2, 50vh);
`;

export const Header = styled.h1`
  background-color: #c6bfb6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  padding-left: 2rem;
  padding-right: auto;
  margin-top: -5rem;
  grid-row: 1 / 2;
`;


// export const SmallPrint = styled.div`
//   background-color: #c6bfb6;
//   height: 100vh;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
// `;

export const ImageSection = styled.div`
  grid-row: 2 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 20%);
`;

export const RowImage = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  grid-column: 1 / 4;
  padding: 1rem;
`;
