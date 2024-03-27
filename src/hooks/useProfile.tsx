import { useEffect, useState } from 'react';

export interface User {
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: number;
  avatar_url: string;
  html_url: string;
}

export function useProfile() {
  const [user, setUser] = useState<User | null>({ name: "", bio: "", login: "", company: "", followers: 0, avatar_url: "", html_url: "" });

  async function loadUser() {
    const response = await fetch('https://api.github.com/users/AndersonPAlmeida')

    if (!response.ok) {
      setUser(null)
    }

    const data = await response.json()

    const {name, bio, login, company, followers, avatar_url, html_url} = data

    if (name && login && avatar_url && html_url) {
      setUser({ name, bio, login, company, followers, avatar_url, html_url });
    } else {
      setUser(null)
    }
  }

  useEffect(() => {
    loadUser()
  }, [])

  return user
}
