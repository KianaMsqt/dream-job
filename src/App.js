import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import SearchFields from "./components/job_search/SearchFields";
import Header from "./components/navlink/Header";
import JobSearch from "./components/job_search/JobSearch";

import { fakeApiReturnData, makeFakeApiRequest } from './utils/fakeApi';
//import axios from 'axios';

function App() {
  
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
  }).catch(function (error) {
    console.error(error);
  });
  
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<JobSearch />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>

        <SearchFields />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
