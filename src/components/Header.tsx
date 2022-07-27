import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '../components/Header.css';

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;

	position: fixed;
	width: 100vw;
	height: 5.5em;
	transition: all 1s;
	z-index: 50;
`;

const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = React.useState(false);

	window.addEventListener('scroll', () => {
		setIsScrolled(window.scrollY > 0);
	});

	return (
		<Nav
			style={{
				backgroundColor: isScrolled ? '#ffffff66' : '#ffffff00',
				backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
			}}>
			<Link to='/'>
				<div
					className='logoDiv'
					style={{
						backgroundColor: isScrolled ? '#ffffff66' : '#ffffffdd',

						transition: 'all 0.5s',
					}}>
					<StaticImage
						src='../images/SMS Logo.png'
						alt='Southern Milk Supplies'
						loading='eager'
						placeholder='tracedSVG'
						className='logo'
						width={150}
					/>
				</div>
			</Link>
			<div className='links'>
				<Link to='/' activeClassName='linkActive' className='link'>
					HOME
				</Link>
				<Link to='/about' activeClassName='linkActive' className='link'>
					ABOUT
				</Link>
				<Link
					to='/foodservice'
					activeClassName='linkActive'
					className='link'>
					FOODSERVICE
				</Link>
			</div>
		</Nav>
	);
};

export default Header;
