import React from 'react';
import { AlbumList } from './AlbumList';
import { Pager } from './Pager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {SortButton} from "./SortButton"
const icone = <FontAwesomeIcon icon={faSpinner} size="7x" spin/>

class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: null,
            pager: {nombrePages : 99},
        };
        this.onPageChange = this.onPageChange.bind(this);

    }

    componentDidMount() {
        this.onPageChange(0)
    }

    

    onPageChange(pageNumber)
    {
        if (pageNumber > this.state.pager.nombrePages) {
        }
        else 
        {
        fetch('https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/albums?page=' + pageNumber)
    .then((reponse) => reponse.json() )
    .then(json => {
        this.setState({albums:json.albums,pager:json.pagination})
    });
    }
}

        render() {

            const rendu = (
                <div className="page">
            <div className = "albums">
            <AlbumList albums={this.state.albums}/>
            </div>
            <Pager pagination={this.state.pager} onPageChange={this.onPageChange} />
            <SortButton active={ true } text={"un tri a tester"} isAscending={ true }
            disabled={ false } onClick={(isAscending) => console.log("un tri a tester", isAscending)}/>

            </div>
            )
            return this.state.albums == null ? <div className="icone">{icone}</div>: rendu
    };
  }

export default Explorer;
