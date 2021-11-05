import React from "react";

export const FieldWrapper = ({ children, errorMessage, label}) => (
	<div>
		{label && <label>{label}</label>}
		{children}
		{errorMessage && <small>{errorMessage}</small>}
	</div>
);
