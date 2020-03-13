import React from 'react';
import './App.css';
import AlbumsList from './component/AlbumsList';


const Albums = [
    {
        "id": 43,
        "nom": "...And Justice For All",
        "année": 1988,
        "artiste": {
            "id": 17,
            "nom": "Metallica"
        },
        "jaquette": "/albums/43/jaquette"
    },
    {
        "id": 373,
        "nom": "10,000 Days",
        "année": 2006,
        "artiste": {
            "id": 62,
            "nom": "Tool"
        },
        "jaquette": "/albums/373/jaquette"
    },
    {
        "id": 277,
        "nom": "100% Live",
        "année": 2002,
        "artiste": {
            "id": 7,
            "nom": "Prong"
        },
        "jaquette": "/albums/277/jaquette"
    }
]

function App()
{
  return(  
  <AlbumsList albums={Albums} />

)
}

export default App;