import React, { useState } from "react";
import SearchFields from "./SearchFields";
import SearchResultCard from "./SearchResultCard";
import "./style.css";

export default function JobSearch() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <>
      <SearchFields
        onSearchResults={handleSearchResults}
        // searchQuery={setSearchQuery}
      />
      {searchResults.map((result) => {
        return <SearchResultCard key={result.job_id} result={result} />;
      })}
    </>
  );
}
