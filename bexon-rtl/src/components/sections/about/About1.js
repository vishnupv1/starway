import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Ratings1 from "@/components/shared/ratings/Ratings1";
import Image from "next/image";
import Link from "next/link";
const About1 = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6 order-lg-1 order-2">
						<div
							className={`about-img-area wow fadeInLeft`}
							data-wow-delay=".2s"
						>
							<div className="about-img overflow-hidden">
								<Image
									data-speed="0.8"
									src="/images/about/about-1.webp"
									alt=""
									width={653}
									height={675}
								/>
							</div>
							<div className="box-area">
								<div
									className="experience-box wow fadeInUp"
									data-wow-delay=".3s"
								>
									<span className="sub-title">الخبرات</span>
									<div className="customers-number">13+</div>
									<h6 className="customers-text">
										عقود من الخبرة، وابتكار بلا حدود
									</h6>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						<div
							className={`about-content-area style-1 wow fadeInLeft`}
							data-wow-delay=".2s"
						>
							<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>تعرف علينا
								</span>
								<h2 className="sec-title title-anim">
									تمكين الشركات من خلال الابتكار، والخبرة، ومن أجل{" "}
									<span>النجاح.</span>
								</h2>
							</div>
							<div className="wow fadeInUp" data-wow-delay=".5s">
								<ButtonPrimary
									text={"تعرف أكثر"}
									url={"/about"}
									isTextBtn={true}
								/>
							</div>
						</div>
						<div className="about-bottom-area">
							<div
								className="client-review-cont wow fadeInUp"
								data-wow-delay=".7s"
							>
								<div className="rating-area">
									<Ratings1 />
								</div>
								<p className="desc">
									نؤمن ببناء علاقات طويلة الأمد مع عملائنا من خلال الثقة،
									والابتكار، والخدمة الاستثنائية.
								</p>
								<div className="client-info-area">
									<div className="client-info">
										<h6 className="title">إيستر هوارد</h6>
										<span className="designation">المؤسسة المشاركة</span>
									</div>
									<span className="quote-icon">
										<i className="tji-quote"></i>
									</span>
								</div>
							</div>
							<div className="video-img  wow fadeInUp" data-wow-delay=".9s">
								<Image
									src="/images/about/about-2.webp"
									alt=""
									width={224}
									height={234}
								/>
								<PopupVideo>
									<Link
										className="video-btn video-popup glightbox"
										href="https://www.youtube.com/watch?v=MLpWrANjFbI&amp;ab_channel=eidelchteinadvogados"
									>
										<span>
											<i className="tji-play"></i>
										</span>
									</Link>
								</PopupVideo>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About1;
