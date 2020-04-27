import React from 'react';
import  Sortbutton, { SortButton }  from './SortButton';

export function Sorting(props)
{ 
    const noms = Object.keys(props.sorts);
    let buttons = [];
        for (let i in noms) {
            buttons[i] = 
                <SortButton 
                key={i}
                active={noms[i] == props.selected}
                isAscending={noms[i] == props.selected ? props.isAscending : true} 
                name={noms[i]} 
                onClick={(isAscending) => props.onChange(noms[i], isAscending)}
                />
            }
        

    return <>{buttons}</>;
}

export default Sorting;
