import React, { useEffect, useState } from "react";
import MovieGuide from "./components/MovieGuide";
import SearchBar from "./components/SearchBar";
import './styles.css';

//www.omdbapi.com/?i=tt3896198&apikey=[API]&t=[title]
//7b363da8

export default function App(){
    const [firstUse, setFirstUse] = useState(true);
    const [movieDetails, setMovieDetails] = useState({});

    let searchForMovie = (e) => {
        let movieName = document.getElementById('movie').value;

        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=7b363da8&t=' + movieName)
        .then((res) => res.json())
        .then((data) => {
            setMovieDetails(movieDetails => ({
                Title:data.Title,
                Year:data.Year,
                Rated:data.Rated,
                Runtime:data.Runtime,
                Genre:data.Genre,
                Actors:data.Actors,
                Plot:data.Plot,
                Poster:data.Poster,
                Ratings:data.Ratings[0].Value
            }));
            setFirstUse(false);
            return movieDetails;
        }).catch((error) => {
            console.log(error);
        })
        
        e.preventDefault();
        return movieDetails;
    }

    if(firstUse){
        return(
            <div className="main-container">
                <h1>Movie Guide</h1>
                <form onSubmit={searchForMovie}>
                    <SearchBar />
                </form>
            </div>
        ) 
    }else{
        return(
            <div className="main-container">
                <h1>Movie Guide</h1>
                <form onSubmit={searchForMovie}>
                    <SearchBar />
                </form>
                <MovieGuide movieDetails={movieDetails} />
            </div>
        )
    }
        
}