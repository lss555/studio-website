import styled from 'styled-components'

export const SectionOneContainer = styled.div`
  background-color: #c6bfb6;
  height: 100vh;
  padding-top: 200px;

  @media screen and (max-width: 768px) {


  }
`;

export const Header = styled.h1`
  background-color: #c6bfb6;
  font-size: 5rem;
  padding-left: 2rem;
  padding-right: auto;
  margin-top: -2rem;

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
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  vertical-align: baseline;
  box-sizing: border-box;
  justify-content: space-around;
  margin-top: 5rem;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ImageContainer = styled.div`

  position: relative;
  text-align: center;
  color: white;
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const RowImage = styled.img`
  border-radius: 10px;
  width: 300px;
  height: auto;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;
