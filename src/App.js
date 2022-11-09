import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout";
import CastList from "./components/CastList";
import Reviewslist from "./components/Reviewslist";

const HomeView = lazy(() => import("./views/HomeView"));
const MoviesView = lazy(() => import("./views/MoviesView"));
const MovieDetalisView = lazy(() => import("./views/MovieDetalisView"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="movies" element={<MoviesView />} />
        <Route path="movies/:movieId" element={<MovieDetalisView />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<Reviewslist />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}
