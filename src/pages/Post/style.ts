import { stylesStandard } from './../../styles/stylesStandard';
import styled from "styled-components";

export const ContentContainer = styled.section`
  ${stylesStandard.widthScreen.screenXG}
  margin-top: -10rem;

  display: flex;
  flex-direction: column;
`

export const ContentDescription = styled.section`
  padding: 4rem 3.2rem;

  .line-break {
    white-space: pre-wrap;
  }
`

export const ErrorContainer = styled.section`
  ${stylesStandard.fonts.titleP}
  background-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme["base-makdown"]};
  padding: 1rem;
  border-radius: 8px;
`