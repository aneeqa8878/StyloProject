import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const response = await axios.get("http://localhost:8000/users");
    setUsers(response.data.users);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Confirm Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            <tr>
              <th scope="row">{item.name}</th>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
