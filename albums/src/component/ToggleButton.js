import React from 'react';

export function ToggleButton(props)
{ 

    return <div onClick={props.onClick}>
        <div>{props.label}</div>

    </div>
}

export default ToggleButton;
