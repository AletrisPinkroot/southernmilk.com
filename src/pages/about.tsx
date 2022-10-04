import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { StaticImage } from 'gatsby-plugin-image';
import '../components/main.css';

const About: React.FC = () => {
	return (
		<div>
			<Header />
			<div className='splashSection half'>
				<StaticImage
					src='../images/tempsplash.jpg'
					alt='open farmland'
					placeholder='blurred'
					className='splash half'
					layout='fullWidth'
				/>
				<div className='splashText quarter'>
					<h1>About Us</h1>
				</div>
			</div>

			<div className='bio blue'>
				{/* information about the business and our history */}
				<p>
					We are a Lactalis distributor who's been in operation for
					over 20 years, providing excellent service to each and every
					customer.
					<br /> Our Business is HACCP Certified, and our staff are
					trained in HACCP procedures, giving our customers guarantees
					above and beyond our competitors. We will keep ahead of the
					pack with our commitment to our product range and our
					commitment to serving you.
				</p>
			</div>
			{/* where we deliver to, amount of trucks */}
			{/* maybe have a graphic of Victoria with the areas we deliver to? */}
			<div className='splitSection reverse'>
				<div className='splitText'>
					<h2>Where We Deliver</h2>
					<p>
						We deliver to all south-eastern suburbs of Melbourne,
						including Richmond, Pakenham, Box Hill and down on the
						Peninsula. We also deliver to Ballarat, Beaufort,
						Gisborne, and the Macedon Ranges.
					</p>
				</div>
				<div className='splitImage'>
					<StaticImage
						src='../images/melbs.jpg'
						alt='Looking at Melbourne over Albert Park'
					/>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export const Head = () => {
	return (
		<>
			<title>About | Southern Milk Supplies</title>
			<meta name='description' content='Southern Milk Supplies About' />
		</>
	);
};

export default About;
