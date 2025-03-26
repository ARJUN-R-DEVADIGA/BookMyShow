import React from 'react';
import logob from './logob.svg';
import './Narbar.css';
import { useNavigate } from 'react-router-dom';
import './MovieList'

const Navbar = () => {
  const navigate = useNavigate(); // This works only inside Router context
  

  const handleSignIn = () => {
    navigate('/signin');
  };
  const handleMovie = () => {
    navigate('/MovieList');
  };



  return (
    <div>
      <nav>
        <img src={logob} alt="Logo" />
        <input type="search" name="search" placeholder="  search movies, concerts, events, plays..." />
        <ul>
         <a href = "MovieList" onclick = {handleMovie}><li>movies</li></a>
         <a href = ""><li>Conserts</li></a>  
        <a href = ""><li>Plays</li></a>
         <a href = ""><li>events</li></a>
        </ul>
        <button onClick={handleSignIn}>Sign in</button>
      </nav>
    </div>
  );
};

export default Navbar;
