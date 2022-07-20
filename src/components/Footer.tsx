import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Footer: React.FC = () => {
	return (
		<footer>
			<div className='contactDetails'>
				<p>Phone: 1300 00 MILK</p>
				<p>
					Email:{' '}
					<a href='mailto:info@southernmilk.com'>
						info@southernmilk.com
					</a>
				</p>
			</div>
			<div className='footerLinks'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
			</div>
		</footer>
	);
};

export default Footer;
