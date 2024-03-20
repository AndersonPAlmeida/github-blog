import styled from "styled-components";
import { stylesStandard } from "../../../../styles/stylesStandard";

export const CardContainer = styled.div`
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
    min-width: 25%;
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
`