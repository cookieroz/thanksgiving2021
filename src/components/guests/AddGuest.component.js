import React, { useEffect } from "react";
import { useAuth } from "../../firebase";
import { useDatabase } from "../../hooks/useDatabaseService.hook";
import {InputComponent} from "../form";

export const AddGuest = () => {
	const { currentUser } = useAuth();
	const { createRecord } = useDatabase(`guests`);

	console.log({ currentUser });

	useEffect(() => {
		getAll();
	}, []);

	// attending: 1
	// location: ""
	// name: "roz"
	// should add potluck item here.

	return (
		<div>
			<form>
				<fieldset>
					<InputComponent label="Name" />
					<InputComponent label="Location" />
				</fieldset>
			</form>
		</div>
	);
};
