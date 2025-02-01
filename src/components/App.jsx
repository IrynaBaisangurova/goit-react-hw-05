import { useState, useEffect } from 'react'
import {fetchMovies} from '../services/movies'
import './App.css'

const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
  const getData = async () => {
    const {hits} = await fetchMovies();
    setMovies(hits);
  };
  getData();
  },[]);
  
  return (

  );
}
 

export default App
