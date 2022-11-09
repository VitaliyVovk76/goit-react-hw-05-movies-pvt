import React, { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import Searchbar from "../../components/Searchbar";
import MoviesList from "components/MoviesList";
import Loader from "components/Loader";
import Container from "components/Container";
import MovieNotFoundСard from "components/MovieNotFoundСard";
import * as bookShelfAPI from "../../services/movieshelf-api";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

const MovieView = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") ?? "";

  const location = useLocation();

  useEffect(() => {
    if (queryParam === "") {
      return;
    }
    setStatus(Status.PENDING);
    bookShelfAPI.fetchMuvieBySearch(queryParam).then((movies) => {
      if (movies.length === 0) {
        setError({ message: `There is no movie called ${queryParam}` });
        setStatus(Status.REJECTED);
        return;
      }
      setMovies(movies);
      setStatus(Status.RESOLVED);
    });
  }, [queryParam]);

  const hendleFormSubmit = (query) => {
    setQuery(query);
    setSearchParams(query !== "" ? { query: query } : {});
  };
  return (
    <>
      <Searchbar onSubmit={hendleFormSubmit} />
      <Container>
        {status === Status.PENDING && <Loader />}
        {status === Status.RESOLVED && (
          <MoviesList
            movies={movies}
            location={location}
            btnName="Back to list"
          />
        )}
        {status === Status.REJECTED && (
          <MovieNotFoundСard message={error.message} />
        )}
      </Container>
    </>
  );
};

export default MovieView;
