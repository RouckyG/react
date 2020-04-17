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
            sorts: {
                "nom": true,
                "année": true,
                "genre":true,
                "artiste": true,
            },
            toggled: " ",
            isAscending: true,
            selected: "nom",
        };
        this.onPageChange = this.onPageChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getAlbums = this.getAlbums.bind(this);
        this.onGenreChange = this.onGenreChange.bind(this);
    }


    componentDidMount() {
        this.onPageChange(0)
    }

    componentDidUpdate(prevprops, prevstate){
        if (prevstate.toggled != this.state.toggled)
        {
            this.getAlbums(0)
        }
    }
    onChange(sortName, isAscending)
    {  
        
        this.setState({selected:sortName}, () => this.getAlbums())
        this.setState({isAscending: isAscending})
    }

    onGenreChange(genres){
        let genresSelected='';
        //console.log(genres)
        for (let i =0; i<genres.length; i++)
        {
            genresSelected += '&genres[]=' + genres[i]
        }

        this.setState({toggled : genresSelected});
        console.log(this.state.toggled)
        
    }

    getAlbums(pageNumber)
    {

        if(this.state.toggled)
        {
            fetch(
                "https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/albums?critereTri=" +
                encodeURI(this.state.selected) +
                "&triAscendant="+ this.state.isAscending +
                "&albumsParPage=10&page=" + pageNumber +
                this.state.toggled
                )
                .then((reponse) => reponse.json() )
                .then(json => {
                    this.setState({ albums:json.albums, pager:json.pagination })
                });
        }
        else{
            this.setState({albums : []})
        }
    }

    onPageChange(pageNumber)
    {
        if (pageNumber > this.state.pager.nombrePages) {
            
        }
        else {
           this.getAlbums(pageNumber);
        }        
    }


    render() 
    {
        const rendu = (
            <div className="page">
                <div className='main'>
                    <div className='content'>
                        <div className="sorting">
                            <Sorting 
                            sorts={this.state.sorts} 
                            selected={this.state.selected} 
                            isAscending={this.state.isAscending} 
                            onChange={this.onChange} />
                        </div>
                        <div className="albums">
                            <AlbumList albums={this.state.albums}/>
                        </div>
                        <div className="pager">
                        <Pager pagination={this.state.pager} onPageChange={this.onPageChange}/>
                        </div>
                    </div>
                    <div className="category">
                        <GenresFilters onChange={this.onGenreChange}/>
                    </div>
                </div>
            
            </div>
            )
        return this.state.albums == null ? <div className="icone">{icone}</div> : rendu
    }
  }

export default Explorer;

