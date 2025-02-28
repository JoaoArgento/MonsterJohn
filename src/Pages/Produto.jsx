import React, {useEffect, useState} from "react";
import Navegacao from "../Components/Navegacao";
import {useParams} from "react-router-dom";
import produtoExemplo from "../Data/ProdutoExemplo.js"
import Exibidor from "../Components/Exibidor.jsx";
import Axios from "axios"

export default function Produto()
{
    const {codigo} = useParams();
    const [produtos, DefinirProdutos] = useState([])

    useEffect(() =>
    {
        async function GetAPIResponse()
        {
            const API_RESPONSE = await Axios.get("http://localhost:4000/api")
            DefinirProdutos(API_RESPONSE.data);
            console.log(produtos);
        }
        GetAPIResponse();

    }, [])

    return <>
            {/* <Navegacao titulo = "Vitrine">
                <a href = "/">Inicio</a>
                <a href = "/promocoes">Promoções</a>
                <a href = "/carrinho">Carrinho</a>
            </Navegacao> */}

            <Exibidor produto = { produtos.find((produto) => produto.productId == codigo )}/>
        </> 
}