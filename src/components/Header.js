import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

//Create a React component as either a JS function or class
// React components are written in plain JS, with the help of JSX
const Header = () => {
    return (
        <header>
            <Stats />
            <h1>Scoreboard</h1>
            <Stopwatch />
        </header>
    );
}


export default Header;