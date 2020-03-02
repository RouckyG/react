import React from 'react';
import Button from './Button.js'

export class Chronometer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        };
        this.tick = this.tick.bind(this);
        this.clickHandle = this.clickHandle.bind(this);
    }

    clickHandle() {
        this.setState(state => ( { display : !state.display } ) )
        if (this.state.display)
        {this.componentWillUnmount()}
        else
        {this.componentDidMount()}
    }

    componentDidMount() {
        this.start();
    }
    componentWillUnmount() {
        this.stop();
    }
    tick() {
        this.setState(state => ({
            time: parseInt((new Date() - this.startDate)/1000)
        }));
    }
    start() {
        this.startDate = new Date();
        this.setState({
            time: 0,
        }, () => {
            this.timerID = setInterval(() => this.tick(), 1000);
        })
    }
    stop() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <Button label={this.state.display ? this.state.time : "start"} onClick={this.clickHandle}></Button>
        );
    }
}

export default Chronometer;