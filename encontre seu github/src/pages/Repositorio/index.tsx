// import { FaGithub} from "react-icons/fa";

import { Link, useParams } from "react-router-dom";
import { Container, Row, Column, SearchInput, Perfil, Img, NameBios, ContainerRepositorios, BlockRepositorio, NameRepositorio, RowLine, Voltar } from "./style";
import api from "../../services/api";
import { SetaLeft } from "../Main/icons";
import { ButtonSubmit } from "../Main/style";
import { AddRep } from "../Main/icons";
import { useEffect } from "react";

export default function Teste() {
  // interface repoParams {
  //   id:number;
  //   full_name: string;
  // }
  const params = useParams();
  // const [repositorios, setRepositorios] = useState<repoParams>();

  useEffect(() => {
    async function getRep() {
      console.log(params.name);
        
      try {
        const response = await api.get(`users/${params.name}/repos`);
        response.data.map((repo:{full_name:string}) => {
          console.log(repo.full_name);
        })
 
        
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
        
          
      
          <BlockRepositorio>
            <NameRepositorio>
              <h3></h3>
            </NameRepositorio>
          </BlockRepositorio>
           
    

            

         </ContainerRepositorios>
 
      <Link to={`/`}>Voltar</Link>
      </Container>
    </>
  )
}
