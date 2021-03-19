import React from 'react';
import '../../assets/styles/footer.css';

const Footer = () => {

	return(
		<div id="footer">
			<div id="footer-messenger" className="text-white">
				<div className="d-lg-none">
            	<ul className="nav py-3">
					<li className="nav-item icons-block mx-2">
      					<a className="nav-link p-0" href="https://telegram.me/BozarovUlugbek" title="@web1_developer" target="blank">
						  	<img src="./images/icons/telegram.png" className="icons" alt="telegram"/>
						</a>
    				</li>
					<li className="nav-item icons-block mx-2">
						<a className="nav-link p-0" href="https://www.facebook.com/bozarovulugbek" target="blank">
						  	<img src="./images/icons/facebook.png" className="icons" alt="facebook"/>
						</a>
    				</li>
					<li className="nav-item icons-block mx-2">
						<a className="nav-link p-0" href="https://mail.google.com/mail/u/0/#search/ulugbek01081999%40gmail.com" target="blank">
						  	<img src="./images/icons/gmail.png" className="icons" alt="gmail"/>
						</a>
    				</li>
					<li className="nav-item icons-block mx-2">
						<a className="nav-link p-0" href="https://www.instagram.com/bozarovulugbek" target="blank">
						  	<img src="./images/icons/instagram.png" className="icons" alt="instagram"/>
						</a>
    				</li>
					<li className="nav-item icons-block mx-2">
						<a className="nav-link p-0" href="https://twitter.com/BekBozarov" target="blank">
						  	<img src="./images/icons/twitter.png" className="icons" alt="twitter"/>
						</a>
    				</li>
				</ul>
				</div>
			</div>
            <hr className="my-2 bg-white" />
			<div className="d-flex justify-content-end pb-3">
				<div><i>© 2021 Bozarov Ulug'bek</i></div>
			</div>
		</div>
	)
}

export default Footer