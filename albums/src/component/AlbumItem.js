import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function AlbumItem (props) {

    return (
            <div className="album" onClick={() => props.onSelected() }>
                    <div className='titre'>{props.data.nom}</div>
                    <div>
                        <img alt="img_album" src={"https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/"+props.data.jaquette}></img>
                    </div>
                    <div className="artiste">
                        <div>
                            {props.data.artiste.nom}
                        </div>

                        <div className="annee">
                            {props.data.année}
                        </div>
                    </div>
            </div>
    );
}

export default AlbumItem;