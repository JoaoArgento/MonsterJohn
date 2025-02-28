import React from "react";
import styled from "styled-components";

const ModeloJanela = styled.div 
`
    background:#ccc;
    margin: 32px 0px;
    overflow: hidden;
    padding: 32px;
`

export default function Janela(props)
{
    return <ModeloJanela>
        {props.children}
    </ModeloJanela>
}