import React from 'react'

function MovieCard({moviesData}) {
    const {original_title,poster_path,vote_average } = moviesData;
    const imgUrl=`https://image.tmdb.org/t/p/w1280${poster_path}`
    
    return (
    <div ClassName="Card-Container flex flex-col  shadow-2xl items-center  ">
        <div className="movie-poster overflow-hidden shadow-xl w-[300px]" >
        <img src={imgUrl} alt={original_title} className=" hover:scale-150 transition-all delay-100 " />
        </div>
        <section className="Movie-Details flex justify-between items-center py-2 px-4">
            <h3 className="font-semibold text-xl">{original_title}</h3>
            <span className="p-2 text-green-500 font-bold text-xl">{Math.round(vote_average)}</span>
        </section>

    </div>
  )
}


export default MovieCard