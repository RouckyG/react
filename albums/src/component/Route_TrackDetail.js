import React from "react";
import AJAX_TrackList from "./AJAX_TrackList";
import {useParams} from "react-router-dom";

function TrackDetail(){
console.log('?')
    let {id} = useParams();
    return <AJAX_TrackList id={id} />
}

export default TrackDetail;