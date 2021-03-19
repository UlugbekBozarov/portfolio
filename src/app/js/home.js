import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import "../../assets/styles/home.css";

const Home = () => {

	const { t } = useTranslation();

	return (
		<div id="home" className="h-100">
			<div className="row h-75 m-0 text-white">
				<div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
					<div className="text-center p-1 p-lg-5 opacity_0-1">
						<h1>
							{t('Home.1')}
						</h1>
						<p>
							{t('Home.2')}
						</p>
					</div>
				</div>
				<div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center align-items-center">
					<div className="opacity_0-1" style={{ width: "320px" }}>
						<img className="w-100" src="./images/home/home.svg" alt="svg" />
					</div>
				</div>
				<div className="container fixed-bottom pb-5 pl-5" style={{ right: "0" }}>
					<Link className="nav-link" to="/services">
						<i className="nextIconText">
							{t('Home.3')}
						</i>
						<img className="nextIcon" src="./images/home/next3.png" alt="n" />
						<img className="nextIcon" src="./images/home/next3.png" alt="e" />
						<img className="nextIcon" src="./images/home/next3.png" alt="xt" />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home