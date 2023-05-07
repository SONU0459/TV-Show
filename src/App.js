import React from "react";
import "./App.scss";
import  { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowList from "./component/ShowList";
import Navbar from  "./component/Navbar"
import ShowSummary from "./component/ShowDetail"

function App() {
  
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get("https://api.tvmaze.com/search/shows?q=all")
      .then(response => setShows(response.data))
      .catch(error => console.error(error));
  }, []);

  

  return (
    <Router>
      <div>

        <Navbar />


        <Routes>
          <Route path="/show/:id" element={<ShowSummary />} />
          <Route path="/" element={ <ShowList shows={shows} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
