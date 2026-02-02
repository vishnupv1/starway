import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1 }) => {
	const items = [
		{
			title: "ما الخدمات التي تقدمها Bexon للعملاء؟",
			desc: "البدء سهل! ما عليك سوى التواصل معنا من خلال نموذج الاتصال الخاص بنا أو الاتصال بنا، وسنحدد موعدًا لاستشارة لمناقشة مشروعك وكيف يمكننا مساعدتك بأفضل شكل. فريقنا يبقيك على اطلاع طوال العملية، مع ضمان مراقبة الجودة والتسليم في الوقت المحدد.",
			initActive: true,
		},
		{
			title: "كيف أبدأ مع الأعمال التجارية للشركات؟",
			desc: "البدء سهل! ما عليك سوى التواصل معنا من خلال نموذج الاتصال الخاص بنا أو الاتصال بنا، وسنحدد موعدًا لاستشارة لمناقشة مشروعك وكيف يمكننا مساعدتك بأفضل شكل. فريقنا يبقيك على اطلاع طوال العملية، مع ضمان مراقبة الجودة والتسليم في الوقت المحدد.",
			initActive: false,
		},
		{
			title: "كيف تضمن نجاح المشروع؟",
			desc: "البدء سهل! ما عليك سوى التواصل معنا من خلال نموذج الاتصال الخاص بنا أو الاتصال بنا، وسنحدد موعدًا لاستشارة لمناقشة مشروعك وكيف يمكننا مساعدتك بأفضل شكل. فريقنا يبقيك على اطلاع طوال العملية، مع ضمان مراقبة الجودة والتسليم في الوقت المحدد.",
			initActive: false,
		},
		{
			title: "كم من الوقت سيستغرق إكمال مشروعي؟",
			desc: "البدء سهل! ما عليك سوى التواصل معنا من خلال نموذج الاتصال الخاص بنا أو الاتصال بنا، وسنحدد موعدًا لاستشارة لمناقشة مشروعك وكيف يمكننا مساعدتك بأفضل شكل. فريقنا يبقيك على اطلاع طوال العملية، مع ضمان مراقبة الجودة والتسليم في الوقت المحدد.",
			initActive: false,
		},
		{
			title: "هل يمكنني تتبع تقدم مشروعي؟",
			desc: "البدء سهل! ما عليك سوى التواصل معنا من خلال نموذج الاتصال الخاص بنا أو الاتصال بنا، وسنحدد موعدًا لاستشارة لمناقشة مشروعك وكيف يمكننا مساعدتك بأفضل شكل. فريقنا يبقيك على اطلاع طوال العملية، مع ضمان مراقبة الجودة والتسليم في الوقت المحدد.",
			initActive: false,
		},
	];

	return (
		<section
			className={`tj-faq-section section-gap  ${
				type === 3 || type === 4 ? "" : "tj-arrange-container-2"
			}`}
		>
			<div className="container">
				<div className="row justify-content-between">
					{type === 3 ? (
						<div className="col-lg-4">
							<div className="content-wrap">
								<div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Common Questions
									</span>
									<h2 className="sec-title title-anim">
										Need <span>Help?</span> Start Here...
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									We stay ahead of curve, leveraging <br /> cutting-edge are
									technologies and <br /> strategies to competitive
								</p>
								<div className="wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Request a Call"} url={"/contact"} />
								</div>
							</div>
						</div>
					) : (
						<div className="col-lg-6">
							<div
								className={`faq-img-area ${
									type === 3 ? "" : "tj-arrange-item-2"
								}`}
							>
								<div className="faq-img overflow-hidden">
									<Image
										src="/images/faq/faq.webp"
										alt=""
										width={585}
										height={629}
									/>
									<h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
										هل تحتاج إلى مساعدة؟ ابدأ من هنا...
									</h2>
								</div>
								<div className="box-area ">
									<div className="call-box">
										<h4 className="title">هل تريد مكالمة مجانية للبدء؟ </h4>
										<span className="call-icon">
											<i className="tji-phone"></i>
										</span>
										<Link className="number" href="tel:18884521505">
											<span>1-888-452-1505</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
							<div
								className={`accordion tj-faq ${
									type === 2 || type === 4 ? "style-2" : ""
								} ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
								id="faqOne"
							>
								{items?.length
									? items?.map((item, idx) => (
											<FaqItem key={idx} item={item} idx={idx} />
									  ))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq2;
