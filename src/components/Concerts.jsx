import React, { useState } from "react";

export default function Conserts() {
  const concerts = [
    { 
      name: "Coldplay - Music of the Spheres Tour", 
      rating: "9.2", 
      poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Music_of_the_Spheres_World_Tour.jpg"
    },
    { 
      name: "Taylor Swift - The Eras Tour", 
      rating: "9.5", 
      poster: "https://upload.wikimedia.org/wikipedia/en/5/51/The_Eras_Tour_poster.jpg"
    },
    { 
      name: "BTS - Permission to Dance On Stage", 
      rating: "9.0", 
      poster: "https://upload.wikimedia.org/wikipedia/en/9/90/BTS_-_Permission_to_Dance_On_Stage_poster.png"
    },
    { 
      name: "Ed Sheeran - Mathematics Tour", 
      rating: "8.8", 
      poster: "https://upload.wikimedia.org/wikipedia/en/1/1b/Ed_Sheeran_%E2%80%93_Mathematics_Tour.png"
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Concert List</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {concerts.map((concert, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "10px", width: "200px", textAlign: "center" }}>
            <img src={concert.poster} alt={concert.name} style={{ width: "100%", borderRadius: "5px" }} />
            <h3>{concert.name}</h3>
            <p>⭐ {concert.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}