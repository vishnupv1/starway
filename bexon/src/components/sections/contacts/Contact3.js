"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";

const Contact3 = () => {
	const [status, setStatus] = useState(null);
	const [submitting, setSubmitting] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const name = String(formData.get("cfName") || "");
		const email = String(formData.get("cfEmail") || "");
		const phone = String(formData.get("cfPhone") || "");
		const service = String(formData.get("service") || "");
		const message = String(formData.get("cfMessage") || "");

		const serviceId = "service_dhba1xo";
		const templateId =
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_f2cdjyd";
		const publicKey =
			process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "-Wd7j_Rriar5kDGol";

		if (!templateId || !publicKey) {
			setStatus("Email service not configured. Please set EmailJS keys.");
			return;
		}

		setSubmitting(true);
		setStatus(null);

		try {
			await emailjs.send(
				serviceId,
				templateId,
				{
					title: "New Inquiry",
					name,
					email,
					phone,
					service,
					message,
					from_name: name,
					from_email: email,
					to_email: "admin@starwaylinkservices.com",
					subject: `New contact inquiry from ${name}`,
				},
				{ publicKey }
			);
			setStatus("Thanks! We'll get back to you soon.");
			form.reset();
		} catch (error) {
			setStatus("Failed to send message. Please try again later.");
			console.error("EmailJS error:", error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<section className="tj-contact-section-2 section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-form wow fadeInUp" data-wow-delay=".1s">
							<h3 className="title">
								Feel Free to Get in Touch or Visit our Location.
							</h3>
							<form id="contact-form" onSubmit={onSubmit}>
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												name="cfName"
												placeholder="Full Name*"
												required
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												name="cfEmail"
												placeholder="Email Address*"
												required
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												name="cfPhone"
												placeholder="Phone number (optional)"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<ReactNiceSelect
														selectedIndex={0}
														name="service"
														options={[
															{
																value: "0",
																optionName: "Choose a service",
															},
															{
																value: "1",
																optionName: "SEO Services",
															},
															{
																value: "2",
																optionName: "Social Media Marketing",
															},
															{
																value: "3",
																optionName: "Google My Business",
															},
															{
																value: "4",
																optionName: "Content Marketing",
															},
															{
																value: "5",
																optionName: "Web Design & Development",
															},
															{
																value: "6",
																optionName: "Email Marketing",
															},
														]}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="form-input message-input">
											<textarea
												name="cfMessage"
												id="message"
												placeholder="Type message*"
												required
											></textarea>
										</div>
									</div>
									<div className="submit-btn">
										<ButtonPrimary
											type={"submit"}
											text={submitting ? "Sending..." : "Submit Now"}
											disabled={submitting}
										/>
									</div>
									{status && (
										<div
											className={`status-message mt-3 ${
												status.includes("Thanks")
													? "text-success"
													: "text-danger"
											}`}
											style={{
												color: status.includes("Thanks")
													? "#28a745"
													: "#dc3545",
											}}
										>
											{status}
										</div>
									)}
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="map-area wow fadeInUp" data-wow-delay=".3s">
							<iframe
								title="Starwaylink Services LLC Location"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861009.5379097238!2d53.94857525!3d24.354006899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49502acd956061a5%3A0x2d8c82efcc5b53a9!2sStarway%20Link%20Services%20LLC!5e0!3m2!1sen!2sin!4v1763828396652!5m2!1sen!2sin"
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								style={{ border: 0, width: "100%", height: "100%" }}
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;
