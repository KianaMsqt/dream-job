import React, { useState, useEffect } from "react";
import SearchFields from "./SearchFields";
import SearchResultCard from "./SearchResultCard";
import "./style.css";


import { fakeApiReturnData, makeFakeApiRequest } from '../../utils/fakeApi';
//import axios from 'axios';

export default function JobSearch() {


  const [searchQuery, setSearchQuery] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  // Request to jsearch and print the results on the console
  // const axios = require("axios");

  // useEffect(()=>{
  //   const options = {
  //     method: 'GET',
  //     url: 'https://jsearch.p.rapidapi.com/search',
  //     params: {
  //       query: `${searchQuery}`, 
  //       page: `${page}`, 
  //       num_pages: '1'
  //     },
  //     headers: {
  //       'X-RapidAPI-Key': '28a99368c8msh158d941b1a4bd17p16d687jsn5202245154cb',
  //       'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  //     }
  //   }
  // });

  useEffect( ()=> {
    // axios.request(options)
    makeFakeApiRequest(true, 2000, fakeApiReturnData)
    .then(function (response) {
      setSearchResults( response.data );
    }).catch(function (error) {
      console.error(error);
    });
  }, [searchQuery] );

  return(
    <>
      <SearchFields 
        searchQuery={setSearchQuery}
      />
      {searchResults.map((result)=>{
        return(
          <SearchResultCard key={result.job_id} result={result} />
        ) 
      })}
    </>
  );
}
