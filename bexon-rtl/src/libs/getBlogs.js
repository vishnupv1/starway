import blogs from "../../public/fakedata/blogs.json";

const getBlogs = () => {
  // Ensure we always return an array, even if blogs is undefined/null
  if (!blogs || !Array.isArray(blogs)) {
    return [];
  }
  return blogs;
};

export default getBlogs;
