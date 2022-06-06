import styled from 'styled-components'

export const SectionOneContainer = styled.div`
  background-color: #c6bfb6;
  height: 100vh;
  padding-top: 200px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "header header header header"
    "header header header header"
    "image image image image";
    grid-gap: 2rem;
  @media screen and (max-width: 1360px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "header"
      "image"
      "image"
      "image"
      "image";

  }
`;

export const Header = styled.h1`
  background-color: #c6bfb6;
  font-size: 5rem;
  padding-left: 2rem;
  padding-right: auto;
  margin-top: -2rem;
  grid-row: 1 / 2;
  grid-area: header;
  width: 70%;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;


// export const SmallPrint = styled.div`
//   background-color: #c6bfb6;
//   height: 100vh;
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
// `;

export const ImageSection = styled.div`
  grid-template-columns: repeat(4, 25%);
  grid-area: image;
  padding-left: 2rem;
  padding-right: auto;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const RowImage = styled.img`
  width: 300px;
  height: auto;
  align-items: center;
  margin-bottom: 20px;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;
