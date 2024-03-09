import React from "react";
import { useParams } from "react-router-dom";

const SearchUser = () => {
  const { searchUser } = useParams();

  return <div>Search {searchUser}</div>;
};

export default SearchUser;
