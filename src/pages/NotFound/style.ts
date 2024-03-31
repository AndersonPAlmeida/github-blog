import styled from "styled-components";
import { stylesStandard } from "../../styles/stylesStandard";

export const NotFoundContainer = styled.section`
  ${stylesStandard.widthScreen.screenXG}
  margin-top: 1rem;
  
  a {
    width: min-content;
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

export const Information = styled.div`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  ${stylesStandard.fonts.titleL}    
`