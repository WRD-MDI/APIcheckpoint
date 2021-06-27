import axios from "axios";
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsersList(res.data))
      .catch((err) => console.log("error", err));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {usersList.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default UsersList;
