import React from "react";import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router} from 'react-router-dom';
import App from "./App";
import './index.css';
import {ResultContextProvider} from "./Contexts/ResultContextProvider"; 

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <ResultContextProvider>
        <Router>
            <StrictMode>
                <App />
            </StrictMode>
        </Router>
    </ResultContextProvider>
    
  
);