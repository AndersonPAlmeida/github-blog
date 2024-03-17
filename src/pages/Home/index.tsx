import { Summary } from '../../components/Summary'
import { HomeContainer, SearchFormContainer, TitlePublications } from './style'

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
    </HomeContainer>
  )
}