import React from 'react'
import ReactDOM, {createRoot} from 'react-dom/client'
import Rotas from "./Rotas"

const ROOT_TAG = document.getElementById("root");
const ORIGIN = createRoot(ROOT_TAG);
ORIGIN.render(<Rotas/>);