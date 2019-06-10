import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "./Context";

const Counter = ({ index, score, changeScore }) => {
  /* Can also write: 
      constructor() {
          super()
          this.state = {
              score: 0
          };
      }*/

  return (
    <Consumer>
      {context => (
        <div className="counter">
          <button
            className="counter-action decrement"
            onClick={() => context.actions.changeScore(index, -1)}
          >
            {" "}
            -{" "}
          </button>
          <span className="counter-score">{score}</span>
          <button
            className="counter-action increment"
            onClick={() => context.actions.changeScore(index, +1)}
          >
            {" "}
            +{" "}
          </button>
        </div>
      )}
    </Consumer>
  );
};

// for validation
Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
};

export default Counter;
