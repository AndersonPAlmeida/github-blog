import styled from "styled-components";
import { stylesStandard } from "../../../../styles/stylesStandard";

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Links = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    height: min-content;
    align-items: center;
    justify-content: center;
    gap: 8px;

    ${stylesStandard.fonts.link}
    color: ${(props) => props.theme.blue};
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    padding-bottom: 2px;
    
    &:hover {
      border-bottom-color: ${(props) => props.theme.blue};
    }
  }
`

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    color: ${(props) => props.theme["base-title"]};
    ${stylesStandard.fonts.titleL}
  }
`

export const Datas = styled.section`
  display: flex;
  gap: 2.4rem;
  color: ${(props) => props.theme["base-label"]};

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`