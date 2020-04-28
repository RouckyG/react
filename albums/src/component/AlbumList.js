import React from 'react';
import AlbumsItem from './Redirect_AlbumItem';

export function AlbumList(props){

    return (
        props.albums.map(album => {
            return <AlbumsItem data={album} key={album.id} />
        })

    );
};

export default AlbumList;