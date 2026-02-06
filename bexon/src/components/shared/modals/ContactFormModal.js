"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";

const ContactFormModal = ({ isOpen, onClose }) => {
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
			// Close modal after successful submission (optional)
			setTimeout(() => {
				onClose();
				setStatus(null);
			}, 2000);
		} catch (error) {
			setStatus("Failed to send message. Please try again later.");
			console.error("EmailJS error:", error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div
			className={`tj-modal ${isOpen ? "modal-open" : ""}`}
			style={{
				display: isOpen ? "flex" : "none",
				opacity: isOpen ? 1 : 0,
				visibility: isOpen ? "visible" : "hidden",
			}}
			data-lenis-prevent
		>
			<div className="tj-modal-close" onClick={onClose}></div>
			<button
				className="tj-modal-close tj-modal-close-btn"
				onClick={onClose}
			>
				<i className="fa-thin fa-times"></i>
			</button>
			<div
				className="tj-modal-content"
				style={{
					transform: isOpen ? "translateY(0px)" : "translateY(-80px)",
				}}
			>
				<div className="contact-form" style={{ background: "#fff", padding: "40px", borderRadius: "8px" }}>
					<h3 className="title" style={{ marginBottom: "30px" }}>
						Feel Free to Get in Touch or Visit our Location.
					</h3>
					<form id="contact-form-modal" onSubmit={onSubmit}>
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
										id="message-modal"
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
		</div>
	);
};

export default ContactFormModal;
