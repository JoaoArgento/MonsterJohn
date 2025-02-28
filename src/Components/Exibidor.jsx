import React from "react";
import styled from "styled-components";
import SalvarCarrinho from "../functions/SalvarCarrinho";
import TestEvent from "../functions/Test";

const Modelo = styled.div
`
    background: #ccc;
    display:flex;
    margin: 32px 0;
    overflow: hidden;

    
`

const ModeloImagens = styled.div
`
    display:flex;
    overflow-x: scroll;
    max-width: 480px;
`

const ModeloDados = styled.div
`
    display:flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
`

export default function Exibidor(props)
{
    if (props.produto == null || Object.keys(props.produto).length <= 0)
    {
        return <Modelo>
            <ModeloDados>
                <div>Produto não localizado!</div>
            </ModeloDados>
            </Modelo>
    }

    return <Modelo>
            <ModeloImagens>
                <img
                    src = {props.produto.productImage}
                    height = {450}
                />
            </ModeloImagens>

            <ModeloDados>
                <div> {props.produto.productName} </div>
                <div> {props.produto.productModel} </div>
                <div> R${props.produto.productPrice} </div>
                <div>{props.produto.productColor} </div>
                <button onClick={() => {SalvarCarrinho(props.produto.productId)}}>Comprar imediamente!</button>
            </ModeloDados>
        </Modelo>
}