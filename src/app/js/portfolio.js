import React from "react";
import { useTranslation } from "react-i18next";

import Footer from "./footer";
import Carousel from "./carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/styles/portfolio.css";

AOS.init();

const Portfolio = () => {
	const { t } = useTranslation();

	const portfolioMass = [
		{
			id: 1,
			title: "Portfolio.1.",
			url: "http:localhost:3000/home",
			documentation: false,
			file: "not",
			fileName: "not",
			images: [
				{
					id: 1,
					imgSrc: "../images/ProjectImages/Portfolio/1.png",
					imgAlt: "Portfolio image",
				},
				{
					id: 2,
					imgSrc: "../images/ProjectImages/Portfolio/2.png",
					imgAlt: "Portfolio",
				},
				{
					id: 3,
					imgSrc: "../images/ProjectImages/Portfolio/3.png",
					imgAlt: "Portfolio",
				},
			],
		},
		{
			id: 2,
			title: "Portfolio.2.",
			url: "https://online-shopping-bac.herokuapp.com/swagger-ui.html#/",
			documentation: true,
			file: "./documentation/DocumentationOnlineShoppingBackend.pdf",
			fileName: "Online-Shopping Backend Api documentation",
			images: [
				{
					id: 1,
					imgSrc: "../images/ProjectImages/oshb/1.png",
					imgAlt: "Swagger.ui",
				},
				{
					id: 2,
					imgSrc: "../images/ProjectImages/oshb/2.png",
					imgAlt: "Swagger.ui",
				},
				{
					id: 3,
					imgSrc: "../images/ProjectImages/oshb/3.png",
					imgAlt: "Swagger.ui",
				},
				{
					id: 4,
					imgSrc: "../images/ProjectImages/oshb/4.png",
					imgAlt: "Swagger.ui",
				},
				{
					id: 5,
					imgSrc: "../images/ProjectImages/oshb/5.png",
					imgAlt: "Swagger.ui",
				},
				{
					id: 6,
					imgSrc: "../images/ProjectImages/oshb/6.png",
					imgAlt: "Swagger.ui",
				},
			],
		},
		{
			id: 3,
			title: "Portfolio.3.",
			url: "http://localhost:8087/swagger-ui.html#/",
			documentation: true,
			file: "./documentation/DocumentationOnlineShoppingBackend.pdf",
			fileName: "Online-Shopping Backend Api documentation",
			images: [
				{
					id: 1,
					imgSrc:
						"../images/ProjectImages/oshf/1.png",
					imgAlt: "Online-Shopping-Frontent",
				},
				{
					id: 2,
					imgSrc: "../images/ProjectImages/oshf/2.png",
					imgAlt: "Online-Shopping-Frontent",
				},
				{
					id: 3,
					imgSrc:
						"../images/ProjectImages/oshf/3.png",
					imgAlt: "Online-Shopping-Frontent",
				},
				{
					id: 4,
					imgSrc:
						"../images/ProjectImages/oshf/4.png",
					imgAlt: "Online-Shopping-Frontent",
				},
				{
					id: 5,
					imgSrc:
						"../images/ProjectImages/oshf/5.png",
					imgAlt: "Online-Shopping-Frontent",
				},
				{
					id: 6,
					imgSrc:
						"../images/ProjectImages/oshf/6.png",
					imgAlt: "Online-Shopping-Frontent",
				}
			],
		},
	];

	const renderProject = () => {
		return portfolioMass.map((m) => {
			return (
				<div className="py-2">
					<div
						className="row bg-success my-4 pb-5 rounded"
						data-aos="fade-up"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out-cubic"
					>
						<div className="col-12 d-flex justify-content-center bg-dark py-3 mb-5 rounded-top">
							<h2>{t(m.title + "Title")}</h2>
						</div>
						<div className="col-12 col-sm-12 col-md-6">
							<Carousel mass={m.images} carouselId={"carousel_" + m.id} />
						</div>
						<div className="col-12 col-sm-12 col-md-6">
							<div className="h-75 d-flex align-items-center p-3">
								<div>
									{t(m.title + "Description")}
									<br />
									<a className="mt-3" href={m.url} target="blank">
										{t("General.View")}
									</a>
								</div>
							</div>
							
							{m.documentation ? (
								<div className="h-25 d-flex justify-content-end align-items-end">
									<a
										className="btn btn-primary"
										type="button"
										href={m.file}
										download={m.fileName}
									>
										{t("General.Download")}
									</a>
								</div>
							) : null}
						</div>
					</div>
				</div>
			);
		});
	};

	return (
		<div id="portfolio" className="text-white">
			<div className="container">
				<div className="portfolio-content">
					<div
						className="d-flex justify-content-center py-4"
						data-aos="fade-right"
						data-aos-duration="800"
					>
						<h1 className="mt-4">{t("Navbar.3")}</h1>
					</div>
					{renderProject()}
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
