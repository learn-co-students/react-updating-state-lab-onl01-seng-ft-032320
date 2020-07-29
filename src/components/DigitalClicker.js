import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }
    
    increment = () => {
        const incrementedTime = this.state.timesClicked + 1
        this.setState({
            timesClicked: incrementedTime
        })
    }

    render(){
        return (
            <button onClick={this.increment}>{this.state.timesClicked}</button>
        )
    }
};

