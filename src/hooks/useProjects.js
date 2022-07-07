import { useEffect, useState } from 'react';

export default function useProjects(unsorted) {
	const [projects, setProjects] = useState(unsorted);
	const [sortedBy, setSortedBy] = useState('');

	const sortByRelevance = () => {
		setProjects(p => p.sort((a, b) => b.relevance - a.relevance));
		setSortedBy('Sort By Relevance');
	};

	const sortByDate = () => {
		setProjects(p => p.sort((a, b) => new Date(b.date) - new Date(a.date)));
		setSortedBy('Sort By Date');
	};

	useEffect(() => {
		if (sortedBy === '') sortByRelevance();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { projects, sortByDate, sortByRelevance, sortedBy };
}
