import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from "./components/Toggle/index"
import Menu from "./components/Menu/index"
import Star from './components/Star';

function App() {

    return (
        <>
            <Star />

            {/* Your Menu code goes here */}
            <Menu>
                <Toggle.Button>
                    <Menu.Button>Menu</Menu.Button>
                </Toggle.Button>
                <Toggle.On>
                    <Menu.Dropdown>
                        <Menu.Item>Home</Menu.Item>
                        <Menu.Item>About</Menu.Item>
                        <Menu.Item>Contact</Menu.Item>
                        <Menu.Item>Blog</Menu.Item>
                    </Menu.Dropdown>
                </Toggle.On>
            </Menu>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
