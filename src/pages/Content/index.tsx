import { Summary } from "../../components/Summary";
import { Description } from "./components/Description";
import { ContentContainer } from "./style";

export function Content() {
  return (
    <ContentContainer>
      <Summary>
        <Description />
      </Summary>
    </ContentContainer>
  )
}