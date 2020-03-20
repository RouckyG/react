import React from 'react';
import { AlbumList } from './AlbumList';
import { Pager } from './Pager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
const icone = <FontAwesomeIcon icon={faSpinner} size="7x" spin/>

class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: null,
            pager: null,
        };
        this.onPageChange = this.onPageChange.bind(this);

    }

    componentDidMount() {
        this.onPageChange(0)
    }

    

    onPageChange(pageNumber)
    {
        fetch('https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/albums?page=' + pageNumber)
    .then((reponse) => reponse.json() )
    .then(json => {
        this.setState({albums:json.albums,pager:json.pagination})
    });
    }

        render() {

            const rendu = (
                <div className="page">
            <AlbumList albums={this.state.albums}/>
            <Pager pagination={this.state.pager} onPageChange={this.onPageChange} />
            </div>)
            return this.state.albums == null ? <div className="icone">{icone}</div>: rendu
    };
  }

export default Explorer;

