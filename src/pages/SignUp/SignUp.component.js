import React, { useRef, useState } from "react";
import {Link, useHistory } from "react-router-dom";
import { useAuth } from "../../firebase";
import {useDatabase} from "../../hooks/useDatabaseService.hook";

export const SignUpPage = () => {
  const { createRecord } = useDatabase(`guests`);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const { signup } = useAuth();
  const history = useHistory(); // hook for redirecting to routes
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setLoading(true);
      setError("");
      const data = await signup(emailRef.current.value, passwordRef.current.value);
      console.log('SIGN UP data', data);
      const userGuest = await createRecord({ user_uid: data?.user?.uid });
      console.log('userGuest', userGuest);
      history.push("/"); // redirecting to dashboard
    } catch (error) {
      setError("failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div>
      <div>
        <h2 className="text-center mb-4">Sign Up</h2>
        {error && <p variant="danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <fieldset id="email">
            <label>Email</label>
            <input type="email" required ref={emailRef} />
          </fieldset>
          <fieldset id="password">
            <label>Password</label>
            <input type="password" required ref={passwordRef} />
          </fieldset>
          <fieldset id="password-confirm">
            <label>Password Confirmation</label>
            <input type="password" required ref={passwordConfirmRef} />
          </fieldset>
          <button type="submit" className="w-100" disabled={loading}>
            Sign Up
          </button>
        </form>
      </div>
      <div className="text-center w-100 mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};
