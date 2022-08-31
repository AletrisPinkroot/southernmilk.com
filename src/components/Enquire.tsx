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
				<form action='submit' className='enquiryForm'>
					<div className='enquiryInput'>
						<label htmlFor='email'>Email</label>
						<input type='email' name='email' id='email' />
					</div>
					<div className='enquiryInput'>
						<label htmlFor='name'>Business Name</label>
						<input type='text' name='name' id='name' />
					</div>
					<div className='enquiryInput'>
						<label htmlFor='phone'>Phone Number</label>
						<input type='tel' name='phone' id='phone' />
					</div>
					<div className='enquiryInput'>
						<label htmlFor='content'>Description</label>
						<input type='text' name='content' id='content' />
					</div>
				</form>
			</div>
		</Popup>
	);
};

export { EnquireBox };
