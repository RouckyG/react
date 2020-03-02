import React from 'react';
import Button from './Button.js'

export class Unfold extends React.Component{

    constructor(props) {
        super(props);
        this.state = {display:false};
        this.clickHandle = this.clickHandle.bind(this);
    }


    clickHandle() {
        this.setState(state => ( { display : !state.display } ) )
    }

    render() {
        const display =this.state.display;
        return (
            <div>
            <Button  label={this.state.display ? "+":"-"} onClick={this.clickHandle}></Button>
            {this.state.display &&
                <p className="btn2">I</p>
            }
            </div>
        );
    }
    
}

Unfold.defaultProps = {
    value:true,
};

export default Unfold;