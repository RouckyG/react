import React from 'react';
import ReactDOM from 'react-dom';
import Explorer from './component/Explorer';
import Route_AlbumDetail from './component/Route_AlbumDetail';
import './App.css';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";


function App() {
    return ( 
        <Router>
            <Switch>
                <Route path="/explorer">
                    <Explorer />
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

