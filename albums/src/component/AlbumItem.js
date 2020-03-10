import React from 'react';

export function AlbumItem(props){

return (<div class="album">
<div class="titre">{props.data.nom}</div>
<img src={"http://jonquet/albums/"+props.data.jaquette} />
<div class="artiste">{props.data.artiste.nom}</div>
<div class="annee">{props.data.année}</div>
</div>)

};

export default AlbumItem;