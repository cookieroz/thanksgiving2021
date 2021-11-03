// import React, { useContext } from "react";
// import "../App.css";
// import firebase from "firebase/compat/app";
// import { FirebaseAuth } from "react-firebaseui";
// import { Redirect } from "react-router-dom";
// import { AuthContext } from "../../firebase";
//
//
// export const SignUp = () => {
// 	//get the user state from the context
// 	const { user } = useContext(AuthContext);
//
// 	//this is our config for FirebaseAuth
// 	const uiConfig = {
// 		signInFlow: "popup",
// 		signInOptions: [
// 			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
// 			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
// 			firebase.auth.EmailAuthProvider.PROVIDER_ID,
// 		],
// 		callbacks: {
// 			signInSuccess: () => false,
// 		},
// 	};
//
// //if user exists or signed in, we redirect the page to home, else display the sign in methods with FirebaseAuth
// 	return (
// 		<div>
// 			{!!user ? (
// 				<Redirect to={{ pathname: "/" }} />
// 			) : (
// 				<div>
// 					<p>Please Sign In</p>
// 					<FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
// 				</div>
// 			)}
// 		</div>
// 	);
// }

import React, { useRef, useState } from "react";
// import { Form, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useAuth} from "../../firebase";

export const SignUpPage = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const passwordConfirmRef = useRef(null);

	const { signup } = useAuth();
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
			await signup(emailRef.current.value, passwordRef.current.value);
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
							<input
								type="password"
								required
								ref={passwordRef}
							/>
						</fieldset>
						<fieldset id="password-confirm">
							<label>Password Confirmation</label>
							<input
								type="password"
								required
								ref={passwordConfirmRef}
							/>
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

	// return (
	// 	<>
	// 		<Card>
	// 			<Card.Body>
	// 				<h2 className="text-center mb-4">Sign Up</h2>
	// 				{error && <Alert variant="danger">{error}</Alert>}
	// 				<Form onSubmit={handleSubmit}>
	// 					<Form.Group id="email">
	// 						<Form.Label>Email</Form.Label>
	// 						<Form.Control type="email" required ref={emailRef}></Form.Control>
	// 					</Form.Group>
	// 					<Form.Group id="password">
	// 						<Form.Label>Password</Form.Label>
	// 						<Form.Control
	// 							type="password"
	// 							required
	// 							ref={passwordRef}
	// 						></Form.Control>
	// 					</Form.Group>
	// 					<Form.Group id="password-confirm">
	// 						<Form.Label>Password Confirmation</Form.Label>
	// 						<Form.Control
	// 							type="password"
	// 							required
	// 							ref={passwordConfirmRef}
	// 						></Form.Control>
	// 					</Form.Group>
	// 					<Button type="submit" className="w-100" disabled={loading}>
	// 						Sign Up
	// 					</Button>
	// 				</Form>
	// 			</Card.Body>
	// 		</Card>
	// 		<div className="text-center w-100 mt-2">
	// 			Already have an account? <Link to="/login">Log In</Link>
	// 		</div>
	// 	</>
	// );
};
