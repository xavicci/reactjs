import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        {/* <FirstApp /> */}
        < CounterApp value={80} />
    </React.StrictMode>
)
