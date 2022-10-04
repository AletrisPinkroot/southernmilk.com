import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { EnquireBox } from '../components/Enquire';
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
			<div className='quote blue'>
				If you have any questions about our business, or are interested
				in becoming a customer, feel free to contact us through the
				methods provided below, or use our form online and we'll get
				back to you as soon as possible.
			</div>
			<div className='quote'>
				Reach us at 1300 00 MILK (1300 006 455) or{' '}
				<a href='mailto:info@southernmilk.com?subject=Enquiry'>
					info@southernmilk.com
				</a>
				<br />
				<div style={{ margin: '1em' }}>
					<EnquireBox />
				</div>
			</div>
			<Footer />
		</div>
	);
};
export const Head = () => {
	return (
		<>
			<title>Contact Us | Southern Milk Supplies</title>
			<meta name='description' content='Contact us' />
		</>
	);
};

export default ContactUs;
