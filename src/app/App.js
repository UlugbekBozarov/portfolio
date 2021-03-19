import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './shared/navbar';
import RightBar from './shared/rightBar';

// import Routes from './routes';

const App = () => {

	const [getHeight, setHeight] = useState({
		paddingTop: '66.8px'
	});

	useEffect(() => {
		setHeight({
			paddingTop: "60px",
			height: (window.innerHeight) + 'px'
		});

		window.addEventListener("resize", () => {
			setHeight({
				paddingTop: "60px",
				height: (window.innerHeight) + 'px'
			});
		})
	}, []);

	return (
		<Router>
			<Navbar />
			<div style={getHeight}>
				{/* <Routes /> */}
				<RightBar />
			</div>
		</Router>
	);
}

export default App;
