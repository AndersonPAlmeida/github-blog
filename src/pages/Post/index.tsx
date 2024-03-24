import { Summary } from "../../components/Summary";
import { Description } from "./components/Description";
import { ContentContainer, ContentDescription } from "./style";
import Markdown from 'react-markdown'

export function Post() {
  return (
    <ContentContainer>
      <Summary>
        <Description />
      </Summary>
      
      <ContentDescription>
        <Markdown>
          # Hi, *Pluto*!
        </Markdown>
      </ContentDescription>
    </ContentContainer>
  )
}