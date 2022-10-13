import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import '../components/Header.css';
import { useMediaQuery } from 'react-responsive';

const isBrowser = typeof window !== 'undefined';

const Header: React.FC = () => {
	const [isScrolled, setIsScrolled] = React.useState(false);
	const [home, setHome] = React.useState(false);
	const [sideBar, setSideBar] = React.useState(false);

	const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

	if (isBrowser) {
		window.addEventListener('scroll', () => {
			setIsScrolled(window.scrollY > 0);
		});
	}

	const toggleSide = () => {
		setSideBar(!sideBar);
	};

	const isActive = ({ isCurrent }: { isCurrent: boolean }) => {
		if (isCurrent) {
			setHome(true);
			return { className: 'linkActive link' };
		} else setHome(false);
		console.log(home);
	};

	return (
		<nav
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
								: isMobile
								? 'logoDiv'
								: 'logoDiv biglogo'
							: 'logoDiv'
					}
					style={{
						backgroundColor: isScrolled ? '#ffffff66' : '#ffffffdd',
					}}>
					<StaticImage
						src='../images/smslogo.png'
						alt='Southern Milk Supplies'
						loading='eager'
						placeholder='tracedSVG'
						className='logo'
						width={500}
					/>
				</div>
			</Link>
			<div
				className={
					home
						? isScrolled
							? 'homeOverlay hide'
							: isMobile
							? 'homeOverlay hide'
							: 'homeOverlay'
						: 'homeOverlay hide'
				}
				style={{}}></div>
			{isMobile ? (
				<button onClick={toggleSide} className='hamburger'>
					=
				</button>
			) : (
				<div className={'links'}>
					<Link
						to='/'
						activeClassName='linkActive'
						className='link'
						getProps={isActive}>
						HOME
					</Link>
					<Link
						to='/about'
						activeClassName='linkActive'
						className='link'>
						ABOUT
					</Link>
					<Link
						to='/services'
						activeClassName='linkActive'
						className='link'>
						SERVICES
					</Link>
					<Link
						to='/suburbs'
						activeClassName='linkActive'
						className='link'>
						SUBURBS
					</Link>
					<Link
						to='/orders'
						activeClassName='linkActive'
						className='link'>
						ORDERS
					</Link>
					<Link
						to='/milkstory'
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
			)}
			{sideBar && isMobile ? (
				<>
					<div className='barOverlay' onClick={toggleSide}></div>
					<div className={'mobileLinks'}>
						<Link
							to='/'
							activeClassName='linkActive'
							className='link'
							getProps={isActive}>
							HOME
						</Link>
						<Link
							to='/about'
							activeClassName='linkActive'
							className='link'>
							ABOUT
						</Link>
						<Link
							to='/services'
							activeClassName='linkActive'
							className='link'>
							SERVICES
						</Link>
						<Link
							to='/suburbs'
							activeClassName='linkActive'
							className='link'>
							SUBURBS
						</Link>
						<Link
							to='/milkstory'
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
				</>
			) : (
				<></>
			)}
		</nav>
	);
};

export default Header;
