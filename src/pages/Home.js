import React from "react";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const { currentUser } = useAuth();
  const logOutOnClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <button onClick={logOutOnClick}>Logout</button>
    </div>
  );
}

export default Home;
