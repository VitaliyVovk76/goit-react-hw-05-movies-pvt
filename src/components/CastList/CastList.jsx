import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moviesShelfAPI from "../../services/movieshelf-api";
import s from "./CastList.module.css";

const CastList = () => {
  const [castList, setCastList] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    moviesShelfAPI.fetchCast(movieId).then(setCastList);
  }, [movieId]);

  return (
    <>
      <h3>Cast</h3>
      {castList && (
        <ul className={s.list}>
          {castList.map((cast) => (
            <li className={s.item} key={cast.id}>
              <img
                className={s.img}
                src={
                  cast.profile_path &&
                  `${moviesShelfAPI.IMAGE_URL}${cast.profile_path}`
                }
                alt={cast.name}
              />
              <p>{cast.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CastList;
