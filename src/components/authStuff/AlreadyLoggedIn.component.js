import React from "react";
import { Link } from "react-router-dom";

import { ThanksgivingPageWrapper, ThanksgivingText } from "../../styles";

export const AlreadyLoggedIn = () => (
	<ThanksgivingPageWrapper>
		<ThanksgivingText>
			You are already logged in! You can check out the{" "}
			<Link to="/dashboard">dashboard</Link>.
		</ThanksgivingText>
	</ThanksgivingPageWrapper>
);
