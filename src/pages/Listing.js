import React from "react";
import { useAuth } from "../contexts/AuthContext";

function Listing() {
  const { currentUser } = useAuth();
  return <div>{JSON.stringify(currentUser, null, 2)}</div>;
}

export default Listing;
