import { useEffect, useState } from "react";
import { UserList } from "./components/UserList";

const UsersApp = () => {
  const [endPoint, setEndPoint] = useState("users");

  const handleFetch = () => {
    setEndPoint("comments");
  };


  return (
    <>
      <h1>Users List:</h1>
      <UserList endPoint={endPoint}></UserList>
      <button onClick={handleFetch}>
        Call the API
      </button>
    </>
  );
};

export { UsersApp };
