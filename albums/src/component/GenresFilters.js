import React from 'react';
import ToggleButton from './ToggleButton'

export class GenresFilters extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            //isToggled: [],
            genres:[],
        }
        this.onToggle = this.onToggle.bind(this)
    }

    getGenre()
    {
        fetch("https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/genres")
        .then((reponse) => reponse.json() )
        .then(json => {
            this.setState({ 
                genres:json.reduce((reponse,genre)=>{
                    reponse[genre.id] = {...genre, toggleOff:false};
                    return reponse
                }, []),
                //isToggled: new Array (json.length).fill(false)
               },
                )
        });
    }

    componentDidMount(){
        this.getGenre()

    }

    onToggle(id){

        //const genres = [...this.state.genres];

        const genres = this.state.genres.concat();

        genres[id].toggleOff = !genres[id].toggleOff;

        this.setState(
            { genres : genres},
            () => this.props.onChange( 
                this.state.genres
                    .filter( genre => !genre.toggleOff )
                    .map( genre => genre.id )
            )
        );
    }

    changeAll(newValue){
        
        const genres = this.state.genres.concat();
        console.log(this.state.genres);
        console.log("2", genres)
        genres.map((genre,i)=> genres[i].toggleOff = newValue)

        this.setState(
            { genres : genres},
            () => this.props.onChange( 
                this.state.genres
                    .filter( genre => !genre.toggleOff )
                    .map( genre => genre.id )
            )
        );
        
       
    }
/*
    componentDidUpdate(prevprops, prevstates){
        if(this.state.isToggled != prevstates.isToggled){
            console.log(this.state.isToggled)
            this.props.onChange(this.state.isToggled)
        }
    }
*/
    render(){


        return (<>
        <button onClick={()=>this.changeAll(false)}>tout cocher</button>
        <button onClick={()=>this.changeAll(true)}>tout decocher</button>
        {this.state.genres.map((genre,i) =>
            <ToggleButton 
            key={i}
            toggleOff ={genre.toggleOff}
            id={genre.id}
            label={genre.nom} 
            onToggle={this.onToggle}
            />
        )}
        </>)
    }
}

export default GenresFilters