import Navegacao from "./Navegacao"

export default function Menu(props)
{
    return <Navegacao titulo = {props.titulo}>
            <a href = "/"> Inicio </a>
            <a href = "/promocoes">Promoções</a>
            <a href = "/Carrinho">Carrinho</a>
        </Navegacao>
}