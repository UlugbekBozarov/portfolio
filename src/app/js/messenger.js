import React from 'react';
import '../css/rightBar.css'

const Messenger = () => {

	return(
		<div className="text-white d-none d-md-block">
            <ul class="nav flex-column">
				<li class="nav-item icons-block">
      				<a class="nav-link p-0" href="https://web.telegram.org/#/im?p=@BozarovUlugbek" title="@web1_developer">
						  <img src="./images/icons/telegram.png" className="icons" alt="telegram"/>
					</a>
    			</li>
				<li class="nav-item icons-block">
					<a class="nav-link p-0" href="#">
						  <img src="./images/icons/facebook.png" className="icons" alt="facebook"/>
					</a>
    			</li>
				<li class="nav-item icons-block">
					<a class="nav-link p-0" href="#">
						  <img src="./images/icons/gmail.png" className="icons" alt="gmail"/>
					</a>
    			</li>
				<li class="nav-item icons-block">
					<a class="nav-link p-0" href="#">
						  <img src="./images/icons/instagram.png" className="icons" alt="instagram"/>
					</a>
    			</li>
				<li class="nav-item icons-block">
					<a class="nav-link p-0" href="#">
						  <img src="./images/icons/twitter.png" className="icons" alt="twitter"/>
					</a>
    			</li>
			</ul>
		</div>
	)
}

export default Messenger