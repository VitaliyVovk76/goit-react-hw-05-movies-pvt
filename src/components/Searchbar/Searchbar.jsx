import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const hendleChenge = (evt) => {
    const { value } = evt.currentTarget;
    setQuery(value.toLowerCase());
  };

  const hendleFormSubmit = (evt) => {
    evt.preventDefault();
    if (query.trim() === "") {
      toast("Enter the query");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <div className={s.searchBar}>
      <form className={s.searchForm} onSubmit={hendleFormSubmit}>
        <button className={s.searchFormButton} type="submit">
          <ImSearch className={s.searchFormButtonLabel} />
        </button>
        <input
          className={s.searchFormInput}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          type="text"
          name="query"
          value={query}
          onChange={hendleChenge}
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Searchbar;

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
