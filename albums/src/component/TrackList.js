import React from 'react';
import TrackItem from './TrackItem';

export function TrackList(props){

    return (
        props.tracks.map(track => {
            return <TrackItem track={track} key={track.nom} />
        })

    );
};

export default TrackList;