import React from "react";
import "./style.css";

import { fakeApiReturnData, makeFakeApiRequest } from '../../utils/fakeApi';
import { json } from "react-router";
//import axios from 'axios';

function JobSearch() {

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


  // axios.request(options)
  makeFakeApiRequest(true, 2000, fakeApiReturnData)
  .then(function (response) {
    console.log(response.data);

    // Create an array of SearchResults component included each result's details
    // const searchResults = [];
    // for (let i = 0; i < response.data.length; i++) {
    //   searchResults.push(<SearchResults {...searchResults[i]} />);
    // }

  }).catch(function (error) {
    console.error(error);
  });

  return <h1 className="jobSearch">
  </h1>;
}

export default JobSearch;
