const smoothScroll = (sectionId: string): void => {
	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });

		const offset = 70;
		const yOffset = -offset;
		const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

		window.scrollTo({ top: y, behavior: 'smooth' });
	}
};

export default smoothScroll;
