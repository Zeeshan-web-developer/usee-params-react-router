import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "./data.json";
import "./Card.css";
function User() {
  const { id } = useParams();
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{data[id - 1].name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {data[id - 1].username}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">{data[id - 1].phone}</h6>
        <h6 className="card-subtitle mb-2 text-muted">
          {data[id - 1].website}
        </h6>

        <i>{data[id - 1].email}</i>
        <Link to="/">All Students</Link>
      </div>
    </div>
  );
}

export default User;
