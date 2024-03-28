import { useContext } from 'react'
import { Summary } from '../../components/Summary'
import { Card } from './components/Card'
import { Profile } from './components/Profile'
import { CardContentContainer, HomeContainer, SearchFormContainer, TitlePublications } from './style'
import { PostContext } from '../../contexts/PostsContext'

export function Home() {
  const { posts } = useContext(PostContext)
  
  console.log(posts);
  
  return(
    <HomeContainer>      
      <Summary>
        <Profile />
      </Summary>

      <div>
        <TitlePublications>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </TitlePublications>

        <SearchFormContainer>
          <input type="text" name="searchContent" placeholder="Buscar conteúdo" />
        </SearchFormContainer>
      </div>

      <CardContentContainer>
        <Card numberIssue={1}/>
        <Card numberIssue={2}/>
        <Card numberIssue={3}/>
      </CardContentContainer>
    </HomeContainer>
  )
}