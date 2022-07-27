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
					My name is Paul Goss and I started Modern Milk Supplies (now
					Southern Milk Supplies) in 1990 with my wife Michelle.
					Service to my customers has always been at the forefront of
					what we do. My current business partner, Craig Stevens has
					always had that philosophy as well, coming from 15 years
					sales and marketing at Parmalat (Paul’s). <br />
					Both Craig and I are both proud of the fact that our
					children are now employees of the company, with my son,
					Anthony, working in the coolroom and Craig's son, Brenton,
					driving trucks. We endeavour to provide the best service
					possible to our clients, as well as giving them access to
					the largest range of branded products in Australia.
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
				<div className='splitImage'></div>
			</div>
			{/* info about staff */}
			<div className='columnGroup blue'>
				<div className='column'>
					<h2>Paul Goss</h2>
					<h3>Owner</h3>
					<p>Paul comes from a military background</p>
				</div>
				<div className='column'>
					<h2>Craig Stevens</h2>
					<h3>Owner</h3>
					<p>Craig comes from a sales background</p>
				</div>
				<div className='column'>
					<h2>Ross Thornton</h2>
					<h3>Operations Manager</h3>
					<p>Ross blah blah</p>
				</div>
				<div className='column'>
					<h2>Goran Trbojevic</h2>
					<h3>Warehouse Manager</h3>
					<p>Goran blah blah</p>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default About;
