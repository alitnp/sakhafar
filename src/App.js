import { useState } from "react";

import HeaderBar from "./components/HeaderBar";
import Header from "./components/Header.js";
import LoginDialog from "./components/LoginDialog.js";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [appearLoginDialog, setAppearLoginDialog] = useState(false);

	const handleLogin = () => {
		loggedIn ? setLoggedIn(!loggedIn) : setAppearLoginDialog(true);
	};

	const handleCloseLoginDialog = () => {
		setAppearLoginDialog(false);
	};

	const handleSuccessfulLogin = () => {
		setLoggedIn(true);
		setAppearLoginDialog(false);
	};

	return (
		<div className="App">
			<LoginDialog
				appear={appearLoginDialog}
				successfulLogin={handleSuccessfulLogin}
				closeLoginDialog={handleCloseLoginDialog}
			/>
			<HeaderBar loggedIn={loggedIn} login={handleLogin} />
			<Header />
		</div>
	);
}

export default App;
