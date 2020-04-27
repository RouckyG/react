import React from 'react';
import TrackList from './TrackList';
import { render } from '@testing-library/react';

class AJAX_TrackList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        tracks : null
        }
    }

    componentDidMount(){     
        fetch("https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/albums/"+this.props.id+"/pistes")
        .then((reponse) => reponse.json() )
        .then(json => this.setState({tracks : json}))
    }
 
    render(){
        const rendue = (
            <div>
                <TrackList tracks={this.state.tracks}/>
            </div>
        )
        return (
            this.state.tracks === null ? <div className="icone">a</div> : rendue
        );
    }
}

export default AJAX_TrackList;