import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ProgressBar from './progres'
import Footer from './footer';
import '../../assets/styles/services.css';


const Services = () => {

	let location = useLocation();

	const {t} = useTranslation();

	const getProgrammName = [
		{
			id: 1,
			name: 'Html',
			percent: 80
		},
		{
			id: 2,
			name: 'Css',
			percent: 70
		},
		{
			id: 3,
			name: 'Bootstrap',
			percent: 75
		},
		{
			id: 4,
			name: 'JavaScript',
			percent: 60
		},
		{
			id: 5,
			name: 'Oracle DB',
			percent: 80
		},
		{
			id: 6,
			name: "My Sql",
			percent: 30
		},
		{
			id: 7,
			name: 'PostgreSql',
			percent: 60
		},
		{
			id: 8,
			name: 'Java',
			percent: 70
		},
		{
			id: 9,
			name: 'Spring Boot',
			percent: 75
		},
		{
			id: 10,
			name: 'Jpa',
			percent: 80
		},
		{
			id: 11,
			name: 'Rest Api',
			percent: 80
		},
		{
			id: 12,
			name: 'Spring Security',
			percent: 70
		}
	];

	const [getWeight, setWeight] = useState();
	const [b, setB] = useState([]);

	useEffect(() => {

		if (location.pathname === "/services") {
			setWeight(document.getElementById('getProgrammNameRow').clientWidth);

			let n = Math.floor((document.getElementById('getProgrammNameRow').clientWidth) / 160);
	
			let q = Math.ceil((getProgrammName.length / (n * 2 - 1)) * 2);
	
			let l = n * q - Math.floor(q / 2);
	
			let bool = [];
			for (let i = 0; i < l; i++) {
				bool[i] = false;
			}
			setB(bool);
		}
	}, []);

	window.addEventListener("resize", () => {
		let w = document.getElementById('getProgrammNameRow');
		if (w !== null) {
			setWeight(w.clientWidth);
		}
	});


	const updateProgBoolTrue = (index) => {
		let copyB = [...b];
		for (let i = 0; i < copyB.length; i++) {
			if (index === i) {
				copyB[i] = true;
			} else {
				copyB[i] = false;
			}
		}
		setB(copyB);
	}


	const updateProgBoolFalse = (index) => {
		let copyB = [...b];
		for (let i = 0; i < copyB.length; i++) {
			copyB[i] = false;
		}
		setB(copyB);
	}


	const renderTop = (programmTop) => {

		return programmTop.programm.map(({ id, name, percent }) => {

			return (
				<div className="div-container-top" onMouseEnter={() => updateProgBoolTrue(id - 1)} onMouseLeave={() => updateProgBoolFalse(id - 1)}>
					{
						b[id - 1] ? (
							<div id="progressTop" className="w-100 d-flex justify-content-center">
								<ProgressBar progress={percent} />
							</div>
						) : null
					}

					<div className="vertical-line-block d-flex justify-content-center">
						<div className="vertical-line-top">
							<div className="rotate-circle-top rotate-hover"></div>
						</div>
					</div>
					<div className="div-rotate-block">
						<div className="transform-rotate-45 text-center">{
							name
						}</div>
					</div>
				</div>
			)
		})
	}


	const renderCenter = (p) => {

		return p.programm.map(({ id, name, percent }) => {

			return (
				<div className="div-container-center" onMouseEnter={() => updateProgBoolTrue(id - 1)} onMouseLeave={() => updateProgBoolFalse(id - 1)}>
					{
						b[id - 1] ? (
							<div id="progressCenter" className="w-100 d-flex justify-content-center">
								<ProgressBar progress={percent} />
							</div>
						) : null
					}
					<div className="div-rotate-block">
						<div className="transform-rotate-45 text-center">{name}</div>
					</div>
				</div>
			)
		})
	}


	const renderBottom = (p) => {

		return p.map(({ id, name, percent }) => {

			return (
				<div className="div-container-bottom" onMouseEnter={() => updateProgBoolTrue(id - 1)} onMouseLeave={() => updateProgBoolFalse(id - 1)}>
					{
						b[id - 1] ? (
							<div id="progressBottom">
								<ProgressBar progress={percent} />
							</div>
						) : null
					}
					<div className="div-rotate-block">
						<div className="transform-rotate-45 text-center">{name}</div>
					</div>
					<div className="vertical-line-block-bottom">
						<div className="vertical-line-bottom">
							<div className="rotate-circle-bottom rotate-hover"></div>
						</div>
					</div>
				</div>
			)
		}
		)
	}

	const renderProgrammName = () => {

		let size = getProgrammName.length;

		let oneLineSize = 0;

		if (getWeight === null) {
			oneLineSize = Math.floor(document.getElementById('getProgrammNameRow').clientWidth / 160);
		} else {
			oneLineSize = Math.floor(getWeight / 160);
		}

		let mass = [];
		let k = 0;

		for (let i = 0; i < (size / (oneLineSize * 2 - 1)) * 2; i++) {

			let q = [];

			if ((i % 2) === 0) {
				for (let j = 0; j < oneLineSize; j++) {
					if (getProgrammName[k] == null) {
						q[j] = {
							id: k + 1,
							name: "...",
							percent: 10
						}
					} else {
						q[j] = getProgrammName[k];
					}
					k++;
				}
			} else {
				for (let j = 0; j < (oneLineSize - 1); j++) {
					if (getProgrammName[k] == null) {
						q[j] = {
							id: k + 1,
							name: "...",
							percent: 10
						}
					} else {
						q[j] = getProgrammName[k];
					}
					k++;
				}
			}

			mass[i] = {
				programm: q
			};
		}

		let index = 0;

		return mass.map(m => {

			index++;
			return (
				<div className="d-flex justify-content-center">
					{
						index === 1 ? renderTop(m) : null
					}
					{
						index !== 1 ? (index !== mass.length ? renderCenter(m) : null) : null
					}
					{
						index === mass.length ? renderBottom(m.programm) : null
					}
				</div>
			)
		})
	}

	return (
		<div id="services" className="text-white">
			<div>
				<div className="container">
					<h1 className="d-flex justify-content-center p-3" data-aos="fade-right" data-aos-duration="800">
						{t('Navbar.2')}
					</h1>
					<div className="row d-flex align-items-center">

						<div className="col-12 col-sm-12 col-md-6 col-lg-6 m-0 opacity_0-1 p-3" style={{ fontSize: "20px" }}>
							<h3>{t('Services.1')}</h3>
							<p>{t('Services.2')}</p>
							<p>{t('Services.3')}</p>
							<p>{t('Services.4')}</p>
							<p>{t('Services.5')}</p>
						</div>

						<div id="getProgrammNameRow" className="col-12 col-sm-12 col-md-6 col-lg-6 m-0 align-items-center p-3 pr-lg-5">
							<div id="renderProgramm" className="opacity_0-1">
								{renderProgrammName()}
							</div>
						</div>
					</div>

				</div>

			</div>
			<div className="container">
				<Footer />
			</div>
		</div>
	)
}

export default Services