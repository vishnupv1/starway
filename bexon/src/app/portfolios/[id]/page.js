import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import PortfolioDetailsMain from "@/components/layout/main/PortfolioDetailsMain";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getPortfolio from "@/libs/getPortfolio";
import { notFound } from "next/navigation";

export default async function PortfolioDetails({ params }) {
	const { id } = await params;
	const items = getPortfolio();

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
						<PortfolioDetailsMain currentItemId={parseInt(id)} />
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
		const items = getPortfolio();
		if (!items || !Array.isArray(items)) {
			return [];
		}
		return items.map(({ id }) => ({ id: id.toString() }));
	} catch (error) {
		console.error("Error generating static params for portfolios:", error);
		return [];
	}
}
