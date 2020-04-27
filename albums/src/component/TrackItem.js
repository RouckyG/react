import React from 'react';

function TrackItem(props)
{
    return (
        <>
        <div>{props.track.disque}</div>
        <div>{props.track.numéro}</div>
        <div>{props.track.nom}</div>
        <div>{props.track.durée}</div>
        </>
    )
}

export default TrackItem;