import React from 'react';
import ReactDOM from 'react-dom/client';
import Star from "./Star"
import Toggle from './Toggle/index';

function App() {

    return (
        <>
            <Toggle>
                <Toggle.Button>
                    <Star />
                </Toggle.Button>
                <Toggle.On>Starred</Toggle.On>
                <Toggle.Off>NOT Starred</Toggle.Off>
            </Toggle>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
