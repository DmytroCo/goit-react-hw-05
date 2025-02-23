import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import s from "./SearchBar.module.css"

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: value });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search for a movie..."
        className={s.input}
      />
      <button type="submit" className={s.button}>Search</button>
    </form>
  );
};

export default SearchBar;