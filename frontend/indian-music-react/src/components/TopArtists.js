// TopArtists.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TopArtists({ accessToken }) {
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    const fetchTopArtists = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          },
          params: {
            limit: 10,
            time_range: 'short_term'
          }
        });
        setTopArtists(response.data.items);
      } catch (error) {
        console.error('Error fetching top artists:', error);
      }
    };

    fetchTopArtists();
  }, [accessToken]);

  return (
    <div>
      <h1>Your Top Artists</h1>
      <ul>
        {topArtists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopArtists;

