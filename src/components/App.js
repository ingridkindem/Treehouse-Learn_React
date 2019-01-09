import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

//Create a React component as either a JS function or class
// React components are written in plain JS, with the help of JSX

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

// Ties every component together
class App extends Component {

    state = {
        players: [
            {
                name: "Kaspar",
                score: 0,
                id: 1
            },
            {
                name: "Pappa",
                score: 0,
                id: 2
            },
            {
                name: "Ingrid",
                score: 4,
                id: 3
            },
            {
                name: "Mamma",
                score: 0,
                id: 4
            }
        ]
    }

    //player ID counter
    prevPlayerId = 4;

    handleScoreChange = (index, delta) => {
        this.setState(prevState => ({
            score: prevState.players[index].score += delta
        }));
    }

    getHighestScore = () => {
        const scores = this.state.players.map( p => p.score );
        const highScore = Math.max(...scores);
        if (highScore) {
          return highScore;
        } 
        return null;
    }

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            return {
                players: [
                    ...prevState.players,
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerId += 1
                    }
                ]
            };

        });

    }

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    render() {
        const highScore = this.getHighestScore();

        return (
            <div className="scoreboard">
                <Header
                    players={this.state.players}
                />

                {/* Player list */}
                {this.state.players.map((player, index) =>
                    <Player
                        name={player.name}
                        score={player.score}
                        id={player.id}
                        key={player.id.toString()}
                        index={index}
                        changeScore={this.handleScoreChange}
                        removePlayer={this.handleRemovePlayer}
                        isHighScore={highScore === player.score}
                    />
                )}

                <AddPlayerForm addPlayer={this.handleAddPlayer} />
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


