import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1300px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ServicesLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: black;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  border-radius: 2px;
  width: 100%;
  height: 50%;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  /* backdrop-filter: blur(5px); */
  z-index: 1;
`;

export const OverlayTitle = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

export const OverlayDescription = styled.p`
  font-size: 1.25em;
  margin-top: 0.25;
`;

export const ServicesCard = styled.div`
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  /* max-height: 440px; */
  height: 330px;
  padding: 18px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    ${Overlay} {
      display: flex;
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 230px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;
