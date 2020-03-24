import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown,faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const caretUp = <FontAwesomeIcon icon={faArrowAltCircleUp} /> 
const caretDown = <FontAwesomeIcon icon={faArrowAltCircleDown} />


export function SortButton({active, text, isAscending, disabled})
{
let rotation ="ascendant "
    if(isAscending) {
    }
    else {
        rotation += "rotate"
    }

    return(


        <div className="sortButton">
            <div className="tri">{text}</div> <div className={rotation} >{caretDown}</div>
        </div>
    )
}


export default SortButton;