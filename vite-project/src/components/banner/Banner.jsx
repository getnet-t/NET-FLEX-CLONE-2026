import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

export default function Banner() {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [trailerId, setTrailerId] = useState(null);

  useEffect(() => {
    // Fetch popular movies
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        // Set first movie as featured
        setFeaturedMovie(data.results[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  const openTrailer = async (movieId) => {
    try {
      const res = await fetch(
        `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
      );
      const data = await res.json();

      const trailer = data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );

      if (trailer) {
        setTrailerId(trailer.key);
      } else {
        alert("Trailer not available");
        setTrailerId(null);
      }
    } catch (err) {
      console.error("Failed to load trailer:", err);
    }
  };

  if (!movies.length) return <p>Loading movies...</p>;

  return (
    <div className="banner-container">
      {/* Featured banner */}
      {featuredMovie && (
        <div
          className="banner-background"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path})`,
          }}
        >
          <h1 className="banner-title">{featuredMovie.title}</h1>
          <p className="banner-overview">{featuredMovie.overview}</p>
        </div>
      )}

      {/* Movie row */}
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            onClick={() => openTrailer(movie.id)}
          />
        ))}
      </div>

      {/* Trailer player */}
      {trailerId && (
  <YouTube
    className="youtube-player"
    videoId={trailerId}
    opts={{
      height: "500",
      width: "100%",
      playerVars: {
        autoplay: 1,
        origin: window.location.origin, // fixes the postMessage warning
      },
    }}
  />
)}


      
    </div>
  );
}
