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
	const [home, setHome] = React.useState(false);

	window.addEventListener('scroll', () => {
		setIsScrolled(window.scrollY > 0);
	});

	const isActive = ({ isCurrent }: { isCurrent: boolean }) => {
		if (isCurrent) {
			setHome(true);
			return { className: 'linkActive link' };
		} else setHome(false);
		console.log(home);
	};

	return (
		<Nav
			style={{
				backgroundColor: isScrolled ? '#ffffff66' : '#ffffff00',
				backdropFilter: isScrolled ? 'blur(10px)' : 'blur(0px)',
			}}>
			<Link to='/'>
				<div
					className={
						home
							? isScrolled
								? 'logoDiv'
								: 'biglogoDiv'
							: 'logoDiv'
					}
					style={{
						backgroundColor: isScrolled ? '#ffffff66' : '#ffffffdd',

						transition: 'all 2s',
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
				<Link
					to='/'
					activeClassName='linkActive'
					className='link'
					getProps={isActive}>
					HOME
				</Link>
				<Link to='/about' activeClassName='linkActive' className='link'>
					ABOUT
				</Link>
				<Link
					to='/services'
					activeClassName='linkActive'
					className='link'>
					SERVICES
				</Link>
				<Link
					to='/storyofmilk'
					activeClassName='linkActive'
					className='link'>
					MILK STORY
				</Link>
				<Link
					to='/contactus'
					activeClassName='linkActive'
					className='link'>
					CONTACT US
				</Link>
			</div>
		</Nav>
	);
};

export default Header;
