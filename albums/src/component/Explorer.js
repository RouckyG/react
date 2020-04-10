import React from 'react';
import { AlbumList } from './AlbumList';
import { Pager } from './Pager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import  Sorting  from './Sorting';
import GenresFilters from './GenresFilters';

const icone = <FontAwesomeIcon icon={faSpinner} size="7x" spin/>


class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: null,
            pager: {nombrePages : 99},
            Sorts: {
                "nom": true,
                "année": true,
                "genre":true,
                "artiste": true,
            },
            isAscending: true,
            selected: "nom",
        };
        this.onPageChange = this.onPageChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getAlbums = this.getAlbums.bind(this);
    }


    componentDidMount() {
        this.onPageChange(0)
    }

    onChange(sortName, isAscending)
    {
        this.setState({selected:sortName}, () => this.getAlbums())
        this.setState({isAscending: isAscending})
    }

    

    getAlbums()
    {
        fetch("https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/albums?critereTri=" +
         encodeURI(this.state.selected) +"&triAscendant="+ this.state.isAscending +"&albumsParPage=10&page=" + this.state.pager.page)
        .then((reponse) => reponse.json() )
        .then(json => {
        this.setState({ albums:json.albums, pager:json.pagination })
    });
    }

    onPageChange(pageNumber)
    {
        if (pageNumber > this.state.pager.nombrePages) {
        }
        else {
           this.getAlbums();
        }        
    }


    render() 
    {
        const rendu = (
            <div className="page">
                <div className="sorting">
                        <Sorting Sorts={this.state.Sorts} selected={this.state.selected} 
                        isAscending={this.state.isAscending} onChange={this.onChange} />
                    </div>
                <div className='main'>
                    <div className="albums">
                        <AlbumList albums={this.state.albums}/>
                    </div>
                    <div className="category">
                        <GenresFilters/>
                    </div>
                </div>
                <div className="pager">
                    <Pager pagination={this.state.pager} onPageChange={this.onPageChange}/>
                </div>
            </div>
            )
        return this.state.albums == null ? <div className="icone">{icone}</div> : rendu
    }
  }

export default Explorer;

