import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Promo from "./pages/Promo";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // без мишуры, только страница из фигмы
    <React.StrictMode>
        <Promo/>
    </React.StrictMode>
);
