import React from 'react';
import { useTranslation } from 'react-i18next';

import Footer from './footer';
import '../../assets/styles/about.css';

const About = () => {

	const { t } = useTranslation();


	return (
		<div id="about">
			<div class="about-block">
				<div className="d-flex justify-content-center py-3" data-aos="fade-right" data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out-cubic">
					<h1 className="font-weight-bold text-white mt-5">
						{t('Navbar.4')}
					</h1>
				</div>

				<div className="container">

					<div className="row my-5 mx-2 bg-info rounded" data-aos="fade-up" data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out-cubic">
						<div className="col-12 col-sm-12 col-md-6 col-lg-5 p-0 ">
							<img className="w-100 m-0 rounded-sm-top rounded-md-left p-0 pr-lg-5" src="./images/my/face2.jpg" alt="rasm" />
						</div>
						<div className="col-12 col-sm-12 col-md-6 col-lg-7 py-3 d-flex align-items-center">
							<div>
								<h4>
									{t('About.1')}
								</h4>
								<p>
									{t('About.2')}
								</p>
								<p>
									{t('About.3')}
								</p>
								<p>
									{t('About.4')}
								</p>
								<p>
									{t('About.5')}
								</p>
								<p>
									{t('About.6')}
								</p>
							</div>
						</div>
					</div>

					<div className="row mt-2">
						<div className="col-12 col-sm-12 col-md-4 col-lg-4 p-3">
							<div className="card t r-scalew-100 bg-info" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
								<img className="card-img-top" src="./images/img/html.jpg" alt="HtmlIcon" />
								<div className="card-body">
									<h4 className="card-title">Html</h4>
									{/* <p className="card-text">
										{t('About.3')}
									</p> */}
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-4 col-lg-4 p-3">
							<div className="card tr-scale w-100 bg-info" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="100">
								<img className="card-img-top" src="./images/img/css.jpg" alt="CssIcon" />
								<div className="card-body">
									<h4 className="card-title">Css</h4>
									{/* <p className="card-text">
										{t('About.4')}
									</p> */}
								</div>
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-4 col-lg-4 p-3">
							<div className="card tr-scale w-100 bg-info" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
								<img className="card-img-top" src="./images/img/js.jpg" alt="JavaScriptIcon" />
								<div className="card-body">
									<h4 className="card-title">JavaScript</h4>
									{/* <p className="card-text">
										{t('About.5')}
									</p> */}
								</div>
							</div>
						</div>
					</div>

					<div className="row my-5 mx-2 bg-info rounded" data-aos="fade-up" data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out-cubic">
						<div className="col-12 col-sm-12 col-md-6 col-lg-5 p-3 d-flex justify-content-center align-items-center">
							<img className="rounded-sm-top rounded-md-left p-0 pr-lg-5" src="./images/TarjimaiHol.jpg" style={{width: "200px"}} alt="rasm" />
						</div>
						<div className="col-12 col-sm-12 col-md-6 col-lg-7 py-3 d-flex align-items-center">
							<div>
								<h4>
									{t('About.7')}
								</h4>
								<p>
									<a href="./documentation/TarjimaiHol.pdf" className="btn btn-success" download >
										{t('General.Resume')}
									</a>
								</p>
							</div>
						</div>
					</div>


				</div>
			</div>
			<div className="container text-white">
				<Footer />
			</div>

		</div>
	)
}

export default About