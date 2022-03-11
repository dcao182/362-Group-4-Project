import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function SignUp() {
  const { registerUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = registerUser(email, password);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="container mx-auto my-auto flex justify-center text-lg ">
      <div className="card w-96 bg-ghost shadow-xl">
        <div className="card-body">
          <h2 className="card-title my-12">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="mb-8 input input-bordered input-xs w-full max-w-xs"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              className="mb-8 input input-bordered input-xs w-full max-w-xs"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="card-actions justify-end">
              <button className="btn btn-md bg-primary " type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
