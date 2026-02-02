import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: ">حلول مبتكرة",
			desc: "نبقى في الطليعة باستخدام أحدث التقنيات والاستراتيجيات للحفاظ على قدرتك التنافسية في السوق.",
			icon: "tji-innovative",
		},
		{
			title: "خبرة حائزة على جوائز",
			desc: "معترف بنا من قبل قادة الصناعة، فريقنا الحائز على جوائز يمتلك سجلًا حافلًا في تحقيق التميز.",
			icon: "tji-award",
		},
		{
			title: "دعم مخصص",
			desc: "فريقنا متواجد دائمًا لمعالجة استفساراتك وتقديم حلول سريعة وفعالة لاستمرارية أعمالك.",
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
									<i className="tji-box"></i>اختر الأفضل
								</span>
								<div className="heading-wrap-content">
									<div className="sec-heading">
										<h2 className="sec-title title-anim">
											تمكين الأعمال من خلال <span>الخبرة.</span>
										</h2>
									</div>
									<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
										<ButtonPrimary text="طلب مكالمة" url="/contact" />
									</div>
								</div>
							</div>
						) : (
							<div className="sec-heading text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>اختر الأفضل
								</span>
								<h2 className="sec-title title-anim">
									تمكين الأعمال من خلال <span>الخبرة.</span>
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
