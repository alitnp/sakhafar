import { useState, useEffect } from "react";

import Table from "./ProfitTable.js";

import profitCalc from "../modules/profitCalc.js";
import rialRateCalc from "../modules/rialRate.js";

import "./Profit.css";

export default function Profit(props) {
	const { power, hash } = props.totals;
	const [calcResult, SetCalcResult] = useState({
		price: 18000,
		dailyProfit: 0.00000693,
		rialRate: 250000,
	});
	const { price, dailyProfit, rialRate } = calcResult;

	useEffect(() => {
		const calcResultFunc = async () => {
			const result = await profitCalc();
			const rialPrice = await rialRateCalc();
			result.rialRate = rialPrice;
			SetCalcResult(result);
		};
		calcResultFunc();
	}, []);
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
					{(price * rialRate)
						.toFixed(0)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</p>
			</div>
			{props.loggedIn && (
				<Table tData={{ power, hash, dailyProfit, price, rialRate }} />
			)}
		</div>
	);
}
