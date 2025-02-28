import React from "react";
import styled from "styled-components";
import Principal from "../Components/Principal";
import Navegacao from "../Components/Navegacao"
import Axios from "axios"
import {useState, useEffect} from "react";
import Menu from "../Components/Menu";

export default function Vitrine()
{
    const [productList, SetProductList] = useState([]);

    useEffect(() =>
    {
        async function GetAPIData()
        {

            const API_RESPONSE = await Axios.get("http://localhost:4000/api");

            // for (var i = 0; i < API_RESPONSE.data.length; i++)
            // {
            //     productList.push(API_RESPONSE.data[i]);
            // }

            SetProductList(API_RESPONSE.data);

            console.log(productList);
        }
        GetAPIData();
    }, []);

 
    return <>
        <Menu titulo = "Vitrine"/>
        <Principal produtos = {productList}/>
    </>
            
           
}