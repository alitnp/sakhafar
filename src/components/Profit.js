import { useState, useEffect } from "react";

import profitCalc from "../modules/profitCalc.js";
import rialRate from "../modules/rialRate.js";

import "./Profit.css";

export default function Profit(props) {
	const { power } = props.totals;
	const [calcResult, SetCalcResult] = useState({});
	const { price, dailyProfit } = calcResult;

	useEffect(() => {
		const calcResultFunc = async () => {
			const result = await profitCalc(
				"bitcoin",
				`${props.totals.hash * 1000000000000}`
			);
			const rialPrice = await rialRate();
			result.rialRate = rialPrice;
			SetCalcResult(result);
		};
		calcResultFunc();
	}, [props]);

	return (
		<div className="profit-container">
			<h4>محاسبه درآمد و مقدار مصرف برق</h4>
			<div className="initial-info">
				<span>
					{`قیمت بیتکوین به دلار : `}
					{price&&price.toLocaleString()}$
				</span>
				<span>
					{`قیمت بیتکوین یه ریال : `}
					{(price * calcResult.rialRate)
						.toFixed(0)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</span>
			</div>
		</div>
	);
}
