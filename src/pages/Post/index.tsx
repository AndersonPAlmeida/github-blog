import { useParams } from "react-router-dom";
import { Summary } from "../../components/Summary";
import { Description } from "./components/Description";
import { ContentContainer, ContentDescription } from "./style";
import Markdown from 'react-markdown'
import { useContext, useEffect } from "react";
import { PostContext } from "../../contexts/PostsContext";

export function Post() {
  const { number } = useParams()
  const { post, fetchPost } = useContext(PostContext)

  useEffect(() => {
    fetchPost(Number(number));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  console.log(post, number);
  
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