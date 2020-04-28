import React from 'react';
import AlbumItem from './AlbumItem';
import { Redirect } from 'react-router-dom';

class Redirect_AlbumItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirecting:false
        };
        this.onSelected=this.onSelected.bind(this);
    }

    onSelected(){
        this.setState({isRedirecting:true})
    }

    render(){
        return this.state.isRedirecting? <Redirect to={'/album/' + this.props.data.id}/> : <AlbumItem data={this.props.data} onSelected={this.onSelected} />
    }

}

export default Redirect_AlbumItem;