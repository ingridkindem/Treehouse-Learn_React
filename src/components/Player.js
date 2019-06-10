import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';
import {Consumer} from './Context';

class Player extends PureComponent {

    static propTypes = {
        // use isRequired to get warning in console
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number,
        index: PropTypes.number,
        isHighScore: PropTypes.bool
    };

    render() {
        const {
            name,
            id,
            score,
            index,
        } = this.props;

        return (
            <div className="player">
            <Consumer>
                {context => (
                    <span className="player-name">
                    <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
                <Icon isHighScore={this.props.isHighScore} />               
                {name}
                </span>
                )}
            </Consumer>


                {/* Composition: component contains another component */}
                <Counter
                    score={score}
                    index={index}
                />
            </div>
        )
    };
}

export default Player;