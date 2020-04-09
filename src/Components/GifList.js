import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs'

const GifList = props => { 
  
  const response = props.data;
  let gifs;
  console.log(response);
  if (response.length > 0) {
    gifs = response.map( gif => 
      <Gif url={gif.images.fixed_height.url} key={gif.id} />
    )
  } else {
    gifs = <NoGifs />
  }

  return (
    <ul className="gif-list">
      { gifs }
    </ul> 
  );
}

export default GifList;
