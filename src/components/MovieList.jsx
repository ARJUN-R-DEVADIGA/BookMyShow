import React, { useState } from "react";
import doom from './doom.jpg';
import fantastic4 from './fantastic4.jpg';
import superman from './superman.avif';
import Onepiece from './Onepiece.jpg';
import kl from './kl.jpg';
import ll from './ll.jpg';
import mk from './mk.jpg';
import bb from './bb.jpg';
import cc from './cc.jpg';
import cp from './cp.jpg';
import jj from './jj.jpg';
import pp from './pp.jpg';
import oo from './oo.jpg';
import zz from './zz.jpg';
import ff from './ff.jpg';
import hh from './hh.jpg';
import rr from './rr.jpg';
import ui from './ui.jpg';
import nn from './nn.jpg';



function MovieList() {
  const movies = [
    { 
      title: "CAPTAIN AMERICA BRAVE NEW WORLD", 
      rating: "8.5", 
      poster: " cp.jpg"
    },
    { 
      title: "Dune: Part Two", 
      rating: "8.8", 
      poster: "https://m.media-amazon.com/images/I/81y9XWofGuL.AC_UF1000,1000_QL80.jpg"
    },
    { 
      title: "Spider-Man: No Way Home", 
      rating: "8.3", 
      poster: "https://m.media-amazon.com/images/I/81rFslR+HbL.AC_UF1000,1000_QL80.jpg"
    },
    { 
      title: "John Wick 4", 
      rating: "8.6", 
      poster: "https://m.media-amazon.com/images/I/71YfJoVb84L.AC_UF1000,1000_QL80.jpg"
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Movie List</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {movies.map((movie, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "10px", width: "200px", textAlign: "center" }}>
            <img src={movie.poster} alt={movie.title} style={{ width: "100%", borderRadius: "5px" }} />
            <h3>{movie.title}</h3>
            <p>⭐ {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;