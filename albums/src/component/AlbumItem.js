import React from 'react';

export function AlbumItem(props){

return (<div className="album">
<div className="titre">{props.data.nom}</div>
<img src={"http://jonquet/albums/"+props.data.jaquette} />
<div className="artiste">{props.data.artiste.nom}</div>
<div className="annee">{props.data.année}</div>
</div>)

};

export default AlbumItem;