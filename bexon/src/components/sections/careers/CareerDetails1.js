import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getCareers from "@/libs/getCareers";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
import Link from "next/link";

const CareerDetails1 = ({ currentItemId }) => {
	const items = getCareers();
	const currentId = currentItemId;
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } =
		getPreviousNextItem(items, currentId);
	const { 
		title, 
		iconName, 
		category, 
		need, 
		location, 
		price,
		jobDescription = [],
		requirements = {},
		responsibilities = {},
		jobInformation = {},
		tags = []
	} = currentItem || {};

	return (
		<section className="tj-careers-details section-gap">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-7">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post">
								{/* <!-- top content --> */}
								<div className="tj-careers-top mb-30">
									<div className="tj-careers-top-icon">
										<i className={iconName ? iconName : "tji-manage"}></i>
									</div>
									<div className="tj-careers-top-content">
										<div className="tj-careers-tag">
											<span>{category}</span> <span>{need}</span>
										</div>
										<h3 className="tj-careers-top-title text-anim">{title}</h3>
										<span className="location">
											<i className="tji-location"></i>
											{location}
										</span>
									</div>
								</div>
								{/* <!-- content --> */}
								<div className="tj-entry-content">
									<h4 className="text-anim">Job Description</h4>
									{jobDescription && jobDescription.length > 0 ? (
										jobDescription.map((desc, idx) => (
											<p 
												key={idx} 
												className="wow fadeInUp" 
												data-wow-delay={`${(idx + 1) * 0.2}s`}
											>
												{desc}
											</p>
										))
									) : (
										<>
											<p className="wow fadeInUp" data-wow-delay="0.1s">
												Our mission is to empowers businesses size to thrive in an
												businesses ever changing marketplace. We are committed to
												the delivering exceptionals the value through strategic
												inset, innovative approaches. Our consulting of our missing
												empower businesses of all sizes to thrive. Committed to the
												delivering exceptional in the values through our strategic
												inset, i approaches empower. Our mission is to empowers
												businesses
											</p>
											<p className="wow fadeInUp" data-wow-delay="0.3s">
												Our mission is to empowers businesses size to thrive in an
												businesses ever changing marketplace. We are committed to
												the delivering exceptionals the value through strategic
												inset
											</p>
										</>
									)}
									<div className="tj-check-list">
										<h4 className="text-anim">Requirements</h4>
										{requirements?.description && (
											<p className="wow fadeInUp" data-wow-delay="0.1s">
												{requirements.description}
											</p>
										)}
									</div>
									{requirements?.items && requirements.items.length > 0 && (
										<div
											className="team-details__experience__list service-check-list mt-4 mb-4 wow fadeInUp"
											data-wow-delay="0.3s"
										>
											<ul>
												{requirements.items.map((item, idx) => (
													<li key={idx}>
														<i className="tji-check"></i>
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>
									)}
									<div className="tj-check-list">
										<h4 className="text-anim">Responsibilities</h4>
										{responsibilities?.description && (
											<p className="wow fadeInUp" data-wow-delay="0.1s">
												{responsibilities.description}
											</p>
										)}
										{responsibilities?.items && responsibilities.items.length > 0 && (
											<ul className="wow fadeInUp" data-wow-delay="0.3s">
												{responsibilities.items.map((item, idx) => (
													<li key={idx}>
														<span>
															<i className="tji-check"></i>
														</span>{" "}
														{item}
													</li>
												))}
											</ul>
										)}
									</div>
								</div>
								{/* <!-- post tag and share --> */}
								<div
									className="tj-tags-post tj-post-details_tags_share wow fadeInUp"
									data-wow-delay=".1s"
								>
									<div className="tagcloud">
										<span>Tags:</span>
										{tags && tags.length > 0 ? (
											tags.map((tag, idx) => (
												<Link key={idx} href="/careers">
													{tag}
												</Link>
											))
										) : (
											<>
												<Link href="/careers">Business</Link>
												<Link href="/careers">Consulting</Link>
												<Link href="#/careers">Insights</Link>
											</>
										)}
									</div>
									<div className="post-share">
										<ul>
											<li> Share:</li>
											<li>
												{" "}
												<Link href="https://www.facebook.com/" title="Facebook">
													<i className="fa-brands fa-facebook-f"></i>
												</Link>
											</li>
											<li>
												{" "}
												<Link href="https://x.com/" title="Twitter">
													<i className="fab fa-x-twitter"></i>
												</Link>
											</li>
											<li>
												{" "}
												<Link href="https://www.linkedin.com/" title="Linkedin">
													<i className="fa-brands fa-linkedin-in"></i>
												</Link>
											</li>
											<li>
												{" "}
												<Link
													href="https://www.pinterest.com/"
													title="Pinterest"
												>
													<i className="fa-brands fa-pinterest-p"></i>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>

							{/* <!-- post navigation --> */}
							<div
								className="tj-post__navigation mb-0 wow fadeInUp"
								data-wow-delay="0.3s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/careers/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/careers"} className="tj-nav-post__grid">
									<i className="tji-window"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/careers/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<aside className="tj-blog-sidebar">
							{/* <!-- Job information  --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h4 className="widget-title">Job Information</h4>
								<div className="project_catagory">
									<ul>
										<li>
											<span className="first-child">Category</span>
											<span>{jobInformation?.category || category || "N/A"}</span>
										</li>
										{jobInformation?.number && (
											<li>
												<span className="first-child">Number</span>
												<span>{jobInformation.number}</span>
											</li>
										)}
										{jobInformation?.company && (
											<li>
												<span className="first-child">Company</span>
												<span>{jobInformation.company}</span>
											</li>
										)}
										{jobInformation?.website && (
											<li>
												<span className="first-child">Website</span>
												<span>{jobInformation.website}</span>
											</li>
										)}
										<li>
											<span className="first-child">Salary</span>
											<span>{jobInformation?.salary || price || "Not disclosed"}</span>
										</li>
										{jobInformation?.vacancy && (
											<li>
												<span className="first-child">Vacancy</span>
												<span>{jobInformation.vacancy}</span>
											</li>
										)}
										{jobInformation?.applyOn && (
											<li>
												<span className="first-child">Apply on</span>
												<span>{jobInformation.applyOn}</span>
											</li>
										)}
									</ul>
								</div>
							</div>
							{/* <!-- apply form --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<h4 className="widget-title">Apply Online</h4>
								<div className="tj-careers-form">
									<form action="#">
										<div className="form-input">
											<input
												type="text"
												name="cr_name"
												placeholder="Full name*"
											/>
										</div>
										<div className="form-input">
											<input
												type="email"
												name="cr_email"
												placeholder="Enter email*"
											/>
										</div>
										<div className="form-input">
											<input
												type="text"
												name="cr_phone"
												placeholder="Phone number*"
											/>
										</div>
										<div className="form-input">
											<textarea
												name="cr_cover_letter"
												placeholder="Cover letter*"
											></textarea>
										</div>
										<div className="form-input reduce">
											<label className="label" htmlFor="inputFile">
												Attach resume*
											</label>
											<input type="file" id="inputFile" />
										</div>
										<div className="tj-careers-button">
											<ButtonPrimary text={"Submit now"} type="submit" />
										</div>
									</form>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CareerDetails1;
