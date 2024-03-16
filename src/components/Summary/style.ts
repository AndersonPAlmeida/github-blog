import styled from "styled-components";
import { stylesStandard } from "../../styles/stylesStandard";

export const SummaryContainer = styled.div`
  ${stylesStandard.widthScreen.screenXG}
  min-height: 20rem;
  background-color: ${(props) => props.theme["base-profile"]};
  padding: 3.2rem 4rem;
  border-radius: 8px;
  margin-top: -10rem;
`