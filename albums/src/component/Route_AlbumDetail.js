import React from "react";
import AJAX_AlbumDetail from "./AJAX_AlbumDetail";
import {useParams} from "react-router-dom";

function AlbumDetail(){

    let {id} = useParams();
    return <AJAX_AlbumDetail id={id} />
}

export default AlbumDetail;