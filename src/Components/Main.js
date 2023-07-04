import React, { useState, useEffect } from "react";

import Card from "./Card";

let API_key = "&api_key=997439096313737218d40f2ef3fac9b1";
let base_url = "https://api.themoviedb.org/3";
let url =
  base_url +
  "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc" +
  API_key;

let arr = ["Popular", "Now in Theaters", "Kids & Family", "Drama", "Comedy"];

const Main = () => {
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [search, setSearch] = useState();

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.results);
        setData(data.results);
      });
  }, [url_set]);

  const getData = (movieType) => {
    if (movieType == "Popular") {
      url =
        base_url +
        "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc" +
        API_key;
    }
    if (movieType == "Now in Theaters") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2017-09-15&primary_release_date.lte=2023-01-22" +
        API_key;
    }
    if (movieType == "Kids & Family") {
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_key;
    }
    if (movieType == "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&primary_release_year=2014" +
        API_key;
    }
    if (movieType == "Comedy") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=popularity.desc" +
        API_key;
    }
    setUrl(url);
  };

  const searchMovie = (evt) => {
    if (evt.key == "Enter") {
      url =
        base_url +
        "/search/movie?api_key=997439096313737218d40f2ef3fac9b1&query=" +
        search;
      setUrl(url);
      setSearch(" ");
    }
  };

  return (
    <>
      <div className="header">
        <nav>
          <ul>
            {arr.map((value, pos) => {
              return (
                <li>
                  <a
                    href="#"
                    key={pos}
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}

            {/* <li>
              <a href="">Popular</a>
            </li>
            <li>
              <a href="">Theatre</a>
            </li>
            <li>
              <a href="">Kids</a>
            </li>
            <li>
              <a href="">Drama</a>
            </li>
            <li>
              <a href="">Comedie</a>
            </li> */}
          </ul>
        </nav>
        <form>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="inputText"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              onKeyPress={searchMovie}
            ></input>

            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}

        {movieData.length == 0 ? (
          <p className="notfound">Not Found</p>
        ) : (
          movieData.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })
        )}
      </div>
    </>
  );
};

export default Main;
