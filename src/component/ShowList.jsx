import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ShowList({ shows }) {
  const [showFullSummary, setShowFullSummary] = useState(false);

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        {shows &&
          shows.map((show) => (
            <div className="col-md-9 mb-4" key={show.show.id}>
              <div className="card card-sm">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={
                        show.show.image?.medium ||
                        "https://via.placeholder.com/210x295?text=No+image"
                      }
                      className="img-fluid rounded"
                      alt={show.show.name}
                      title={show.show.name}
                    />
                  </div>
                  <div className="col-md-5">
                    <div className="card-body">
                      <h5 className="card-title">{show.show.name}</h5>
                      <div
                        className={`card-text ${
                          showFullSummary ? "show-full" : ""
                        }`}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: show.show.summary,
                          }}
                        ></div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        {!showFullSummary && (
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => setShowFullSummary(true)}
                          >
                            View Summary
                          </button>
                        )}
                        <div className="btn-group">
                          <Link
                            to={`/show/${show.show.id}`}
                            className="btn btn-sm btn-outline-secondary"
                          >
                            View Details
                          </Link>
                        </div>
                        <small className="text-muted">
                          {show.show.premiered}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ShowList;
