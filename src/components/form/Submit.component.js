import React from "react";
import { SubmitStyled } from "./styles";

export const SubmitComponent = (props) => (
	<div>
		<SubmitStyled type="submit" {...props}/>
	</div>
);
