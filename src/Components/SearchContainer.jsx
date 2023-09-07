import React,{useState,useEffect} from 'react'

function SearchContainer({styles,moviesData,setMoviesData}) {
    const [userQuerry,setUserQuerry] = useState("");
    const API_Search_URL = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${userQuerry}`

    useEffect(()=>{
        async function fetchSearchMovies(){
            const res = await fetch(API_Search_URL);
            const data = await res.json();
            data.results.map(indMovie=>{
                if(indMovie.poster_path != null){
                    console.log(indMovie)
                    setMoviesData(data.results);
                    }
            })
            
            console.log(data.results)
        }

        fetchSearchMovies()
    },[userQuerry])

  return (
    <div className={styles}>
    <input type="text" className="rounded p-2 text-black " placeholder="Search Your Movie...." value={userQuerry} onChange={(e)=>setUserQuerry(e.target.value)} />
    <button type="submit" className="rounded-md bg-red-500 px-3 py-2 font-bold hover:bg-red-700">Search</button>
</div>
  )
}

export default SearchContainer