import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Vitrine from "./Pages/Vitrine"
import Produto from "./Pages/Produto"
import Carrinho from "./Pages/Carrinho";
import Promocoes from "./Pages/Promocoes";

export default function Rotas()
{
    return<BrowserRouter basename="/MonsterJohn">
        <Routes>
            <Route index = "/" element = {<Vitrine/>}/>
            <Route path = "/produto/:codigo" element = {<Produto/>}/>
            <Route path = "/promocoes" element = {<Promocoes/>}></Route>
            <Route path = "/carrinho" element = {<Carrinho/>}/>
            <Route path = "/produto" element = {<Produto/>}/>
        </Routes>
    </BrowserRouter>
}