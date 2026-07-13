import React from "react";
import Card from "../components/Card";
import data from "../data/data";
import { Link } from "react-router-dom";

function jobs() {
  return (
    <>
      <Link to={"/jobdetails"}>
        {data.map((job) => (
          <Card info={job}></Card>
        ))}
      </Link>
    </>
  );
}

export default jobs;
