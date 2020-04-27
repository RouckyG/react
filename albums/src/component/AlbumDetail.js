import React from "react";

function AlbumDetail(props){
    

    return(
        <>
            <div className='titre'>{props.album.nom}</div>
            <div className="artiste">{props.album.artiste.nom}</div>
            <div className="annee">{props.album.année}</div>
            <div className="genre">{props.album.genre.nom}</div>
        </>
        );

}

export default AlbumDetail;