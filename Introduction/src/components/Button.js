import React from 'react';
import PropTypes from 'prop-types';

/*
export function Button({label, ...props}) {
    return (
        <button {...props}>{label}</button>
    );
}


Button.propTypes = {
    label : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired,
};

*/
export class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {label, ...props} = this.props;
        return (
            <button {...props}>{label}</button>
        );
    }
}


export default Button;