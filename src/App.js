import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/navlink/Header";
import Home from "./components/home/Home";
import SupportGrid from "./components/home/SupportGrid";
import Subscribe from "./components/email_popup/Subscribe";
import ThankYou from "./components/contact/ThankYou";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="careersupport/*" element={<SupportGrid />} />
          <Route path="contact/*" element={<Contact />} />
          <Route path="subscribe/*" element={<Subscribe />} />
          <Route path="thankyou/*" element={<ThankYou />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
