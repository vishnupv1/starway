import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Link from "next/link";

const About8 = () => {
	return (
		<section className="h9-about-section section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-8 h9-sec-heading">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								About our company
							</span>
							<h2
								className="sec-title title-highlight wow fadeInUp"
								data-wow-delay=".3s"
							>
								<span>Our Story</span> Begins with Data Driven Strategies,
								Powered by SEO Excellence, and Fueled by Performance Marketing
								and Measurable ROI Results.
							</h2>
						</div>
						<div className="h9-about-area">
							<div
								className="about-img-area h9-about-img wow fadeInLeft"
								data-wow-delay=".3s"
							>
								<div className="about-img overflow-hidden">
									<img
										data-speed=".8"
										src="/images/about/growth.webp"
										alt=""
									/>
								</div>
								<div className="box-area">
									<div
										className="author-info wow fadeInUp"
										data-wow-delay=".3s"
									>
										<h4 className="title">Dedicatedly</h4>
										<span className="designation">Delivering exceptional experiences</span>
									</div>
								</div>
							</div>
							<div className="h9-about-content">
							<p className="desc wow fadeInUp" data-wow-delay=".4s" style={{ textAlign: 'left' }}>
								We recognize that exceptional digital marketing strategies are at the
								heart of every successful online business. Our Digital Marketing
								Solutions are crafted to help you transform your online presence
								through comprehensive SEO optimization, targeted PPC campaigns,
								and strategic content marketing. We believe that understanding your
								audience journey and delivering data-driven, conversion-focused
								strategies can significantly enhance brand visibility, lead generation,
								and measurable business growth.
							</p>
								<div
									className="h9-about-funfact wow fadeInUp"
									data-wow-delay=".6s"
								>
								<div className="countup-item">
									<FunfactSingle currentValue={20} symbol={"M"} />
									<span className="count-text">
										Customers Served Worldwide with exceptional experiences.
									</span>
								</div>
								<div className="countup-item">
									<FunfactSingle currentValue={8.5} symbol={"X"} />
									<span className="count-text">
										Average Customer Satisfaction improvement rate.
									</span>
								</div>
								</div>
								<div
									className="about-btn-area-2 wow fadeInUp"
									data-wow-delay=".7s"
								>
									<ButtonPrimary text={"Learn More"} url={"/about"} />
									<PopupVideo>
										<Link
											className="video-btn video-popup glightbox"
											data-autoplay="true"
											data-vbtype="video"
											data-maxwidth="1200px"
											href="https://www.youtube.com/watch?v=MLpWrANjFbI"
										>
											<span className="play-btn">
												<i className="tji-play"></i>
											</span>
											<span className="video-text">Play our reels</span>
										</Link>
									</PopupVideo>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About8;
