import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU1OTg2MDQzLCJleHAiOjE2NTg1NzgwNDN9._IQ5oSkZ2Utjg2P2EzZqt7ycmT6lRv5rz9wOnN-Jgpw";
const url = "http://localhost:1337/api/students";

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  const [isSend, setIsSend] = useState(false);

  const handleAddUser = async (value) => {
    setIsSend(false);
    await axios
      .post(
        url,
        JSON.parse(`{
          "data":{
            "name": "${value.name}",
            "average": ${value.average},
            "attendance": ${value.attendance}
          }
        }`)
      )
      .then(() => setIsSend(true))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    axios
      .get(url)
      .then(({ data: { data } }) => setUsers(data))
      .catch((error) => setError(error));
  }, [isSend]);
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  const deleteUser = async (id) => {
    setIsSend(false);
    await axios
      .delete(url + "/" + id)
      .then(() => setIsSend(true))
      .catch((error) => setError(error));
  };

  return (
    <UsersContext.Provider value={{ users, handleAddUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
