import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const FoodService: React.FC = () => {
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
					<h1>Foodservice</h1>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default FoodService;
