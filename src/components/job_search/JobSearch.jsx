import React, { useState, useEffect } from "react";
import "./style.css";

import { fakeApiReturnData, makeFakeApiRequest } from '../../utils/fakeApi';
import SearchFields from "./SearchFields";
import SearchResultCard from "./SearchResultCard";
//import axios from 'axios';

export default function JobSearch() {

  // Request to jsearch and print the results on the console
  // const options = {
  //   method: 'GET',
  //   url: 'https://jsearch.p.rapidapi.com/search',
  //   params: {
  //     query: 'Node developer London, UK',
  //     num_pages: '1'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '',
  //     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  //   }
  // };

  const [ searchResults, setSearchResults ] = useState([]);
  useEffect( ()=> {
    // axios.request(options)
    makeFakeApiRequest(true, 2000, fakeApiReturnData)
    .then(function (response) {
      setSearchResults( response.data );
    }).catch(function (error) {
      console.error(error);
    });
  }, [] )


  return(
    <>
      <SearchFields />
      {searchResults.map((result)=>{
        return(
          <SearchResultCard key={result.job_id} result={result} />
        ) 
      })}
    </>
  );
}
