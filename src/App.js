import { useState, useEffect } from "react";

import HeaderBar from "./components/HeaderBar";
import Header from "./components/Header.js";
import LoginDialog from "./components/LoginDialog.js";
import Info from "./components/Info.js";
import Miners from "./components/Miners.js";

import infoData from "./info.json";
import minersData from "./miners.json";

function App() {
	const [loggedIn, setLoggedIn] = useState(true);
	const [appearLoginDialog, setAppearLoginDialog] = useState(false);
	const [totals, setTotals] = useState([0, 0]);

	const handleTotalChange = (newTotals) => {
		setTotals(newTotals);
	};

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
			<Info info={loggedIn ? infoData : {}} />
			<Miners
				miners={minersData}
				info={infoData.miners}
				loggedIn={loggedIn}
				onTotalChange={handleTotalChange}
			/>
		</div>
	);
}

export default App;
