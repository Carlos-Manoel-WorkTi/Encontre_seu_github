
import { Link } from 'react-router-dom'
import {Heade, Logo, Active, LinkText} from './style'
export default function Header() {
  return (
    <Heade>
      <Logo>Encontre seu GitHub</Logo>
      <ul>
        <Active>
            <LinkText to="/home">Início</LinkText>
        </Active>
        <li><Link to={"/sobre"}>Login</Link></li>
      </ul>
   
    </Heade>

  )
}
