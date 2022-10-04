import * as React from 'react';
import Header from '../components/Header';
import { StaticImage } from 'gatsby-plugin-image';
import { EnquireBox } from '../components/Enquire';
import '../components/main.css';
import Footer from '../components/Footer';
import '../components/Header.css';
import '../components/Footer.css';
import '../components/Enquire.css';
import { useMediaQuery } from 'react-responsive';

const Index: React.FC = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
	return (
		<div>
			<Header />
			<div className='splashSection'>
				<StaticImage
					src='../images/tempsplash.jpg'
					alt='open farmland'
					placeholder='blurred'
					className='splash'
					layout='fullWidth'
				/>
				<div className='splashText'>
					<p>At</p>
					<h1>SOUTHERN MILK SUPPLIES</h1>
					<p>Your business is our business!</p>
					<br />
					<EnquireBox />
				</div>
			</div>

			<div className='quote blue'>
				<p>
					<span>'</span>At Southern Milk Supplies, we endeavour to
					provide the best service possible to our clients, as well as
					giving them access to the largest range of branded products
					in Australia.<span>'</span>
				</p>
			</div>

			<div className='splitSection'>
				<div className='splitText'>
					<h2>What We Do</h2>
					<p>
						Southern Milk Supplies has been in business for 24 years
						and has prided itself on service and supply of Dairy and
						Foodservice goods throughout this period. <br />
						We guarantee our products and treat every one of our
						customers as ‘gold’ <br /> Our Sales and Marketing team,
						headed up by Craig Stevens, will endeavour to satisfy
						all of your requirements.
					</p>
				</div>
				<div className='splitImage'>
					<StaticImage
						src='../images/milkjugs.jpg'
						alt='jugs of milk'
						placeholder='blurred'
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
			<meta name='description' content='Southern Milk Supplies' />
			<title>Home | Southern Milk Supplies</title>
		</>
	);
};
export default Index;
