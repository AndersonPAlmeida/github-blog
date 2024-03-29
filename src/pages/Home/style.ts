import styled from "styled-components";
import { stylesStandard } from "../../styles/stylesStandard";

export const HomeContainer = styled.section`
  ${stylesStandard.widthScreen.screenXG}
  margin-top: -10rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const TitlePublications = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;

  h2 {
    ${stylesStandard.fonts.titleP}
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    ${stylesStandard.fonts.textS}
    color: ${(props) => props.theme["base-span"]};
  }
`

export const SearchFormContainer = styled.form`
  display: flex;

  input {
    flex: 1;
    border-radius: 6px;
    padding: 1.2rem 1.6rem;
    background-color: ${(props) => props.theme["base-input"]};
    
    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`

export const CardContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 42rem);
  gap: 2.5rem 3.2rem;
`