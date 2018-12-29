const players = [
    {
        name: "Kaspar",
        score: 50
      },
      {
        name: "Pappa",
        score: 85
      },
      {
        name: "Ingrid",
        score: 95
      },
      {
        name: "Mamma",
        score: 80
      }
];

//Create a React component as either a JS function or class
// React components are written in plain JS, with the help of JSX
const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
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
                {props.name}
            </span>

           {/* Composition: component contains another component */} 
            <Counter score={props.score}/>
        </div>
    );
}
const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
                <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

// Ties every component together
const App = (props) => {
    return(
        <div className="scoreboard">
            <Header 
            title="Scoreboard" 
            totalPlayers={players.length}
            />

            {/* Player list */}
            {props.initialPlayers.map( player => 
                <Player 
                name={player.name}
                score={player.score}
                />
            )}
        </div>
    );
}

//Not before render that browser creates actuall DOM elements
//Renders job to interpret element objects and create DOM nodes out of them
// Usally pass the Top-level component to ReactDOM.render()
ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
);

