import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

//Create a React component as either a JS function or class
// React components are written in plain JS, with the help of JSX
const Header = ({ players, title }) => {
    return (
        <header>
            <Stats players={players} />
            <h1>{title}</h1>
            <Stopwatch />
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.object)
};

Header.defaultProps = {
    title: 'scoreboard'
};

export default Header;