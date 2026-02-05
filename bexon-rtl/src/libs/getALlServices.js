import services from "../../public/fakedata/services.json";

const getALlServices = () => {
  // Ensure we always return an array, even if services is undefined/null
  if (!services || !Array.isArray(services)) {
    return [];
  }
  return services;
};

export default getALlServices;
