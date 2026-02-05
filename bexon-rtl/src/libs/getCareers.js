import careers from "../../public/fakedata/careers.json";

const getCareers = () => {
	// Ensure we always return an array, even if careers is undefined/null
	if (!careers || !Array.isArray(careers)) {
		return [];
	}
	return careers;
};

export default getCareers;
