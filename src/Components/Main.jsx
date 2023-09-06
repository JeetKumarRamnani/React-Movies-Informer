import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

function Main() {
  const [moviesData, setMoviesData] = useState([]);

  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setMoviesData(data.results);
        console.log(data.results); // Log the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    fetchData(); 

    
  }, [API_URL]);

  return (
    <main className="flex gap-10 w-full flex-wrap justify-center lg:justify-start py-10 lg:flex-nowrap ">
        {moviesData.map(movie=>{
            return <MovieCard moviesData={movie} />
        })}
   
    {/* <MovieCard />
    <MovieCard />
    <MovieCard />
    <MovieCard /> */}
    </main>
  );
}

export default Main;
