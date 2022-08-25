import React from 'react';
import '../components/main.css';
import '../components/Enquire.css';
import Popup from 'reactjs-popup';

const EnquireBox: React.FC = () => {
	return (
		<Popup
			trigger={<button className='enquireButton'>ENQUIRE</button>}
			modal
			nested>
			<div className='enquirePopup'>
				<h1>Make an Enquiry</h1>
				<form action="submit">
					<input type="email" name="Your Email" id="email" />
					<input type="text" name="Business Name" id="name" />
					<input type="tel" name="Phone Number" id="phone number" />
					<input type="text" name="Content" id="content" />
				</form>
			</div>
		</Popup>
	);
};

export { EnquireBox };
