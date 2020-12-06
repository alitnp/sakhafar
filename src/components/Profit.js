import { useState, useEffect } from "react";

import profitCalc from "../modules/profitCalc.js";
import rialRate from "../modules/rialRate.js";

import "./Profit.css";

export default function Profit(props) {
	const { power, hash } = props.totals;
	const [calcResult, SetCalcResult] = useState({});
	const { price, dailyProfit } = calcResult;

	useEffect(() => {
		const calcResultFunc = async () => {
			const result = await profitCalc();
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
				<p>
					{`قیمت بیتکوین به دلار : `}
					{price && price.toLocaleString()}$
				</p>
				<p>
					{`قیمت بیتکوین یه ریال : `}
					{(price * calcResult.rialRate)
						.toFixed(0)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</p>
				<p>
					{`درآمد روزانه به بیتکوین : `}
					{(dailyProfit * hash).toFixed(10)} BTC
				</p>
			</div>
		</div>
	);
}
