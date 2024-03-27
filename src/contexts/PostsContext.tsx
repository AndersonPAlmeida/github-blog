import { ReactNode, createContext } from "react";

interface PostContextType {
  
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {

  return (
    <PostContext.Provider value={{}}>
      { children }
    </PostContext.Provider>
  )
}