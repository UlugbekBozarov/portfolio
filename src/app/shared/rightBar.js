import React from 'react';
import '../../assets/styles/rightBar.css';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const RightBar = () => {

	return (
		<div id="right-bar" className="text-white d-none d-lg-block">
			<ul className="nav flex-column">
				<li className="nav-item icons-block" data-aos="zoom-out-right" data-aos-duration="800">
					<a className="nav-link p-0" href="https://telegram.me/BozarovUlugbek" title="@web1_developer" target="blank">
						<img src="./images/icons/telegram.png" className="icons" alt="telegram" />
					</a>
				</li>
				<li className="nav-item icons-block" data-aos="zoom-out-right" data-aos-duration="1000">
					<a className="nav-link p-0" href="https://www.facebook.com/bozarovulugbek" target="blank">
						<img src="./images/icons/facebook.png" className="icons" alt="facebook" />
					</a>
				</li>
				<li className="nav-item icons-block" data-aos="zoom-out-right" data-aos-duration="1200">
					<a className="nav-link p-0" href="https://mail.google.com/mail/u/0/#search/ulugbek01081999%40gmail.com" target="blank">
						<img src="./images/icons/gmail.png" className="icons" alt="gmail" />
					</a>
				</li>
				<li className="nav-item icons-block" data-aos="zoom-out-right" data-aos-duration="1400">
					<a className="nav-link p-0" href="https://www.instagram.com/bozarovulugbe" target="blank">
						<img src="./images/icons/instagram.png" className="icons" alt="instagram" />
					</a>
				</li>
				<li className="nav-item icons-block" data-aos="zoom-out-right" data-aos-duration="1600">
					<a className="nav-link p-0" href="https://twitter.com/BekBozarov" target="blank">
						<img src="./images/icons/twitter.png" className="icons" alt="twitter" />
					</a>
				</li>
			</ul>
		</div>
	)
}

export default RightBar
