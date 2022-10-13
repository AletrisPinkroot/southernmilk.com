import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { EnquireBox } from '../components/Enquire';
import { StaticImage } from 'gatsby-plugin-image';
import '../components/main.css';

const Orders: React.FC = () => {
	return (
		<>
			<Header />
			<div className='splashSection'>
				<StaticImage
					src='../images/tempsplash.jpg'
					alt='field'
					className='splash half'
				/>
				<div className='splashText quarter'>
					<h1>Orders</h1>
				</div>
			</div>

			<div className='quote blue'>
				<p>
					To place an order, please send us an email at{' '}
					<a href='mailto:orders@southernmilk.com'>
						orders@southernmilk.com
					</a>{' '}
					or call us at 1300 00 MILK (1300 006 455).
				</p>
			</div>
			<div className='quote'>
				<p>
					Orders should be placed before 12pm to ensure next-day
					delivery. Your delivery days will be determined when you
					become a customer. If you're unsure of your delivery days,
					click below to use our online form and we'll let you know.
				</p>
				<EnquireBox />
			</div>

			<Footer />
		</>
	);
};

export default Orders;
