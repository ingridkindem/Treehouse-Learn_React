
//Create a React component as either a JS function or class
// React components are written in plain JS, with the help of JSX
function Header(){
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
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

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Ingrid
            </span>

           {/* Composition: component contains another component */} 
            <Counter />

        </div>
    );
}
const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
                <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

// Ties every component together
const App = () => {
    return(
        <div className="scoreboard">
            <Header />

            {/* Playera list */}
            <Player />
        </div>
    );
}

//Not before render that browser creates actuall DOM elements
//Renders job to interpret element objects and create DOM nodes out of them
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

