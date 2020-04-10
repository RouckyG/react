import React from 'react';
import PropTypes from 'prop-types';

export class AlbumItem extends React.Component {

    render(){
        return (
                <div className="album">

                    <div>{this.props.data.nom}</div>
                    <div>
                        <img alt="img_album" src={"https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/"+this.props.data.jaquette}></img>
                    </div>
                    <div className="artiste">
                        <div>
                            {this.props.data.artiste.nom}
                        </div>

                        <div className="annee">
                            {this.props.data.année}
                        </div>
                    </div>
                </div>
        );
    }
}

//<AlbumsItem  className="albumList" album={albums[0]}/>


AlbumItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AlbumItem;