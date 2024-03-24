import { ReactNode, createContext, useEffect, useState } from "react";

interface User {
  name: string
  bio: string
  login: string
  company: string
  followers: number
  avatar_url: string
  html_url: string
}

interface PostContextType {
  profile: User;
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [user, setUser] = useState<User>({ name: "", bio: "", login: "", company: "", followers: 0, avatar_url: "", html_url: "" });


  async function loadUser() {
    const response = await fetch('https://api.github.com/users/AndersonPAlmeida')

    if (!response.ok) {
      throw new Error('Erro ao carregar usuário');
    }

    const data = await response.json()

    const {name, bio, login, company, followers, avatar_url, html_url} = data

    if (name && bio && login && company && followers && avatar_url && html_url) {
      setUser({ name, bio, login, company, followers, avatar_url, html_url });
    } else {
      console.error("Dados incompletos recebidos da API");
    }
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <PostContext.Provider value={{profile: user}}>
      { children }
    </PostContext.Provider>
  )
}