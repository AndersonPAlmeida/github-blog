import styled from "styled-components";
import { stylesStandard } from "../../styles/stylesStandard";

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