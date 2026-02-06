"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ContactFormModal from "@/components/shared/modals/ContactFormModal";

const ContactTop = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		if (isModalOpen) {
			document.body.classList.add("is-modal-opened");
		} else {
			document.body.classList.remove("is-modal-opened");
		}
		return () => {
			document.body.classList.remove("is-modal-opened");
		};
	}, [isModalOpen]);

	const handleOpenModal = (e) => {
		e.preventDefault();
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="tj-contact-area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
								<i className="tji-box"></i>Contact info
							</span>
							<h2 className="sec-title title-anim">
								<span>Reach</span> Out to Us
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div className="contact-icon">
								<i className="tji-location-3"></i>
							</div>
							<h3 className="contact-title">Our Location</h3>
							<p>Sharjah Media City (Shams Free Zone), Business park in Al Bataeh, United Arab Emirates</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<div className="contact-icon">
								<i className="tji-envelop"></i>
							</div>
							<h3 className="contact-title">Email us</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:starwaylinkservices@gmail.com">starwaylinkservices@gmail.com</Link>
								</li>
								<li>
									<Link href="mailto:"></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".7s"
						>
							<div className="contact-icon">
								<i className="tji-phone"></i>
							</div>
							<h3 className="contact-title">Call us</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:10095447818">+971585993858
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".9s"
						>
							<div className="contact-icon">
								<i className="tji-chat"></i>
							</div>
							<h3 className="contact-title">Live chat</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:starwaylinkservices@gmail.com">
										starwaylinkservices@gmail.com
									</Link>
								</li>
								<li className="active">
									<Link href="/contact" onClick={handleOpenModal}>Need help?</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<ContactFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
		</div>
	);
};

export default ContactTop;
