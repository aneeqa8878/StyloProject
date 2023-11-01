import axios from "axios";
import React, { useState, useEffect } from "react";

function Quries() {
  const [queries, setQueries] = useState([]);
  const getQuery = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/contact`);
    setQueries(response.data.contacts);
  };

  useEffect(() => {
    getQuery();
  }, []);
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
          
          </tr>
        </thead>
        <tbody>
          {queries.map((item) => {
            return (
              <tr>
                <th scope="row">{item.name}</th>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{item.message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Quries;
