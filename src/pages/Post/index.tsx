import rangeParser from "parse-numeric-range";
import { useParams } from "react-router-dom";
import { Summary } from "../../components/Summary";
import { Description } from "./components/Description";
import { ContentContainer, ContentDescription } from "./style";
import Markdown from 'react-markdown'
import { useContext, useEffect } from "react";
import { PostContext } from "../../contexts/PostsContext";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from "styled-components";

export function Post() {
  const { number } = useParams()
  const { post, searchPostApi } = useContext(PostContext)
  const colors = useTheme()

  useEffect(() => {
    searchPostApi(Number(number));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // console.log(post, number);
  
  return (
    <ContentContainer>
      <Summary>
        {
          Object.keys(post).length !== 0 ?
          <Description /> :
          <h1>Não foi econtrado dados na API</h1>
        }
      </Summary>
      
      <ContentDescription>
      <Markdown
        children={post.body}
        className="line-break"
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");

            if (!match) {
              return <code className={className} {...props} />;
            }

            const meta = node?.data?.meta as string | undefined;

            const applyHighlights: lineTagPropsFunction = highlights => {
              if (!meta) {
                return {};
              }

              const regex = /{([\d,-]+)}/;
              const metadata = meta.replace(/\s/g, "");
              const strlineNumbers = regex.test(metadata)
                ? regex.exec(metadata)![1]
                : "0";

              const highlightLines = rangeParser(strlineNumbers);
              const data = highlightLines.includes(highlights)
                ? "highlight"
                : undefined;

              return { data };
            };

            return (
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                className="codeStyle"
                showLineNumbers
                wrapLines={!!meta}
                useInlineStyles
                lineProps={applyHighlights}
                children={String(children).replace(/\s$/g, "")}
                style={
                  {
                    ...oneDark,
                    'code[class*="language-"]': {
                      ...oneDark['code[class*="language-"]'],
                      backgroundColor: colors["base-post"],
                      color: colors["base-makdown"],
                    },
                    'pre[class*="language-"]': {
                      ...oneDark['pre[class*="language-"]'],
                      backgroundColor: colors["base-post"],
                      color: colors["base-makdown"],
                    },
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  } as any
                }
                {...props}
              />
            );
          },
        }}
      />
      </ContentDescription>
    </ContentContainer>
  )
}