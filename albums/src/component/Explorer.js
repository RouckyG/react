import React from 'react';
import { AlbumList } from './AlbumList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
const icone = <FontAwesomeIcon icon={faSpinner} size="7x" spin/>

class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: null
        };
    }

    componentDidMount() {
        fetch("https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/albums")
        .then((reponse) => reponse.json() )
        .then(json => {
            this.setState({albums:json.albums})
        });
    }
/*
        render() {
         
            return (
                
                    <AlbumList albums={this.state.albums} />
                
            );
        }
*/
        render() {

            const rendu = (
            <div className = "albums">
            <AlbumList albums={this.state.albums}/>
            </div>)
            return this.state.albums == null ? <div className="icone">{icone}</div>: rendu
    };
  }

export default Explorer;

