import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { useDataLayerValue } from './DataLayer';
import { getTokenFromUrl } from './spotify';

const spotify = new SpotifyWebApi();

function App() {

  const [{user, token}, dispatch] = useDataLayerValue();

  // run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{

        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      
      spotify.getUserPlaylists().then((playlists)=> {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
      });

      spotify.getPlaylist('37i9dQZEVXcR7EjiuNSy3g').then(res =>
          dispatch({
            type: 'SET_DISCOVER_WEEKLY',
            discover_weekly: res,
          })
        )
    
    } 
  }, [])

  return (

    <div className="app">
      {
        token ? (
        <Player spotify={spotify} />
        ):(
          <Login />
        )
      }

    </div>
  );
}

export default App;
