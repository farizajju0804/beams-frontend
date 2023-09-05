import { AUTH_TOKEN } from "./constants";

export const getToken = () => {
	var token = localStorage.getItem(AUTH_TOKEN);
	if (token) {
		return token;
	} else {
		return "";
	}
};

export const SetToken = (token) => {
	if (token) {
		localStorage.setItem(AUTH_TOKEN, token);
	}
};

export const removeToken = () => {
	localStorage.removeItem(AUTH_TOKEN);
};
