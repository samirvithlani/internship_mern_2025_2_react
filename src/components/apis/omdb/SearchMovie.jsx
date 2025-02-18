import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SearchMovie = () => {
  const [moviesData, setmoviesData] = useState([]);
  const [movieName, setmovieName] = useState("")

  const searchMovie = async () => {
    const res = await axios.get(
      //"http://www.omdbapi.com/?apikey=9d57be0b&s=avatar"
      "http://www.omdbapi.com/?apikey=9d57be0b&s="+movieName
    );
    console.log(res); //
    console.log(res.data);
    setmoviesData(res.data.Search);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Search movie</h1>
      <input type="text" onChange={(event)=>{setmovieName(event.target.value)}}></input>
      <button
        onClick={() => {
          searchMovie();
        }}
        className="btn btn-info"
      >
        SEACRH
      </button>

      <div class="container mt-4">
        <div class="row">
          {moviesData?.map((movie) => {
            return (
              <div class="col-md-2">
                <div class="card">
                    <Link to={`/moviedetail/${movie.imdbID}`}>
                    <img src={movie.Poster} class="card-img-top" alt="Image" />
                  </Link>

                  <div class="card-body">
                    <h5 class="card-title">{movie.Title}</h5>
                    <p class="card-text">{movie.imdbID}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
