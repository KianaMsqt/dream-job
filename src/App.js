import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/navlink/Header";
import JobSearch from "./components/job_search/JobSearch";

function App() {
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

        <Footer />
      </div>
    </Router>
  );
}

export default App;
