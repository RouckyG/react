import React from 'react';
import AlbumDetail from './AlbumDetail';
import { render } from '@testing-library/react';

class AJAX_AlbumDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        album : null
        }
    }

    componentDidMount(){     
        fetch("https://iut-info.univ-reims.fr/users/jonquet/albums/public/index.php/albums/"+this.props.id)
        .then((reponse) => reponse.json() )
        .then(json => this.setState({album : json}))
    }
 
    render(){
        console.log(this.state.album)
        const rendu = (
            <div>
                <AlbumDetail album={this.state.album}/>
            </div>
        )
        return (
            this.state.album === null ? <div className="icone">a</div> : rendu
        );
    }
}

export default AJAX_AlbumDetail;