import { CardContainer, Content, Title } from "./style";

export function Card(){
  return (
    <CardContainer>
      <Title>
        <h3>JavaScript data types and data structures</h3>
        <span>Há 2 dias</span>
      </Title>
      
      <Content>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
      </Content>
    </CardContainer>
  )
}