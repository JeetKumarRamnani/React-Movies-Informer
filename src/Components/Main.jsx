import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchContainer from './SearchContainer';

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

    <main className="flex gap-10 w-full flex-wrap justify-center  py-10 ">
          <SearchContainer styles="search md:hidden gap-4 flex" moviesData={moviesData} setMoviesData={setMoviesData} />

        {moviesData.map(movie=>{
            return <MovieCard key={movie.poster_path} moviesData={movie} />
        })}

    </main>
  );
}

export default Main;
