import React from 'react';
import '../components/main.css';
import '../components/Enquire.css';
import Popup from 'reactjs-popup';
import sendEmail from './emailSend';

const EnquireBox: React.FC<{ suburb?: string }> = (props: any) => {
	const [formData, setFormData] = React.useState({
		email: '',
		name: '',
		phone: '',
		location: props.suburb,
		content: '',
	});
	const submitForm = (event: React.FormEvent) => {
		event.preventDefault();
		sendEmail(
			formData.email,
			formData.name,
			formData.phone,
			formData.content,
			formData.location
		);
		handleSubmitChanges();
	};

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
			<button
				className='enquireButton'
				onClick={() => {
					setSubmitted(false);
					setOpen(!open);
				}}>
				ENQUIRE
			</button>
			<Popup modal open={open} nested onClose={closeBox}>
				<div className='enquirePopup'>
					<a
						onClick={closeBox}
						style={{
							cursor: 'pointer',
							backgroundColor: 'blue',
							color: 'white',
							padding: '5px',
							borderRadius: '50%',
						}}>
						X
					</a>
					<h1>Make an Enquiry</h1>
					{!submitted ? (
						<form className='enquiryForm' onSubmit={submitForm}>
							<div className='enquiryInput'>
								<label htmlFor='email'>Email</label>
								<input
									required
									type='email'
									name='email'
									id='email'
									onChange={handleInput}
								/>
							</div>
							<div className='enquiryInput'>
								<label htmlFor='name'>Business Name</label>
								<input
									required
									type='text'
									name='name'
									id='name'
									onChange={handleInput}
								/>
							</div>
							<div className='enquiryInput'>
								<label htmlFor='phone'>Phone Number</label>
								<input
									required
									type='tel'
									name='phone'
									id='phone'
									onChange={handleInput}
								/>
							</div>
							<div className='enquiryInput'>
								<label htmlFor='location'>Suburb</label>
								<input
									type='text'
									name='location'
									id='location'
									value={props.suburb}
									onChange={handleInput}></input>
							</div>
							<div className='enquiryInput'>
								<label htmlFor='content'>Description</label>
								<textarea
									required
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
						<p className='submitText'>Submitted!</p>
					)}
				</div>
			</Popup>
		</>
	);
};

export { EnquireBox };
