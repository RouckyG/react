import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';


const iconehaut = <FontAwesomeIcon icon={faAngleDoubleUp} />
const iconebas = <FontAwesomeIcon icon={faAngleDoubleDown} />

export function SortButton ({name, active, isAscending, disabled, onClick}) {

    const classe = active ? "sortButton active" : "sortButton";

    return(
            <div className={classe}>
                <div onClick={()=>onClick(isAscending)} disabled={disabled}>{name}</div>
                <div>|</div>
                <div onClick={()=>onClick(!isAscending)} disabled={disabled}>{isAscending ? iconehaut : iconebas}</div>
            </div>
        )
}

SortButton.propTypes = {
    name : PropTypes.string.isRequired,
    active : PropTypes.bool,
    isAscending : PropTypes.bool.isRequired,
    disabled : PropTypes.bool,
    onClick : PropTypes.func.isRequired
}


export default SortButton;
