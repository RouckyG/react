import React from 'react';

export function ToggleButton(props)
{ 

    return (
        <label className='toggleButton' >
            <input 
                type="checkbox" 
                checked={!props.toggleOff}
                onChange={() => props.onToggle(props.id)}
            />
            {props.label}

        </label>
    )
}

export default ToggleButton;
