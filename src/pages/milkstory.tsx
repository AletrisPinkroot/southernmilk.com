import React from 'react';
import Header from '../components/Header';
import { StaticImage } from 'gatsby-plugin-image';
import Footer from '../components/Footer';

const StoryOfMilk: React.FC = () => {
	// geet better pictures obv
	return (
		<div>
			<Header />
			<div className='splashSection'>
				<StaticImage
					src='../images/tempsplash.jpg'
					alt='temp'
					className='splash half'
				/>
				<div className='splashText quarter'>
					<h1>Milk Story</h1>
				</div>
			</div>

			<div className='splitSection'>
				<div className='splitText'>
					<h2>Step 1: Cows Grazing</h2>
					<p>
						Typically cows spend about 8 hours eating, 8 hours
						sleeping and 8 hours ruminating or chewing their cud.
						Cows are usually provided with a fresh paddock of grass
						in the morning after milking and another fresh paddock
						of grass in the evening after milking. They may also be
						fed some grain in the dairy while being milked and Hay
						or Silage (conserved forage) if there is not enough
						grass available.
					</p>
				</div>
				<div className='splitImage small'>
					<StaticImage src='../images/step1.jpg' alt='Cows Grazing' />
				</div>
			</div>
			<div className='splitSection reverse blue'>
				<div className='splitText'>
					<h2>Step 2: Harvesting Milk</h2>
					<p>
						Cows are normally milked 2 times per day, however some
						high producing herds are milked 3 times per day.
						Normally cows are milked at about 6 am in the morning
						and again at about 5 pm in the evening. Milking time
						takes about 5 minutes per cow but depends on the type of
						machine and the amount of milk the cow is producing.
						Most dairies have enough machines to milk 20 to 40 cows
						at one time, reducing the amount of time the cows wait
						to be milked. Milking machines mimic the action of a
						young calf by creating a pulsating vacuum around the
						teat, which causes the milk to be released from the
						udder.
					</p>
				</div>
				<div className='splitImage small'>
					<StaticImage src='../images/step2.jpg' alt='Cows Grazing' />
				</div>
			</div>
			<div className='splitSection'>
				<div className='splitText'>
					<h2>Step 3: Storing Milk</h2>
					<p>
						Milk storage vats or silos are refrigerated and come in
						various shapes and sizes. Milk is stored on farm at 4
						degrees Celsius and less for no longer than 48 hours.
						Vats and silos are agitated to make sure that the entire
						volume remains cold and milkfat does not separate from
						the milk. After milk has been collected, storage vats
						and stainless steel pipes are thoroughly cleaned before
						the farmer milks again.
					</p>
				</div>
				<div className='splitImage small'>
					<StaticImage src='../images/step3.jpg' alt='Cows Grazing' />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export const Head = () => {
	return (
		<>
			<title>Milk Story | Southern Milk Supplies</title>
			<meta
				name='description'
				content='The story of milk: southern milk supplies'
			/>
		</>
	);
};
export default StoryOfMilk;
