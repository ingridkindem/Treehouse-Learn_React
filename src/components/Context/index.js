import React from 'react';

//For setting up provider and consumer
//Now returns an object
const ScoreboardContext = React.createContext();

export const Provider = ScoreboardContext.Provider;
export const Consumer = ScoreboardContext.Consumer;
