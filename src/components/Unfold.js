import React from 'react';
import Button from './Button.js'

export class Unfold extends React.Component{

    constructor(props) {
        super(props);
        this.state = {display:true};
        this.clickHandle = this.clickHandle.bind(this);
    }


    clickHandle() {
        this.setState(state => ( { display : !state.display } ) )
    }

    render() {
        const display =this.state.display;
        return (
            <div>
            <Button name="btn2" label={this.state.display ? "+":"-"} onClick={this.clickHandle}></Button>
            </div>
        );
    }
    
}

Unfold.defaultProps = {
    value:true,
};

export default Unfold;