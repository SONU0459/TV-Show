import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ShowDetail() {
  const { id } = useParams();
  const [show, setShow] = useState({});

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => setShow(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-4">
          <img src={show.image?.medium} alt={show.name} className="card-img card-img-small" title= {show.name} />
        </div>
        <div className="col-md-8">
          <h2>{show.name}</h2>
          <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
          <ul className="list-unstyled">
            <li><strong>Language:</strong> {show.language}</li>
            <li><strong>Status:</strong> {show.status}</li>
            <li><strong>Genres:</strong> {show.genres?.join(", ")}</li>
            <li><strong>Premiered:</strong> {show.premiered}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShowDetail;
