import React from "react";
import jobs from "../data/data";
import Title from "../components/Title";
import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams("/:id");

  console.log(jobs[0].id);
  const selectedJob = jobs.find((job) => {
    return job.id === Number(id);
  });
  console.log(selectedJob);

  const {
    logo,
    company,
    logoBackground,
    position,
    postedAt,
    requirements,
    role,
    website,
    location,
    apply,
    contract,
    description,
  } = selectedJob;

  return (
    <>
      <Title img={logo} company={company} webLink={website} color={logoBackground}></Title>
    </>
  );
}

export default JobDetails;
