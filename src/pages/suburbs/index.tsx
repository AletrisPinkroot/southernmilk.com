import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { EnquireBox } from '../../components/Enquire';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby';
const slugify = (string: string) => {
	string = string.toLowerCase();
	string = string.replace(' ', '');
	return string;
};

const Suburbs: React.FC = (props: any) => {
	const data = props.data.allSuburbsCsv.edges;
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
					<h1>Suburbs</h1>
				</div>
			</div>
			<div className='quote blue'>
				We deliver to the southeast suburbs of Melbourne, as well as the
				Mornington Peninsula area. We also have a depot lcated in
				Ballarat, and deliver from Ballarat out to Gisborne and
				Beaufort.
			</div>
			<div className='quote'>
				<div className='grid'>
					{data.map((row: any) => (
						<Link to={`/suburbs/${slugify(row.node.name)}`}>
							{row.node.name}
						</Link>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Suburbs;

export const IndexQuery = graphql`
	query {
		allSuburbsCsv {
			edges {
				node {
					name
				}
			}
		}
	}
`;
