import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./style";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = zod.object({
  query: zod.string()
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs){
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(data);
  }

  return (
    <SearchFormContainer onChange={handleSubmit(handleSearchPosts)}>
      <input type="text" {...register('query')} placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}