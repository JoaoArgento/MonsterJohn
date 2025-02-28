import React from "react";
import styled from "styled-components";
import Exibidor from "./Exibidor";

const Modelo = styled.div
`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding: 32px 0;
`

const Produto = styled.div
`
    background:#fff;
    padding: 8px;

`

const ProdutoImagem = styled.img
`
    height:220px;
    object-fit:cover;
    width:220px;   
`

const ProdutoDado = styled.div
`
    text-align:center;
`

export default function Principal(props)
{
   return <Modelo>
            {
                props.produtos.map((produto, indice) =>
                {
                    return <Exibidor key = {indice} produto = {produto}/>
                })
            }
           
            </Modelo>
}