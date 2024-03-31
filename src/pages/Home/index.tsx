import { useContext, useEffect } from 'react'
import { Summary } from '../../components/Summary'
import { Profile } from './components/Profile'
import { CardContainer, CardContentContainer, Content, HomeContainer, Title, TitlePublications, WarningContainer } from './style'
import { PostContext } from '../../contexts/PostsContext'
import { dateFormatter } from '../../utils/formatter'
import Markdown from 'react-markdown'
import { SearchForm } from './components/SearchForm'

export function Home() {
  const { posts,searchPostsApi } = useContext(PostContext)
  const quantityPosts = posts.length
  
  useEffect(() => {
    searchPostsApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <HomeContainer>      
      <Summary>
        <Profile />
      </Summary>

      <div>
        <TitlePublications>
          <h2>Publicações</h2>
          <span>
            {
              quantityPosts === 1 ? 
              `${quantityPosts} Publicação ` : 
              `${quantityPosts} Publicações`
            }
          </span>
        </TitlePublications>

        <SearchForm />
      </div>

      <CardContentContainer>
        {
          quantityPosts === 0 ?
          <WarningContainer>
            Não há posts com essas palavras chaves
          </WarningContainer> :
          posts.map((post) => (
            <CardContainer key={post.number} to={`/post/${post.number}`}>
              <Title>
                <h3>{post.title}</h3>
                <span>{dateFormatter(new Date(post.updated_at))}</span>
              </Title>
              
              <Content>
                <Markdown>
                  {post.body}
                </Markdown>
              </Content>
            </CardContainer>
          ))
        }
        
      </CardContentContainer>
    </HomeContainer>
  )
}