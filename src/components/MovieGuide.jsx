import Genre from "./Genre";
import {useEffect, useState} from "react";


export default function MovieGuide(props){

    const IMG = (imgName) => {
        return require("../img/" + imgName)
    }    

    return(
        <div>
            <img src={props.movieDetails.Poster} alt="Poster" className="movie-image" />
            <div className="movie-details">
                <h2>{props.movieDetails.Title}</h2>
                <h3><img src={IMG("star.png")} alt="star" />  {props.movieDetails.Ratings}</h3>
                <div className="small-details-container">
                    <h5>{props.movieDetails.Rated}</h5>
                    <h5>{props.movieDetails.Year}</h5>
                    <h5>{props.movieDetails.Runtime}</h5>
                </div>
                <div className="genre-details-container">
                    {props.movieDetails.Genre.split(",").map((data) => {
                        return <Genre genre={data} />
                    })} 
                </div>
            </div>
            <div className="movie-description">
                <div className="movie-plot">
                    <h2>Plot:</h2>
                    <p>{props.movieDetails.Plot}</p>
                </div>
                <div className="movie-cast">
                    <h2>Cast:</h2>
                    <p>{props.movieDetails.Actors}</p>
                </div>
            </div>
        </div>
    )
}