import "./Info.css";

export default function Info(props) {
	const info = props.info || {};
	return (
		<div className="info-container">
			<h3>بسمه تعالی</h3>
			<div className="info-grid">
				<div className="info">
					<span>نام و نام خانوادگی:</span>

					<span>{info.name || ""}</span>
				</div>
				<div className="info">
					<span>نام شرکت:</span>
					<span>{info.company || ""} </span>
				</div>
				<div className="info">
					<span>شماره مجوز:</span>
					<span>{info.licenseNumber || ""}</span>
				</div>
				<div className="info">
					<span>تاریخ صدور:</span>
					<span>{info.licenseDate || ""}</span>
				</div>
			</div>
		</div>
	);
}
