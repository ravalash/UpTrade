import React, { Component } from 'react';

const GameContext = React.createContext()

class GameProvider extends Component {
    render() {
        return
        <GameContext.Provider>
            {this.props.children}
        </GameContext.Provider>
    }
}