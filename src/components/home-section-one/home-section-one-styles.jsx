import styled from 'styled-components';
import MtnImage from '../../images/mountains.jpg';
import Gif from '../../images/animated.webp';

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
  margin-bottom: 5rem;

  width: 70%;
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  border: red 3px solid;
  width: 33%;
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
`;

export const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;



export const RowImage = styled.img`
  border-radius: 15px;
  width: 300px;
  height: auto;
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    transition: transform 1s;
    transform: scale(1.1);
    background-image: url(animated.gif);
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;
