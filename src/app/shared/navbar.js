import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../../assets/styles/navbar.css';


const Navbar = () => {

	const { t, i18n } = useTranslation();

	let location = useLocation();
	const name = "Bozarov Ulug'bek";

	const [getName, setName] = useState("B");
	const [getNameBool, setNameBool] = useState(false);

	const selectLanguage = useRef();


	const updateNameGrowth = () => {
		let text = name.substring(0, (getName.length + 1));
		if (getName.length === name.length - 1) {
			setNameBool(true);
		}
		setTimeout(() => {
			setName(text);
		}, 250);
	}

	const updateNameDecrease = () => {
		let text = name.substring(0, (getName.length - 1));
		if (getName.length === 2) {
			setNameBool(false);
		}
		setTimeout(() => {
			setName(text);
		}, 250);
	}

	useEffect(() => {
		if (getNameBool) {
			updateNameDecrease();
		} else {
			updateNameGrowth();
		}
	}, [getName]);

	const onChangesLanguage = () => {
		i18n.changeLanguage(selectLanguage.current.value);
		document.getElementById('collapsibleNavbar').classList.toggle("show");
	}

	return (
		<nav id="nav" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
			<div className="container">

				<Link to={"/home"} className="navbar-brand text-warning"><i>{getName}</i></Link>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div id="collapsibleNavbar" className="collapse navbar-collapse" >
					<div className="w-100 d-md-flex justify-content-end align-items-center">
						<hr className="" style={{ backgroundColor: "white" }} />
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to={"/home"} className={location.pathname === "/home" ? ("nav-link active") : ("nav-link")} data-toggle="collapse" data-target="#collapsibleNavbar" >
									{t('Navbar.1')}
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/services"} className={location.pathname === "/services" ? ("nav-link active") : ("nav-link")} data-toggle="collapse" data-target="#collapsibleNavbar" >
									{t('Navbar.2')}
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/portfolio"} className={location.pathname === "/portfolio" ? ("nav-link active") : ("nav-link")} data-toggle="collapse" data-target="#collapsibleNavbar" >
									{t('Navbar.3')}
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/about"} className={location.pathname === "/about" ? ("nav-link active") : ("nav-link")} data-toggle="collapse" data-target="#collapsibleNavbar" >
									{t('Navbar.4')}
								</Link>
							</li>
							<li className="nav-item">
								<Link to={"/contact"} className={location.pathname === "/contact" ? ("nav-link active") : ("nav-link")} data-toggle="collapse" data-target="#collapsibleNavbar" >
									{t('Navbar.5')}
								</Link>
							</li>
							<li className="nav-item py-1 px-2">
								<select className="form-control" onChange={onChangesLanguage} ref={selectLanguage} >
									<option className="h6" value="en">
										EN
									</option>
									<option className="h6" value="uz">
										UZ
									</option>
									<option className="h6" value="ru">
										RU
									</option>
								</select>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar