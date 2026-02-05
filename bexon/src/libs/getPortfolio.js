import portfolio from "../../public/fakedata/portfolio.json";

const getPortfolio = () => {
  // Ensure we always return an array, even if portfolio is undefined/null
  if (!portfolio || !Array.isArray(portfolio)) {
    return [];
  }
  return portfolio;
};

export default getPortfolio;
