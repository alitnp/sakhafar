import { useState, useEffect } from "react";
import "./HeaderBar.css";
import logo from "../icons/logo.svg";
import logout from "../icons/logout.svg";

export default function HeaderBar(props) {
	return (
		<header className="headerBar">
			<div className="logo">
				<img src={logo} alt="Website Logo" />
				<p>سمارا</p>
			</div>
			<div className="login-user">
				<div onClick={!props.loggedIn && props.login}>
					<span>{props.loggedIn ? "علی محمودی" : "ورود"}</span>
				</div>
				{props.loggedIn && (
					<img onClick={props.login} src={logout} alt="logout button" />
				)}
			</div>
		</header>
	);
}
