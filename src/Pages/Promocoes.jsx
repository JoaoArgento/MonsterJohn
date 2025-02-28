import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Menu from "../Components/Menu";
import Principal from "../Components/Principal";
import Axios from "axios";

export default function Promocoes()
{
    const [productList, SetProductList] = useState([]);

    useEffect(() =>
    {
        async function GetAPIData()
        {

            const API_RESPONSE = await Axios.get("http://localhost:4000/api");
            let promotionList = API_RESPONSE.data.filter((produto) => produto.Promotion == 1)
            SetProductList(promotionList);
        }
        GetAPIData();
    }, []);

 
    return <>
            <Menu titulo = "Promocoes"/>
            <Principal produtos = {productList}/>
            </>
}