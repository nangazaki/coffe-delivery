import styled from "styled-components";


export const CoffeCardContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors["base-card"]};
  padding: 1.25rem;
  padding-top: 0;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 7rem;
    height: 7rem;
    margin-top: -1rem;
  }
`
export const Tags = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: .75rem;
  margin-bottom: 1rem;

  span {
    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    font-size: ${({ theme }) => theme.fontSizes["components-tag"]};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    text-transform: uppercase;
    padding: .25rem .4rem;
    border-radius: 999px;
    font-weight: 600;
  }
`

export const Name = styled.span`
  font-family: ${({ theme }) => theme.fonts["title"]};
  font-size: ${({ theme }) => theme.fontSizes["title-s"]};
  color: ${({ theme }) => theme.colors["base-subtitle"]};
  margin-bottom: .5rem;
`

export const Description = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes["text-s"]};
  color: ${({ theme }) => theme.colors["base-label"]};
  margin-bottom: 2rem;
`

export const CardFooter = styled.div`
  width: 100%;
  padding: .25rem;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 2px;
    align-items: center;

    h3 {
      color: ${({ theme }) => theme.colors["base-text"]};
    }
    span {
      color: ${({ theme }) => theme.colors["base-text"]};
      font-size: ${({ theme }) => theme.fontSizes["text-s"]};
    }
  }
`

export const AddCartWrapper = styled.div`
  display: flex;
  gap: 8px;

  > button {
    background: ${({ theme }) => theme.colors["purple-dark"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    width: 2.375rem;
    height: 2.375rem;
    padding: .5rem;
    border: none;
    border-radius: 6px;
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) .5s;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors["purple"]};
    }
  }
`
