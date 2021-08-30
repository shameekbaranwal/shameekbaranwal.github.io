import { useEffect, useState } from 'react';

export const useTypedText = () => {
	const texts = [
		'Shameek Kumar Baranwal',
		'Front-End Web Developer',
		'Freelancer',
		'Computer Science Sophomore at BITS Pilani',
	];

	const [index, setIndex] = useState(0);
	const [visibleChars, setVisibleChars] = useState(0);
	const [typedText, setTypedText] = useState('');

	useEffect(() => {
		setTimeout(() => {
			if (texts[index].length >= visibleChars + 1) {
				setVisibleChars(visibleChars + 1);
			} else {
				setTimeout(() => {
					setVisibleChars(0);
					setIndex((index + 1) % 4);
				}, 2500);
			}

			setTypedText(texts[index].slice(0, visibleChars));
		}, 100);

		return () => {}; // eslint-disable-next-line
	}, [visibleChars, index]);

	//the second returned value is a boolean that determines whether to say "Hi, I'm" or "Hi, I'm a" in the text above the typed text.
	return [typedText, index === 0];
};
