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
				<h1>ENQUIRY!!!</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptates, porro? Deleniti itaque perspiciatis illum quo
					eveniet dolorum dolor, odit voluptatibus repudiandae,
					cupiditate similique. Temporibus, aspernatur repellat
					blanditiis magnam consequatur optio voluptates molestiae
					odit eos ratione sunt consequuntur! Itaque qui esse nulla
					facere sit, repellendus tempora perspiciatis ullam alias,
					sapiente quam.
				</p>
			</div>
		</Popup>
	);
};

export { EnquireBox };
