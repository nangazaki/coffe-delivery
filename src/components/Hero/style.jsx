import styled from "styled-components";
import img from "../../assets/Background.png"

export const Background = styled.section`
  width: 100%;
  height: 544px;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-items: center;

  @media (max-width: 1080px) {
    height: auto;
  }
`;

export const HeroSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1080px) {
    flex-direction: column;
    gap: 40px;
  }

  img {
    max-width: 476px;
    width: 100%;
    height: 360px;
  }
`;

export const TextGroup = styled.div`
  max-width: 580px;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 20px;
  margin-top: 16px;
`;