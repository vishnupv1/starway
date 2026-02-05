import Link from "next/link";

const ServiceCard10 = ({ service, idx, lastItemIdx }) => {
	const {
		title,
		desc3,
		id,
		totalProject,
		img5 = "/images/service/h9-service-1.webp",
		svg,
		iconName,
	} = service || {};

	return (
		<div className="service-item style-5 tj-progress-item">
			<div className="service-content-area">
				<div className="service-icon">
					<i className={iconName}></i>
				</div>
				<div className="service-content">
					<h4 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h4>
					<p className="desc">{desc3}</p>
				</div>
				<Link href={`/services/${id}`} className="h9-service-nav">
					<i className="tji-arrow-right-long"></i>
				</Link>
			</div>
			<div className="service-img">
				<img src={img5} alt="" />
			</div>
		</div>
	);
};

export default ServiceCard10;
