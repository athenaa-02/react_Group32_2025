import React from "react";
import Card from "../components/Card";
import data from "../data/data";
import { Link } from "react-router-dom";

function jobs() {
  return (
    <>
      {data.map((job) => (
        <Link to={`/jobdetails/${job.id}`}>
          <Card info={job}></Card>
        </Link>
      ))}
    </>
  );
}

export default jobs;
