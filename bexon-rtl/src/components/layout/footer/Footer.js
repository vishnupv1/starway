import Link from "next/link";

const Footer = () => {
	return (
		<footer className="tj-footer-section footer-1 section-gap-x">
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/logo.webp" alt="Logos" />
									</Link>
								</div>
								<div className="footer-text">
									<p>
										تطوير رحلات العملاء الشخصية لزيادة الرضا والولاء لتوسعنا.
									</p>
								</div>
								<div className="award-logo-area">
									<div className="award-logo">
										<img src="/images/footer/award-logo-1.webp" alt="" />
									</div>
									<div className="award-logo">
										<img src="/images/footer/award-logo-2.webp" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">الخدمات</h5>
								<ul>
									<li>
										<Link href="/services/1">تجربة العملاء</Link>
									</li>
									<li>
										<Link href="/services/2">برامج التدريب</Link>
									</li>
									<li>
										<Link href="/services/3">استراتيجية الأعمال</Link>
									</li>
									<li>
										<Link href="/services/4">برنامج التدريب</Link>
									</li>
									<li>
										<Link href="/services/5">الاستشارات ESG</Link>
									</li>
									<li>
										<Link href="/services/6">مركز التطوير</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">الموارد</h5>
								<ul>
									<li>
										<Link href="/contact">اتصل بنا</Link>
									</li>
									<li>
										<Link href="/team">أعضاء الفريق</Link>
									</li>
									<li>
										<Link href="#">الجوائز</Link>
									</li>
									<li>
										<Link href="/careers">
											الوظائف <span className="badge">جديد</span>
										</Link>
									</li>
									<li>
										<Link href="/blogs">الأخبار</Link>
									</li>
									<li>
										<Link href="#">التعليقات</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-4 col-lg-5 col-md-6">
							<div
								className="footer-widget widget-subscribe wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h3 className="title">اشترك في نشرتنا الإخبارية.</h3>
								<div className="subscribe-form">
									<form action="#">
										<input
											type="email"
											name="email"
											placeholder="Enter email"
										/>
										<button type="submit">
											<i className="tji-plane"></i>
										</button>
										<label htmlFor="agree">
											<input id="agree" type="checkbox" />
											أوافق على{" "}
											<Link href="/terms-and-conditions">الشروط والأحكام؟</Link>
										</label>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="footer-contact">
									<ul>
										<li>
											<Link href="tel:10095447818">
												<span className="icon">
													<i className="tji-phone-2"></i>
												</span>
												<span className="text">+1 (009) 544-7818</span>
											</Link>
										</li>
										<li>
											<Link href="mailto:info@bexon.com">
												<span className="icon">
													<i className="tji-envelop-2"></i>
												</span>
												<span className="text">info@bexon.com</span>
											</Link>
										</li>
									</ul>
								</div>
								<div className="social-links">
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
								<div className="copyright-text">
									<p>
										&copy; 2025 
										<Link
											href="https://themeforest.net/user/theme-junction/portfolio"
											target="_blank"
										>
											Bexon
										</Link>{" "}
										جميع الحقوق محفوظة
									</p>
								</div>
							</div>
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
		</footer>
	);
};

export default Footer;
