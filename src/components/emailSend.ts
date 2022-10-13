import mailjs from '@emailjs/browser';

const sendEmail = (
	email: string,
	businessName: string,
	phoneNumber: string,
	content: string,
	location: string
) => {
	mailjs.init('gCDHQY1YCE3TRanAM');

	mailjs.send('service_cjh4ubp', 'template_ym6v99j', {
		from_name: businessName,
		customer_email: email,
		message: content,
		phone_number: phoneNumber,
		location: location,
	});

	console.log('sent?');
};

export default sendEmail;
