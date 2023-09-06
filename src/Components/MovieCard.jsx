import React from 'react'

function MovieCard({moviesData}) {
    const {original_title,poster_path,vote_average } = moviesData;
    const imgUrl=`https://image.tmdb.org/t/p/w1280${poster_path}`
    
    return (
    <div ClassName="Card-Container flex flex-col  shadow-2xl items-center ">
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

// adult
// : 
// false
// backdrop_path
// : 
// "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg"
// genre_ids
// : 
// (3) [28, 878, 27]
// id
// : 
// 615656
// original_language
// : 
// "en"
// original_title
// : 
// "Meg 2: The Trench"
// overview
// : 
// "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival."
// popularity
// : 
// 5037.094
// poster_path
// : 
// "/FQHtuf2zc8suMFE28RyvFt3FJN.jpg"
// release_date
// : 
// "2023-08-02"
// title
// : 
// "Meg 2: The Trench"
// video
// : 
// false
// vote_average
// : 
// 7
// vote_count
// : 
// 1433

export default MovieCard