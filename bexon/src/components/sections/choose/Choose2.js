import Link from "next/link";

const Choose2 = () => {
	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-8 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Choose the Best
							</span>
							<h2 className="sec-title title-anim">
								Empowering Brands with Performance-Driven Solutions.
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					<div className="col-md-6 col-lg-4">
						<div className="choose-box customers-box h9-choose-box right-swipe">
							<h4 className="title">
							Providing performance-driven digital marketing solutions.
							</h4>
							<div className="customers-inner">
								<div className="customers">
									<ul>
										<li className="wow fadeInLeft" data-wow-delay=".5s">
											<div className="avatar" style={{
												width: '50px',
												height: '50px',
												borderRadius: '50%',
												backgroundColor: '#6366f1',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: '#fff',
												fontWeight: '600',
												fontSize: '18px'
											}}>JD</div>
										</li>
										<li className="wow fadeInLeft" data-wow-delay=".6s">
											<div className="avatar" style={{
												width: '50px',
												height: '50px',
												borderRadius: '50%',
												backgroundColor: '#8b5cf6',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: '#fff',
												fontWeight: '600',
												fontSize: '18px'
											}}>SM</div>
										</li>
										<li className="wow fadeInLeft" data-wow-delay=".7s">
											<div className="avatar" style={{
												width: '50px',
												height: '50px',
												borderRadius: '50%',
												backgroundColor: '#ec4899',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: '#fff',
												fontWeight: '600',
												fontSize: '18px'
											}}>AR</div>
										</li>
										<li className="wow fadeInLeft" data-wow-delay=".8s">
											<div className="avatar" style={{
												width: '50px',
												height: '50px',
												borderRadius: '50%',
												backgroundColor: '#f59e0b',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: '#fff',
												fontWeight: '600',
												fontSize: '18px'
											}}>KL</div>
										</li>
										<li className="wow fadeInLeft" data-wow-delay=".9s">
											<div className="avatar" style={{
												width: '50px',
												height: '50px',
												borderRadius: '50%',
												backgroundColor: '#10b981',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: '#fff',
												fontWeight: '600',
												fontSize: '18px'
											}}>MR</div>
										</li>
										<li className="wow fadeInLeft" data-wow-delay="1s">
											<div className="avatar" style={{
												width: '50px',
												height: '50px',
												borderRadius: '50%',
												backgroundColor: '#3b82f6',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: '#fff',
												fontWeight: '600',
												fontSize: '18px'
											}}>TS</div>
										</li>
										<li className="wow fadeInLeft" data-wow-delay="1.1s">
											<div className="avatar" style={{
												width: '50px',
												height: '50px',
												borderRadius: '50%',
												backgroundColor: '#ef4444',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: '#fff',
												fontWeight: '600',
												fontSize: '18px'
											}}>AW</div>
										</li>
										<li className="wow fadeInLeft" data-wow-delay="1.2s">
											<div className="avatar" style={{
												width: '50px',
												height: '50px',
												borderRadius: '50%',
												backgroundColor: '#14b8a6',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: '#fff',
												fontWeight: '600',
												fontSize: '18px'
											}}>DP</div>
										</li>
									</ul>
								</div>
								<div className="rating-area">
									<div className="star-ratings">
										<div className="fill-ratings">
											<span>★★★★★</span>
										</div>
										<div className="empty-ratings">
											<span>★★★★★</span>
										</div>
									</div>
								</div>
								<h5 className="customers-text">100+ happy customer.</h5>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4">
						<div className="choose-box h9-choose-box right-swipe">
							<div className="choose-content">
								<div className="choose-icon">
									<i className="tji-award"></i>
								</div>
								<h4 className="title">Award-Winning Expertise</h4>
								<p className="desc">
									Recognized by industry leaders, our award-winning team has a
									proven record of delivering excellence across projects.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div
							className="choose-box h9-choose-box h9-choose-bg right-swipe"
							style={{
								backgroundImage: "url('/images/hero/contact.png')",
							}}
						>
							<div className="choose-content">
								<h4 className="title">Dedicated Support</h4>
								<p className="desc">
									Our team is always available for address expert concerns,
									providing quick and effective solution to keep your business.
								</p>
								<Link className="text-btn" href="/contact">
									<span className="btn-text">
										<span>Contact Us</span>
									</span>
									<span className="btn-icon">
										<i className="tji-arrow-right-long"></i>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Choose2;
