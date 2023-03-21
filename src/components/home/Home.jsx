import React from "react";
import SupportGrid from "./SupportGrid";
import JobSearch from "../job_search/JobSearch";
import Subscribe from "../email_popup/subscribe";

export default function Home() {
  return (
    <>
      <JobSearch />
      <SupportGrid />
      <Subscribe />
    </>
  );
}
