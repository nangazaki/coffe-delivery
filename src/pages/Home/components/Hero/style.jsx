import styled from "styled-components";
import img from "../../../../assets/Background.svg"

export const Background = styled.section`
  width: 100%;
  height: 34rem;
  background: url(${img}) no-repeat center;
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
    flex-direction: column-reverse;
    gap: 40px;
  }

  img {
    max-width: 476px;
    width: 100%;
  }
`;

export const TextGroup = styled.div`
  max-width: 580px;
  width: 100%;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes['text-l']};
  color: ${({ theme }) => theme.colors['base-text']};
  margin-top: 16px;
  margin-bottom: 4rem;
`;