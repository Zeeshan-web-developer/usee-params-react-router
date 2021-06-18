import React from "react";
import data from "./data.json";
import { Link } from "react-router-dom";
function Demo2(props) {
  return (
    <div className="container mt-3">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.name}>
              <th scope="row">{user.name}</th>
              <td>
                <Link to={`/user/${index + 1}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Demo2;
