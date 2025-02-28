import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Exibidor from "../Components/Exibidor";
import produtoExemplo from "../Data/ProdutoExemplo";
import Navegacao from "../Components/Navegacao";
import Janela from "../Components/Janela";
import ObterCarrinho from "../functions/ObterCarrinho.js";
import Axios from "axios"
import LimparCarrinho from "../functions/LimparCarrinho.js";
import Menu from "../Components/Menu.jsx";
export default function Carrinho()
{
    const [carrinho, DefinirCarrinho] = useState([]);
    const [preco, DefinirPreco] = useState(0);
    let precoTotal = 0
    const [produtos, DefinirProdutos] = useState([])

    useEffect(() =>
    {
        const RESULT = ObterCarrinho();
        DefinirCarrinho(RESULT);
    
        async function GetAPIResponse()
        {

            const API_RESPONSE = await Axios.get("http://localhost:4000/api")
            DefinirProdutos(API_RESPONSE.data);
            console.log(produtos);
        }
        GetAPIResponse();

    }, [])

    return <>
        <Menu titulo = "Carrinho"/>
        <Janela>      
            <table width = "100%">
                <tbody>
                    {
                        carrinho.map((codigo, indice) =>
                        {
                            for (const produto of produtos)
                            {
                               if (produto.productId == codigo)
                               {
                                    precoTotal += Math.ceil(parseFloat(produto.productPrice));

                                    return <tr key = {indice}>
                                            <td>{produto.productId}</td>
                                            <td>{produto.productModel}</td>
                                            <td>{produto.productPrice}</td>
                                    </tr>
                               }
                            }
                        })
                     }
                </tbody>
            </table>
            <h1>Preco Total: {precoTotal} </h1>

            <button onClick={() => {
                LimparCarrinho();
                DefinirCarrinho([]);
                
                }}>Limpar carrinho </button>
        </Janela>
    </>
}