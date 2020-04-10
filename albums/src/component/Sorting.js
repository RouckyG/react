import React from 'react';
import  Sortbutton, { SortButton }  from './SortButton';

export function Sorting(props)
{ 
    const noms = Object.keys(props.Sorts);
    let buttons = [];
        for (let i in noms) {
            if (noms[i] == props.selected) {
                buttons[i] = 
                    <SortButton 
                    key={i}
                    isAscending={props.isAscending} 
                    name={noms[i]} 
                    onClick={(isAscending) => props.onChange(noms[i], isAscending)}
                    />
            }else {
                buttons[i] = <SortButton isAscending={true} name={noms[i]} onClick={(isAscending) => props.onChange(noms[i], isAscending)}/>
            }
        }

    return <>{buttons}</>;
}

export default Sorting;
