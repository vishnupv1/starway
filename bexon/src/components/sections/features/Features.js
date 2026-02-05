import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: "Customer Journey Optimization",
			desc: "We map and optimize every touchpoint of your customer journey, ensuring seamless experiences that drive engagement, loyalty, and satisfaction at every interaction. From first contact to post-purchase support, we create cohesive experiences that delight customers.",
			icon: "tji-innovative",
		},
		{
			title: "Data-Driven Insights",
			desc: "Leverage advanced analytics and customer data to understand behavior patterns, identify opportunities, and make informed decisions that enhance customer satisfaction. Our insights help you anticipate needs and exceed expectations.",
			icon: "tji-award",
		},
		{
			title: "Personalized Experiences",
			desc: "Create tailored customer experiences that resonate with your audience, building stronger relationships and increasing customer lifetime value. We help you deliver the right message, at the right time, through the right channel.",
			icon: "tji-support",
		},
	];

	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{type == 2 ? (
							<div className="sec-heading-wrap">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Why Choose Us
								</span>
								<div className="heading-wrap-content">
									<div className="sec-heading">
										<h2 className="sec-title title-anim">
											Elevating Customer Experiences with <span>Expert Solutions.</span>
										</h2>
									</div>
									<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
										<ButtonPrimary text="Get Started Today" url="/contact" />
									</div>
								</div>
							</div>
						) : (
							<div className="sec-heading text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Why Choose Us
								</span>
								<h2 className="sec-title title-anim">
									Elevating Customer Experiences with <span>Expert Solutions.</span>
								</h2>
							</div>
						)}
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					{features.map((feature, idx) => (
						<div key={idx} className="col-lg-4">
							<FeatureCard feature={feature} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Features;
