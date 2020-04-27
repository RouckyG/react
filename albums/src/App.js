import React from 'react';
import ReactDOM from 'react-dom';
import Explorer from './component/Explorer';
import Route_AlbumDetail from './component/Route_AlbumDetail';
import Route_TrackDetail from './component/Route_TrackDetail';
import './App.css';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";


function App() {
    return ( 
        <Router>
            <Switch>
                <Route path="/explorer">
                    <Explorer />
                </Route>
                <Route path="/album/:id/pistes" >
                    <Route_TrackDetail />
                </Route>
                <Route path="/album/:id" >
                    <Route_AlbumDetail />
                </Route>
                <Redirect to="/explorer" />
            </Switch>
        </Router>
    );
}

export default App;

