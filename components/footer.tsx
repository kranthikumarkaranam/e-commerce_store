const Footer = () => {
	return (
		<footer className='bg-white border-t'>
			<div className='mx-auto py-10'>
				<p className='text-center text-xs text-black'>
					Copyright &copy;{'\u00A0'}
					{new Date().getFullYear() > 2023
						? `2023-${new Date().getFullYear().toString().slice(-2)}`
						: '2023'}
					{'\u00A0'}
					STORE, Inc. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
