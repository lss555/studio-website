import styled from 'styled-components';


export const SectionOneContainer = styled.div`
  background-color: #c6bfb6;
  height: 40vh;
  padding-top: 200px;
  width: 96vw;
  display: flex;
  @media screen and (max-width: 768px) {


  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

export const ImageBg = styled.img`
  margin-top: 80px;
  width: 100vw;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const Header = styled.h1`
  color: white;
  font-size: 5rem;
  padding-left: 2rem;
  padding-right: auto;
  margin-top: -2rem;
  margin-bottom: 5rem;
  width: 70%;
  z-index: 10;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  vertical-align: baseline;
  box-sizing: border-box;
  justify-content: space-around;
  margin-top: 5rem;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-right: 20px;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  color: white;
  :hover {
    transition: transform 1s;
    transform: scale(1.1);
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: pointer;
  text-decoration: none;
  color: white;
  transform: translate(-50%, -50%);
`;



export const RowImage = styled.img`
  border-radius: 15px;
  width: 300px;
  height: auto;
  margin-bottom: 20px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
`;
