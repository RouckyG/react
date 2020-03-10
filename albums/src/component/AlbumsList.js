import React, { Component } from 'react'; 

import AlbumItem from './AlbumItem';


export function AlbumsList(props) {


return (
    props.albums.map(album => {
        return <AlbumItem data={album} key={album.id} />
    })
)

    
}


export default AlbumsList;