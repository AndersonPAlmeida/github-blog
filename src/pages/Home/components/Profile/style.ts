import styled from "styled-components";
import { stylesStandard } from "../../../../styles/stylesStandard";

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3.2rem;
`

export const Description = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Name = styled.section`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme["base-title"]};
  ${stylesStandard.fonts.titleL}

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
    padding-bottom: 4px;
    
    &:hover {
      border-bottom-color: ${(props) => props.theme.blue};
    }
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