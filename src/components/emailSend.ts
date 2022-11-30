import mailjs from '@emailjs/browser';

const sendEmail = (
	email: string,
	name: string,
	phone: string,
	content: string,
	location: string
) => {
	mailjs.init('gCDHQY1YCE3TRanAM');

	mailjs.send('service_cjh4ubp', 'template_ym6v99j', {
		from_name: name,
		customer_email: email,
		message: content,
		phone_number: phone,
		location: location,
	});
};

export default sendEmail;
