import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Funfact1 = () => {
	return (
		<div className="tj-countup-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="countup-wrap">
							<div className="countup-item">
								<FunfactSingle currentValue={93} symbol={"%"} />

								<span className="count-text">المشاريع المكتملة.</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={20} symbol={"M"} />
								<span className="count-text">الوصول العالمي</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={8.5} symbol={"X"} />
								<span className="count-text">نمو أسرع</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={100} symbol={"+"} />
								<span className="count-text">الجوائز المحققة</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Funfact1;
