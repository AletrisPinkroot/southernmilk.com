import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

//Services page: Information about what stock we sell
const Services: React.FC = () => {
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
					<h1>Services</h1>
				</div>
			</div>
			<div className='quote blue'>
				Since 1990, you’ve trusted Southern Milk Supplies with all of
				your milk distribution needs, with a comprehensive range of
				products, excellent customer service, reliable supply, and
				competitive prices. But times are changing, and we’re glad to
				change right along with that. That is why we are very glad to
				announce that we’re now dramatically expanding our stock and our
				service, with a full range of over 2000 products for the food
				service industry.
			</div>
			<div className='quote'>
				<a href='/FoodserviceProducts.xlsx' download>
					download list{' '}
				</a>
			</div>

			<div className='bio'>
				Just as always, Southern Milk Supplies continues to be a
				premiere distributor of milk and milk products. Some of the
				brands we carry include: REV, Skinny, Physical, Farmhouse, OAK,
				Ice Break, DiRossi Cheeses, Hans Smallgoods, Pearcedale Eggs,
				Vita Soy and Bulla. We also have a wide range of yoghurts,
				creams, organic items, and lactose free milk products as well.
				Now, we’re expanding that range, with over 2000 products for the
				food service industry. Whether you’re a nursing home, a school
				cafeteria, restaurant, café, or hotel, our wide range of
				products will provide you with almost everything you could
				possibly need. Request a catalogue to browse our selection of
				products, which includes everything from frozen foods to plastic
				cups, and from canned goods to table salt.
			</div>
			<Footer />
		</div>
	);
};

export const Head = () => {
	return (
		<>
			<title>Services | Southern Milk Story</title>
			<meta name='description' content='Services from southern milk ' />
		</>
	);
};

export default Services;
