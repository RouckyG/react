import React from 'react';
import ToggleButton from './ToggleButton'

export class GenresFilters extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isToggled: [],
            genres:[],
        }
        this.getGenre = this.getGenre.bind(this);
    }

    getGenre()
    {
        fetch("https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/genres")
        .then((reponse) => reponse.json() )
        .then(json => {
            this.setState({ genres:json})
        })
    }

    componentDidMount(){
        this.getGenre();
    }

    render(){


        return (<div>
        {this.state.genres.map((genre,i) =>
            <ToggleButton 
            key={i}
            label={genre.nom} />
        )}
        </div>)
    }
}

export default GenresFilters