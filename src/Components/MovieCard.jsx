import React from 'react'

function MovieCard({moviesData}) {
    const {original_title,poster_path,vote_average } = moviesData;
    const imgUrl=`https://image.tmdb.org/t/p/w1280${poster_path}`
    
    return (
    <div>
        <div className="movie-poster overflow-hidden shadow-xl w-full" >
        <img src={imgUrl} alt={original_title} className=" hover:scale-150 transition-all delay-200 w-[250px] h-[350px] object-cover hover:opacity-60 cursor-pointer" />
        </div>
        <section className="Movie-Details flex justify-between items-center py-2 px-4 bg-[#333] w-[250px]">
            <h3 className="font-semibold text-xl">{original_title}</h3>
            <p className="p-2 text-green-500 font-bold text-xl">{vote_average}</p>
        </section>

    </div>
  )
}


export default MovieCard