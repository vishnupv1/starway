"use client";
import makePath from "@/libs/makePath";
import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogSingle = ({ blog, idx }) => {
	const {
		id,
		detailsImg,
		img = "/images/blog/blog-1.webp",
		title,
		desc,
		blogTopList,
		category,
		slider,
		author,
		popupVideo,
		day,
		month,
		date,
		comments,
	} = blog ? blog : {};

	return (
		<article
			className="blog-item wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.1)}
		>
			<div className="blog-thumb">
				<Link href={`/blogs/${id}`}>
					<Image src={img} alt="" width={870} height={450} />
				</Link>
				<div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div>
			</div>
			<div className="blog-content">
				<div className="blog-meta">
					<span className="categories">
						<Link href={`/blogs?category=${makePath(category)}`}>
							{category}
						</Link>
					</span>
					<span>
						بواسطة <Link href={`/blogs/${id}`}>إلينين لوما</Link>
					</span>
				</div>
				<h3 className="title">
					<Link href={`/blogs/${id}`}>{title}</Link>
				</h3>
				<p className="desc">
					في بيئة الأعمال السريعة اليوم، يكمن مفتاح التفوق على المنافسين في تبني
					الابتكار. في [اسم الشركة]، نحن متخصصون في إطلاق الإمكانات الكاملة
					لعملك من خلال تقديم حلول مخصصة ورؤى مستقبلية تعزز النمو والكفاءة
					والنجاح المستدام
				</p>
				<ButtonPrimary
					text={"اقرأ المزيد"}
					url={`/blogs/${id}`}
					isTextBtn={true}
				/>
			</div>
		</article>
	);
};

export default BlogSingle;
