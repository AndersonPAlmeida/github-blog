import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./style";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { PostContext } from "../../../../contexts/PostsContext";

const searchFormSchema = zod.object({
  query: zod.string()
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  const { searchPostsApi, loadingPage } = useContext(PostContext) 

  async function handleKeyPress (event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      loadingPage()
      event.preventDefault()
      await handleSearchPosts({ query: event.currentTarget.value });
    }
  }

  async function handleSearchPosts(data: SearchFormInputs){
    await searchPostsApi(data.query)
    reset()
  }

  return (
    <SearchFormContainer>
      <input type="text" {...register('query')} placeholder="Buscar conteúdo" onKeyPress={handleKeyPress}/>
    </SearchFormContainer>
  )
}