import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/itemsSlice';

const SearchBar = () => {
    // useDispatch hook to dispatch an action to set the search term in the Redux store
  const dispatch = useDispatch();
    // handleSearch function calls the setSearchTerm from the itemsSlice and sets the search term in the Redux store
  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search items..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
