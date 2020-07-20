import React, { useEffect } from "react";
import Card from "../Components/Card";
import { parse } from "query-string";
import Axios from "axios";

const Search = (props) => {
  const {
    location: { search },
  } = props;
  useEffect(() => {});
  return (
    <div className="Search" style={{ width: "70%", margin: "0 15%" }}>
      <Card size="large" />
      <Card size="large" />
      <Card size="large" />
      <Card size="large" />
      <Card size="large" />
      <Card size="large" />
      <Card size="large" />
    </div>
  );
};

export default Search;
