import products from "../../public/fakedata/products.json";

const getProducts = () => {
	// Ensure we always return an array, even if products is undefined/null
	if (!products || !Array.isArray(products)) {
		return [];
	}
	return products;
};

export default getProducts;
