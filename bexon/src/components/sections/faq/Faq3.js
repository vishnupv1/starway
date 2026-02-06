import FaqItem2 from "@/components/shared/faq/FaqItem2";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";

const Faq3 = () => {
	const items = [
		{
			title: "What services does Bexon offer to clients?",
			desc: "Bexon offers comprehensive digital marketing and customer experience solutions including SEO services, social media marketing, Google My Business optimization, content marketing, web design & development, and email marketing. We specialize in transforming customer interactions into meaningful experiences that drive loyalty, satisfaction, and sustainable growth for businesses worldwide.",
			initActive: true,
		},
		{
			title: "How do I get started with Bexon's services?",
			desc: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your business goals, current challenges, and how our customer experience solutions can help. We'll analyze your needs and create a customized strategy tailored to your specific requirements.",
			initActive: false,
		},
		{
			title: "How do you ensure the success of a project?",
			desc: "We ensure project success through data-driven strategies, regular communication, and continuous optimization. Our team follows proven methodologies, conducts thorough analysis, and provides detailed monthly reports tracking key metrics. We maintain transparent communication throughout the process, ensuring quality control, timely delivery, and measurable ROI results.",
			initActive: false,
		},
		{
			title: "How long will it take to see results from SEO and digital marketing services?",
			desc: "SEO results typically begin to show within 3-6 months, while PPC campaigns can generate immediate results. Content marketing and social media efforts build momentum over time. We provide detailed timelines during our initial consultation based on your specific goals, industry, and current online presence. Our team sets realistic expectations and keeps you informed of progress throughout the journey.",
			initActive: false,
		},
		{
			title: "Can I track the progress of my project?",
			desc: "Absolutely! We provide comprehensive monthly reports with detailed analytics, including keyword rankings, organic traffic growth, conversion metrics, and customer satisfaction improvements. You'll have access to a dedicated dashboard and regular check-ins with your account manager to review progress, discuss strategies, and make data-driven adjustments to optimize performance.",
			initActive: false,
		},
	];
	return (
		<section className="tj-faq-section section-gap section-separator">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
								<i className="tji-box"></i>Common Questions
							</span>
							<h2 className="sec-title title-anim">
								Need <span>Help?</span> Start Here...
							</h2>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<BootstrapWrapper>
								<div className="accordion tj-faq pt-0" id="faqTwo">
									{items?.length
										? items?.map((item, idx) => (
												<FaqItem2 key={idx} item={item} idx={idx} />
										  ))
										: ""}
								</div>
							</BootstrapWrapper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq3;
