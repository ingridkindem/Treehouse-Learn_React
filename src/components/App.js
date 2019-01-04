import React from 'react';

//Create a React component as either a JS function or class
// React components are written in plain JS, with the help of JSX
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

//Can also write components as arrow functions;
/*const Header = () =>
    <header>
        <h1>Scoreboard</h1>
        <span className="stats">Players: 1</span>
    </header>;
    */


//JSX expression
/*
const header = (
    <header>
       <h1 id={myTitleID}>{name}'s First React Element</h1> 
       <p>{desc}</p>
    </header>
);
*/

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>

            {/* Composition: component contains another component */}
            <Counter />
        </div>
    );
}
class Counter extends React.Component {
    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState(prevState => ({
            score: prevState.score + 1
        }));
    }

    decrementScore = () => {
        this.setState(prevState => ({
            score: prevState.score - 1
        }));
    }

    /* Can also write: 
    constructor() {
        super()
        this.state = {
            score: 0
        };
    }*/

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}

// Ties every component together
class App extends React.Component {

    state = {
        players: [
            {
                name: "Kaspar",
                id: 1
            },
            {
                name: "Pappa",
                id: 2
            },
            {
                name: "Ingrid",
                id: 3
            },
            {
                name: "Mamma",
                id: 4
            }
        ]
    }

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    render() {
        return (
            <div className="scoreboard">
                <Header
                    title="Scoreboard"
                    totalPlayers={this.state.players.length}
                />

                {/* Player list */}
                {this.state.players.map(player =>
                    <Player
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        );
    }
}

//Not before render that browser creates actuall DOM elements
//Renders job to interpret element objects and create DOM nodes out of them
// Usally pass the Top-level component to ReactDOM.render()
/*ReactDOM.render(
    <App />,
    document.getElementById('root')
); */

export default App;


