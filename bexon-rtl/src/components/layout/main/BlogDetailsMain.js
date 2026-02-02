import BlogDetailsPrimary from "@/components/sections/blogs/BlogDetailsPrimary";
import HeroInner from "@/components/sections/hero/HeroInner";
import getBlogs from "@/libs/getBlogs";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
const BlogDetailsMain = ({ currentItemId }) => {
	const items = getBlogs();
	const currentId = currentItemId;
	const option = getPreviousNextItem(items, currentId);
	const { title } = option?.currentItem || {};
	return (
		<div>
			<HeroInner
				title={"تفاصيل المدونة"}
				text={title ? title : "تفاصيل المدونة"}
				breadcrums={[{ name: "المدونة", path: "/blogs" }]}
			/>
			<BlogDetailsPrimary option={option} />
		</div>
	);
};

export default BlogDetailsMain;
