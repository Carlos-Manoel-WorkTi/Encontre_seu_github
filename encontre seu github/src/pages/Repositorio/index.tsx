// import { FaGithub} from "react-icons/fa";

import { Link, useParams } from "react-router-dom";
import { Container, Row, Column, SearchInput, Perfil, Img, NameBios, ContainerRepositorios, BlockRepositorio, NameRepositorio, RowLine, Voltar } from "./style";
import api from "../../services/api";
import { SetaLeft } from "../Main/icons";
import { ButtonSubmit } from "../Main/style";
import { AddRep } from "../Main/icons";
import { useEffect, useState } from "react";

interface ListInterface {
  nome: string;
  link:string;
}
export default function Teste() {
  // interface repoParams {
  //   id:number;
  //   full_name: string;
  // }
  const [listaR, setListaR] = useState<ListInterface[]>([]); // Inicializando como um array vazio

  const params = useParams();
  // const [repositorios, setRepositorios] = useState<repoParams>();

  useEffect(() => {
    async function getRep() {
      console.log(params.name);
        
      try {
        const response = await api.get(`users/${params.name}/repos`);
        const rep = response.data.map((repo:{full_name:string}) => {
          const repos = repo.full_name.split('/')
          return { nome: repos[1], link: repo.full_name };
         
        })
          setListaR(rep);
        
      }catch (error) {
        console.error('Erro ao buscar repositórios:', error);
      }
    }
  
    if (params.name) {
      getRep();
    }
  }, [params.name]);
  

  

  return (
    <>
      <Container>
         <Row>
          <Column>
            <Perfil>
              <Img src="https://avatars.githubusercontent.com/u/103239235?v=4"/> <NameBios><h2>Carlos</h2><h4>Bios</h4></NameBios>
            </Perfil>
          </Column>
          <Column>
            <SearchInput placeholder="Encontre o repositorio"/> <ButtonSubmit> <AddRep size={40}/> </ButtonSubmit>
          </Column>
         </Row>
         <RowLine>
          <h4>Repositorios</h4>
          <Voltar to={"/"}><SetaLeft size={40}/></Voltar>
         </RowLine>
         <ContainerRepositorios>
            {listaR.map((repo, index) => (
              <BlockRepositorio key={index}>
                <a href={`https://github.com/${repo.link}`}>
                <NameRepositorio>{repo.nome}</NameRepositorio>
                </a>
              </BlockRepositorio>
            ))}
        </ContainerRepositorios>

 
      <Link to={`/`}>Voltar</Link>
      </Container>
    </>
  )
}
