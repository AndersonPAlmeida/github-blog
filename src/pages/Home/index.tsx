import { useContext } from 'react'
import { Summary } from '../../components/Summary'
import { Profile } from './components/Profile'
import { CardContainer, CardContentContainer, Content, HomeContainer, Title, TitlePublications } from './style'
import { PostContext } from '../../contexts/PostsContext'
import { dateFormatter } from '../../utils/formatter'
import Markdown from 'react-markdown'
import { SearchForm } from './components/SearchForm'

export function Home() {
  const { posts } = useContext(PostContext)
  const qtdPost = posts.length
  
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
              qtdPost === 1 ? 
              `${qtdPost} Publicação ` : 
              `${qtdPost} Publicações`
            }
          </span>
        </TitlePublications>

        <SearchForm />
      </div>

      <CardContentContainer>
        {
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