import React from "react";

function AlbumDetail(props){
    

    return(
        <>
            <div className='titre'>{this.props.album.nom}</div>
            <div className="artiste">{this.props.album.artiste.nom}</div>
            <div className="annee">{this.props.album.année}</div>
            <div className="genre">{this.props.album.genre}</div>
        </>
        );

}

export default AlbumDetail;