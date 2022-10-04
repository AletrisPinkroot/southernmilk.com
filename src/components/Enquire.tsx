import React from 'react';
import '../components/main.css';
import '../components/Enquire.css';
import Popup from 'reactjs-popup';
import sendEmail from './emailSend';

const EnquireBox: React.FC = () => {
	const handleSubmit = (event: React.FormEvent) => {
		console.log(formData.email);
		event.preventDefault();
		sendEmail(
			formData.email,
			formData.name,
			formData.phone,
			formData.content
		);
		handleSubmitChanges();
	};
	const [formData, setFormData] = React.useState({
		email: '',
		name: '',
		phone: '',
		content: '',
	});

	const [submitted, setSubmitted] = React.useState(false);
	const handleSubmitChanges = () => {
		setSubmitted(true);
	};

	const [open, setOpen] = React.useState(false);
	const closeBox = () => setOpen(false);

	const handleInput = (
		event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const target = event.currentTarget;
		const value = target.value;
		const name: string = target.name;

		const tempState: any = formData;
		tempState[name] = value;

		setFormData(tempState);
	};

	return (
		<>
			<button className='enquireButton' onClick={() => setOpen(!open)}>
				ENQUIRE
			</button>
			<Popup modal open={open} nested onClose={closeBox}>
				<div className='enquirePopup'>
					<h1>Make an Enquiry</h1>
					{!submitted ? (
						<form className='enquiryForm' onSubmit={handleSubmit}>
							<div className='enquiryInput'>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									name='email'
									id='email'
									onChange={handleInput}
								/>
							</div>
							<div className='enquiryInput'>
								<label htmlFor='name'>Business Name</label>
								<input
									type='text'
									name='name'
									id='name'
									onChange={handleInput}
								/>
							</div>
							<div className='enquiryInput'>
								<label htmlFor='phone'>Phone Number</label>
								<input
									type='tel'
									name='phone'
									id='phone'
									onChange={handleInput}
								/>
							</div>
							<div className='enquiryInput'>
								<label htmlFor='content'>Description</label>
								<textarea
									name='content'
									id='content'
									cols={30}
									rows={10}
									onChange={handleInput}></textarea>
							</div>
							<div className='enquiryInput'>
								<button type='submit' id='submit'>
									Submit
								</button>
							</div>
						</form>
					) : (
						<h1>Submitted!</h1>
					)}
				</div>
			</Popup>
		</>
	);
};

export { EnquireBox };
