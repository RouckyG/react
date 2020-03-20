import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown,faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const caretUp = <FontAwesomeIcon icon={faArrowAltCircleUp} /> 
const caretDown = <FontAwesomeIcon icon={faArrowAltCircleDown} />


export function SortButton({active, text, isAscending, disabled})
{

    if(isAscending) {
        fetch("https://iut-info.univ-reims.fr/users/jonquet/albums/albums?triAscendant=true")
    }

    return(


        <div className="button">
            <button className="tri">tri </button> <button className="ascendent">{caretDown}</button>
        </div>
    )
}


export default SortButton;