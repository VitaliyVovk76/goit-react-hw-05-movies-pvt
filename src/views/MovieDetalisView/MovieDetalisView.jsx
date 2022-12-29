import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet, useLocation } from "react-router-dom";
import * as bookShelfAPI from "../../services/movieshelf-api";
import MovieСard from "../../components/MovieСard";
import Button from "components/Button";
import Container from "components/Container";

const MovieDetalisView = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";
  const btnContent = location?.state?.label ?? "Back";

  useEffect(() => {
    bookShelfAPI.fetchMuvieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <Container>
      {movie && (
        <div>
          <Button onBackLink={backLinkHref} onBtnContent={btnContent} />
          <MovieСard movie={movie} />

          <h3>Addtional imformation</h3>
          <ul>
            <li>
              <NavLink to={"cast"} state={{ from: backLinkHref }}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to={"reviews"} state={{ from: backLinkHref }}>
                Reviews
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </Container>
  );
};

export default MovieDetalisView;
