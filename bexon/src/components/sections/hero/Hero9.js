"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";
import { useState } from "react";

const Hero9 = () => {
	const [isLightHero, setIsLightHero] = useState(false);

	return (
		<section className="h9-hero">
			<div
				className={`h9-hero-inner${
					isLightHero ? " h9-hero-inner--light" : " h9-hero-inner--dark"
				}`}
			>
				<div
					className="h9-hero-bg-image"
					style={{ backgroundImage: "url('/images/hero/home_horizontal.jpeg')" }}
				></div>
				<div className="h9-hero-item-wrapper">
					<div className="h9-hero-content">
						<h1 className="h9-hero-title text-anim">
							Grow{" "}
							<span
								className="wow fadeInLeft"
								data-wow-delay="0.3s"
								onClick={() => setIsLightHero((prev) => !prev)}
								role="button"
								aria-label={
									isLightHero ? "Switch to dark hero background" : "Switch to light hero background"
								}
							></span>{" "}
							Your Digital Presence.
						</h1>
						<div className="h9-hero-desc-area">
							<h4 className="title wow fadeInUp" data-wow-delay="0.5s">
								Solutions That Scale.
							</h4>
							<div className="desc-inner wow fadeInUp" data-wow-delay="0.7s">
								<p className="desc">
									We’re a performance-driven digital marketing agency helping
									brands grow with{" "}
									<Link href="/portfolios">proven campaigns</Link> in SEO, paid
									ads, and social media. From strategy to execution, we focus on
									clicks that actually convert.
								</p>
								<ButtonPrimary text={"Get Started"} url={"/contact"} />
							</div>
						</div>
						<div className="h9-hero-social wow fadeInUp" data-wow-delay="0.9s">
							<div className="social-links style-3">
								<ul>
									<li>
										<Link href="https://www.facebook.com/" target="_blank">
											<i className="fa-brands fa-facebook-f"></i>
										</Link>
									</li>
									<li>
										<Link href="https://www.instagram.com/" target="_blank">
											<i className="fa-brands fa-instagram"></i>
										</Link>
									</li>
									<li>
										<Link href="https://x.com/" target="_blank">
											<i className="fa-brands fa-x-twitter"></i>
										</Link>
									</li>
									<li>
										<Link href="https://www.linkedin.com/" target="_blank">
											<i className="fa-brands fa-linkedin-in"></i>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* <div
						className="h9-hero-img  img-parallax wow fadeInUp"
						data-wow-delay="0.9s"
					>
						<img src="/images/hero/pro_home.png" alt="" />
					</div> */}
				</div>
			</div>
			<div
				className="h7-hero-shape h9-hero-shape-1 wow fadeInUpBig"
				data-wow-delay="1s"
			>
				<img
					className="tj-anim-move-var-big"
					src="/images/hero/bubble.png"
					alt=""
					style={{ opacity: 0.2	}}

				/>
			</div>
			<div
				className="h7-hero-shape h9-hero-shape-2 wow fadeInDownBig"
				data-wow-delay="1.2s"
			>
				<img
					className="tj-anim-move-var-big-reverse"
					src="/images/hero/bubble.png"
					alt=""
					style={{ opacity: 0.2 }}
				/>
			</div>
		</section>
	);
};

export default Hero9;
