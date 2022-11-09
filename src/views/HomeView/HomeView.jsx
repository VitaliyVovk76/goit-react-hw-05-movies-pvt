import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import * as bookShelfAPI from "../../services/movieshelf-api";
import MoviesList from "components/MoviesList";
import Title from "components/Title";
import Container from "components/Container";

const HomeView = () => {
  const [movies, setMuvies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    bookShelfAPI.fetchMuviesTrending().then(setMuvies);
  }, []);

  return (
    <Container>
      <Title text="Trending today" />
      {movies && (
        <MoviesList
          movies={movies}
          location={location}
          btnName="Back to trending"
        />
      )}
      <Outlet />
    </Container>
  );
};
export default HomeView;
