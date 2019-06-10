import React from "react";
import { Consumer } from "./Context";
import Player from "./Player";

const PlayerList = () => {
  return (
    <Consumer>
      {context => (
        <React.Fragment>
          {context.players.map((player, index) => (
            <Player
            //Obejct spread attribute to pass the player properties from each player object via map all at once as props.
            // That way you dont have to explicitly list each prop name and value 
              {...player}
              key={player.id.toString()}
              index={index}
            />
          ))}
          ;
        </React.Fragment>
      )}
    </Consumer>
  );
};


export default PlayerList;
