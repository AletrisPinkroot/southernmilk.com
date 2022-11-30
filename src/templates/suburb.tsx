import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { EnquireBox } from '../components/Enquire';
import { StaticImage } from 'gatsby-plugin-image';
import video from '../images/southernmilk.mp4';
import '../components/main.css';
import '../components/Enquire.css';

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
					<EnquireBox suburb={props.pageContext.title} />
				</div>
			</div>
			<div className='quote blue'>
				We deliver to the southeast suburbs of Melbourne, as well as the
				Mornington Peninsula area. We also have a depot located in
				Ballarat, and deliver from Ballarat out to Gisborne and
				Beaufort.
			</div>
			<div className='suburbData'>
				<div className='info'>
					<h2>{props.pageContext.title}</h2>
					<p>{props.pageContext.info}</p>
					<p>
						Information from <a href='//wikipedia.org'>Wikipedia</a>
					</p>
					<br />
					<p>
						We deliver Pauls milk products and all Lactalis milk, as
						well as our own selection of foodservice products so you
						don't need to deal with any other suppliers!{' '}
					</p>
				</div>
				<div className='video'>
					<video autoPlay controls title={props.pageContext.title}>
						<source
							src={`${props.pageContext.title.replace(
								' ',
								''
							)}.mp4`}
						/>
					</video>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export const Head = (props: any) => {
	return (
		<>
			<title>{props.pageContext.title} | Southern Milk Story</title>
			<meta
				name='description'
				content={`Southern Milk Supplies is a Pauls milk distributor in the ${props.pageContext.title} area. `}
			/>
		</>
	);
};

export default SuburbPage;
