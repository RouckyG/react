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
        this.onToggle = this.onToggle.bind(this)
    }

    getGenre()
    {
        fetch("https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/genres")
        .then((reponse) => reponse.json() )
        .then(json => {
            this.setState({ genres:json, isToggled: new Array (json.length).fill(false)})
            //console.log(this.state)
        })
    }

    componentDidMount(){
        this.getGenre()

    }

    onToggle(id){

        const Toggled = new Array(this.state.genres.length).fill(false);

        const isToggled = [...this.state.isToggled];

        isToggled[id] = !isToggled[id]

        this.setState({ isToggled : isToggled})
        
    }

    componentDidUpdate(prevprops, prevstates){
        if(this.state.isToggled != prevstates.isToggled){
            console.log(this.state.isToggled)
            this.props.onChange(this.state.isToggled)
        }
    }

    render(){


        return (<>
        {this.state.genres.map((genre,i) =>
            <ToggleButton 
            key={i}
            toggleOff ={this.state.isToggled[genre.id]}
            id={genre.id}
            label={genre.nom} 
            onToggle={this.onToggle}
            />
        )}
        </>)
    }
}

export default GenresFilters