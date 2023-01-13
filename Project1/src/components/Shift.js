import { useState } from 'react';

export const Shift = () => {
	const [change, setChange] = useState(false);
	const changeBtn = () => {
		setChange(!change);
	};

	return (
		<button onClick={changeBtn}>{change ? 'Light Theme' : 'Dark Theme'}</button>
	);
};
