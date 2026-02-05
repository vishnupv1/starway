import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import CareerDetails1 from "@/components/sections/careers/CareerDetails1";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getCareers from "@/libs/getCareers";
import { notFound } from "next/navigation";

export default async function CareerDetails({ params }) {
	const { id } = await params;
	const items = getCareers();

	const isExistItem = items?.find(({ id: id1 }) => id1 === parseInt(id));
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
						<HeroInner title={"Careers Details"} text={"Careers Details"} />
						<CareerDetails1 currentItemId={parseInt(id)} />
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
		const items = getCareers();
		if (!items || !Array.isArray(items)) {
			return [];
		}
		return items.map(({ id }) => ({ id: id.toString() }));
	} catch (error) {
		console.error("Error generating static params for careers:", error);
		return [];
	}
}
