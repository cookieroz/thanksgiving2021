import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {useAuth} from "../../contexts";

export const LoginPage = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const { login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory(); // hook for redirecting to routes

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setLoading(true);
			setError("");
			await login(emailRef.current.value, passwordRef.current.value);
			console.log('logged in')
			history.push("/"); // redirecting to dashboard
		} catch (error) {
			console.log({error})
			setError("failed to Log in");
		}
		setLoading(false);
	};

	return (
		<div>
					<h2 className="text-center mb-4">Log In</h2>
					{error && <p variant="danger">{error}</p>}
					<form onSubmit={handleSubmit}>
						<fieldset id="email">
							<label>Email</label>
							<input type="email" required ref={emailRef} />
						</fieldset>
						<fieldset id="password">
							<label>Password</label>
							<input
								type="password"
								required
								ref={passwordRef}
							/>
						</fieldset>
						<button type="submit" className="w-100" disabled={loading}>
							Log In
						</button>
					</form>
					<div className="text-center w-100 mt-3">
						<Link to="/forget-password">Forget password?</Link>
					</div>
			<div className="text-center w-100 mt-2">
				Not registered yet? <Link to="/sign-up">Sign Up</Link>
			</div>
		</div>
	);
};
