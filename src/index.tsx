import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Main } from './pages/Main';

render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
    document.getElementById('root'),
);
