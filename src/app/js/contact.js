import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Footer from './footer';

import '../../assets/styles/contact.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


const Contact = () => {

	const { t } = useTranslation();

	const username = useRef();
	const email = useRef();
	const message = useRef();
	const [wasValidated, setWasValidated] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		let b = re.test(String(email.current.value).toLowerCase());

		if (username.current.value !== "" && b && message.current.value !== "") {

			axios.post(
				"https://online-shopping-bac.herokuapp.com/telegram/send-message",
				{
					username: username.current.value,
					email: email.current.value,
					message: message.current.value
				}
			).then(response => {
				successfulAlert(response.data.message);
				username.current.value = '';
				email.current.value = '';
				message.current.value = '';
				if (response.status == 201) {
					setWasValidated('');
				}
	
			}).catch((err) => {
				errorAlert(err.message);
			})
		} else {
			setWasValidated('was-validated');
		}
		
		

	}


	const successfulAlert = (message) => {
		toast.success(message,
			{ position: toast.POSITION.TOP_RIGHT })
	}


	const errorAlert = (message) => {
		toast.error(message,
			{ position: toast.POSITION.TOP_RIGHT })
	}


	return (
		<div id="contact" className="text-white p-3 pt-lg-5 px-lg-5">
			<div className="d-flex justify-content-center" data-aos="fade-right" data-aos-duration="800">
				<h1>
					{t('Navbar.5')}
				</h1>
			</div>
			<div className="row mb-5 mb-md-0 contact-block">
				<div className="col-12 col-sm-12 col-md-6 col-lg-6 p-lg-5 contact-full" style={{ fontFamily: "Century" }}>
					<h1>
						{t('Contact.1')}
					</h1>
					<p>
						{t('Contact.2')}
						<a id="mail-link" href="mailto:ulugbek01081999@gmail.com.is?subject=Hello!" className="text-warning" > ulugbek01081999@gmail.com </a>
						{t('Contact.3')}
					</p>
					<form>
						<div className={wasValidated + " form-group"} >
							<label htmlFor="your-name">
								{t('Contact.4')}
							</label>
							<input id="your-name" className="form-control" type="text" ref={username} autoFocus={true} placeholder={t('Contact.5')} required />
							<div class="invalid-feedback">Please fill out this field.</div>
						</div>

						<div className={wasValidated + " form-group"}>
							<label htmlFor="email-address">
								{t('Contact.6')}
							</label>
							<input id="email-address" className="form-control" type="text" ref={email} placeholder={t('Contact.7')} required />
							<div class="invalid-feedback">Please fill in this field correctly.</div>
						</div>

						<div className={wasValidated + " form-group"}>
							<label htmlFor="your-message">
								{t('Contact.8')}
							</label>
							<textarea id="your-message" className="form-control" type="text" ref={message} placeholder={t('Contact.9')} style={{ height: "100px" }} required />
							<div class="invalid-feedback">Please fill out this field.</div>
						</div>
						<div className="form-group">
							<button className="btn text-warning py-2 px-4 font-weight-bold" onClick={handleSubmit}  style={{ backgroundColor: "rgb(35 35 35)" }}>
								{t('Contact.10')}
							</button>
						</div>
					</form>
				</div>

			</div>

			<div>
				<div>
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default Contact