
import React, { useState } from 'react'
import axios from 'axios'
import './movie.css'


function MovieSearch() {
    const [movieName, setMovieName] = useState("")
    const [movie, setMovie] = useState([])
    const url = 'https://image.tmdb.org/t/p/original'

    function handleSubmit(e) {
        e.preventDefault()
        axios.get('https://api.themoviedb.org/3/search/movie?query=' + movieName + '&api_key=386828ab0878c580a8b9a7096671e1ac&include_adult=false&language=en-US&page=1')

            .then((res) => {
                setMovie(res.data.results)
                console.log(res.data.results[0])
                // console.log (res)
            }, [])

    }

    console.log(movie)
    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="center">
                    <input type="text" placeholder='Enter a movie name' value={movieName} onChange={(e) => { setMovieName(e.target.value) }} />
                    <button type='submit'>search</button>
                </div>
            </form>
            {/* {movie.length>0 ?
            <div>
                <img src={url+ movie[0].poster_path} alt="{movie[0].title}" />
                 <h2>{movie[0].title}</h2>
            </div> : " "} */}

            <div>
                {movieName === "" ? (
                    <p></p>
                ) : movie.length > 0 ? (
                    <div className="flexwrap">
                        {movie.map((val, index) => {
                            return (
                                <>

                                    <div className="box">
                                        <div className='imagebox'>
                                            {movie[index].poster_path === null ? <img src="./src/movieposter.jpeg" alt="" />

                                                : <img id='img' src={url + movie[index].poster_path} alt="" />}</div>


                                        <h2 id='moviename'>{movie[index].title}</h2>
                                    </div>

                                </>
                            )
                        })}
                    </div>) : <p>No movie found.</p>   } 
            </div>
        </>
    )
}
export default MovieSearch