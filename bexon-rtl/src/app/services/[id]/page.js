import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getALlServices from "@/libs/getALlServices";
import { notFound } from "next/navigation";

export default async function ServiceDetails({ params }) {
	const { id } = await params;
	
	// Validate id parameter
	if (!id || isNaN(parseInt(id))) {
		notFound();
	}
	
	const items = getALlServices();
	
	// Validate items array exists and is not empty
	if (!items || !Array.isArray(items) || items.length === 0) {
		notFound();
	}

	const isExistItem = items.find(({ id: id1 }) => id1 === parseInt(id));
	if (!isExistItem) {
		notFound();
	}
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<ServiceDetailsMain currentItemId={parseInt(id)} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}

export async function generateStaticParams() {
	try {
		const items = getALlServices();
		
		// Validate items array exists and is not empty
		if (!items || !Array.isArray(items) || items.length === 0) {
			return [];
		}
		
		// Only return params for items that have valid IDs
		return items
			.filter(({ id }) => id != null && !isNaN(parseInt(id)))
			.map(({ id }) => ({ id: id.toString() }));
	} catch (error) {
		console.error("Error generating static params for services:", error);
		return [];
	}
}
