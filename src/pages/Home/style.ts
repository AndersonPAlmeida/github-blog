import styled from "styled-components";
import { stylesStandard } from "../../styles/stylesStandard";
import { Link } from "react-router-dom";

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

export const CardContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 42rem);
  gap: 2.5rem 3.2rem;
`

export const CardContainer = styled(Link)`
  background-color: ${(props) => props.theme["base-post"]};
  max-height: 26rem;
  border-radius: 1rem;
  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    display: block;
    height: 100%;
  }
`

export const Title = styled.section`
  display: flex;
  justify-content: space-between;

  h3 {
    ${stylesStandard.fonts.titleM}
    color: ${(props) => props.theme["base-title"]};
    padding-right: 1rem;
  }

  span {
    width: 20rem;
    text-align: end;
    ${stylesStandard.fonts.textS}
    color: ${(props) => props.theme["base-span"]};
  }
`

export const Content = styled.div`
  width: 100%;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6; 
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme["base-text"]};
`