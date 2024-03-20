import { Summary } from '../../components/Summary'
import { Card } from './components/Card'
import { CardContentContainer, HomeContainer, SearchFormContainer, TitlePublications } from './style'

export function Home() {
  return(
    <HomeContainer>      
      <Summary />

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
        <Card />
        <Card />
        <Card />
      </CardContentContainer>
    </HomeContainer>
  )
}