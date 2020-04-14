import React from 'react';

export function ToggleButton(props)
{ 

    return <div onClick={props.onClick} className='toggleButton' onClick={() => props.onToggle(props.id)}>
        <input type="checkbox" checked={props.toggleOff} />
        <div>{props.label}</div>

    </div>
}

export default ToggleButton;
