import React from 'react';
import PropTypes from 'prop-types';
import { AlbumItem } from './AlbumItem';

export class AlbumsList extends React.Component {


    render(){

        let {albums} = this.props;
        

        let albumsItem = [];
        for (let i in albums) {
            albumsItem[i] = <AlbumItem key={albums[i].id} data={albums[i]} />
        }
        return (
            <div className="albums">
                {albumsItem}
            </div>
        );
    }




   

}

AlbumsList.propTypes = {
    albums: PropTypes.array.isRequired,
  };

export default AlbumsList;

