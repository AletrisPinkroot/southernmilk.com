import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { EnquireBox } from '../components/Enquire';
import { StaticImage } from 'gatsby-plugin-image';

const SuburbPage: React.FC = (props: any) => {
	React.useEffect(() => {
		console.log(props);
	});
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
					<h1>{props.pageContext.title}</h1>
				</div>
			</div>
			<div className='quote blue'>
				We deliver to the southeast suburbs of Melbourne, as well as the
				Mornington Peninsula area. We also have a depot lcated in
				Ballarat, and deliver from Ballarat out to Gisborne and
				Beaufort.
			</div>
			<div className='info'>{props.pageContext.information}</div>

			<Footer />
		</div>
	);
};

export default SuburbPage;
