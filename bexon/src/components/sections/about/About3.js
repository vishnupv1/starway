import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
const About3 = ({ type }) => {
	return (
		<section className="tj-about-section-2 section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6 order-lg-1 order-2">
						<div
							className="about-img-area style-2 wow fadeInLeft"
							data-wow-delay=".3s"
						>
							<div className="about-img overflow-hidden">
								<Image
									data-speed=".8"
									src="/images/about/metrics.webp"
									alt=""
									width={591}
									height={639}
								/>
							</div>
							<div className={`box-area ${type === 2 ? "style-2" : ""}`}>
								<div className="progress-box wow fadeInUp" data-wow-delay=".3s">
									<h4 className="title">Customer Success Metrics</h4>
									<ul className="tj-progress-list">
										<li>
											<h6 className="tj-progress-title">Customer Satisfaction</h6>
											<div className="tj-progress">
												<span className="tj-progress-percent">95%</span>
												<div
													className="tj-progress-bar"
													data-percent="95"
												></div>
											</div>
										</li>
										<li>
											<h6 className="tj-progress-title">Experience Improvement</h6>
											<div className="tj-progress">
												<span className="tj-progress-percent">88%</span>
												<div
													className="tj-progress-bar"
													data-percent="88"
												></div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						<div className="about-content-area">
							<div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Get to Know Us
								</span>
								<h2 className="sec-title title-anim">
									{type === 2 ? (
										<>
											Transforming Customer Experiences Through Innovation
											and Strategic Solutions <span>Worldwide.</span>
										</>
									) : (
										"Transforming Customer Experiences Through Innovation and Strategic Solutions Worldwide."
									)}
								</h2>
							</div>
						</div>
						<div className="about-bottom-area">
							<div
								className="mission-vision-box wow fadeInLeft"
								data-wow-delay=".5s"
							>
								<h4 className="title">Our Mission</h4>
								<p className="desc">
									Our mission is to empower businesses by transforming every
									customer interaction into meaningful experiences that drive
									loyalty, satisfaction, and sustainable growth.
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-list"></i>Customer-Centric Excellence
									</li>
									<li>
										<i className="tji-list"></i>Data-Driven Solutions
									</li>
									<li>
										<i className="tji-list"></i>Seamless Experiences
									</li>
								</ul>
							</div>
							<div
								className="mission-vision-box wow fadeInRight"
								data-wow-delay=".5s"
							>
								<h4 className="title">Our Vision</h4>
								<p className="desc">
									Our vision is to become the global leader in customer
									experience solutions, setting new standards for how businesses
									connect with and delight their customers.
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-list"></i>Experience Leadership
									</li>
									<li>
										<i className="tji-list"></i>Customer Journey Excellence
									</li>
									<li>
										<i className="tji-list"></i>Long-Term Partnerships
									</li>
								</ul>
							</div>
						</div>
						<div className="about-btn-area wow fadeInUp" data-wow-delay=".5s">
							<ButtonPrimary text={"Learn More About Us"} url={"/about"} />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default About3;
