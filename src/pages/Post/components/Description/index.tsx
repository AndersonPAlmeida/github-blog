import { FaAngleLeft, FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from 'react-icons/fa6'
import { Datas, DescriptionContainer, Header, Links } from "./style";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { PostContext } from '../../../../contexts/PostsContext';
import { useProfile } from '../../../../hooks/useProfile';
import { dateFormatter } from '../../../../utils/formatter';

export function Description() {
  const { post } = useContext(PostContext)
  const profile  = useProfile()
  
  if (profile === null) {
    throw new Error('Erro ao carregar usuário');
  }

  const { login, followers } = profile;

  return (
    <DescriptionContainer>
      <Links>
        <NavLink to="/" title="Home">
          <FaAngleLeft size={14} />
          Voltar
        </NavLink>
        <a href={post.html_url} target="_blank">
          Ver no github 
          <FaArrowUpRightFromSquare size={14}/>
        </a>
      </Links>

      <Header>
        <h2>{post.title}</h2>

        <Datas>
          <div>
            <FaGithub size={18}/>
            <span>{login ?? "login não encontrado"}</span>
          </div>
          <div>
            <FaBuilding size={18}/>
            <span>{dateFormatter(new Date(post.updated_at))}</span>
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
      </Header>
    </DescriptionContainer>
  )
}