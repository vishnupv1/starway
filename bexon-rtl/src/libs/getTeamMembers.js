import teamMembers from "../../public/fakedata/team-members.json";

const getTeamMembers = () => {
	// Ensure we always return an array, even if teamMembers is undefined/null
	if (!teamMembers || !Array.isArray(teamMembers)) {
		return [];
	}
	return teamMembers;
};

export default getTeamMembers;
