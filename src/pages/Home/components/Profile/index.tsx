import { FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from 'react-icons/fa6'
import { Datas, Description, Name, ProfileContainer } from './style'
import { useContext } from 'react'
import { PostContext } from '../../../../contexts/PostsContext'

export function Profile() {
  const { profile } = useContext(PostContext)
  
  const {name, bio, login, company, followers, avatar_url, html_url} = profile;
  return (
    <ProfileContainer>
      <img src={avatar_url} />
      <Description>
        <Name>
          <span>{name ?? "Nome não encontrado"}</span>
          <a href={html_url} target='_blank'>
            <span>GITHUB </span>
            <FaArrowUpRightFromSquare size={14}/>
          </a>
        </Name>
        
        <div className="bio">
          {bio ?? "Bio não encontrada"}
        </div>

        <Datas>
          <div>
            <FaGithub size={18}/>
            <span>{login ?? "login não encontrado"}</span>
          </div>
          <div>
            <FaBuilding size={18}/>
            <span>{company ?? "Não trabalha em uma compania"}</span>
          </div>
          <div>
            <FaUserGroup size={18}/>
            <span>
              {
                followers === 1 ? 
                `${followers} seguidor` :
                `${followers} seguidores`                
              }
            </span>
          </div>
        </Datas>
      </Description>
    </ProfileContainer>
  )
}