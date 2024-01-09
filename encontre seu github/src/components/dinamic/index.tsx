import { useParams, useNavigate } from "react-router-dom"

export default function Dinamic() {
    const {id} = useParams()
    const home = useNavigate()
    const voltarHome = () => {
        return home("/")
    }
  return (
    <div>
        <h2>o id é : {id}</h2>
        <button onClick={voltarHome}>Voltar</button>
    </div>
  )
}
