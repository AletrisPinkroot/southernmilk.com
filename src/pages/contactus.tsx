import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { StaticImage } from 'gatsby-plugin-image';

const ContactUs: React.FC = () => {
	return (
		<div>
			<Header />
			<div className='splashSection'>
				<StaticImage
					src='../images/tempsplash.jpg'
					alt='field'
					className='splash half'
				/>
				<div className='splashText quarter'>
					<h1>Contact Us</h1>
				</div>
			</div>
			<div className='quote'>
				Reach us at 1300 00 MILK or{' '}
				<a href='mailto:info@southernmilk.com'>info@southernmilk.com</a>
				<br />
				<a href='#enquiry' className='Button'>
					ENQUIRE
				</a>
			</div>
			<Footer />
		</div>
	);
};

export default ContactUs;
