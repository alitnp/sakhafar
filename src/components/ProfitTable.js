import { useState } from "react";

import "./ProfitTable.css";

export default function ProfitTable(props) {
	const [poolCost, setPoolCost] = useState(1);
	const [powerCost, setPowerCost] = useState(4000);

	const { power, hash, dailyProfit, price, rialRate } = props.tData;

	const one = dailyProfit * hash * ((100 - poolCost) / 100);
	const two = (one * price * rialRate).toFixed(0);
	const three = ((power / 1000) * 24).toFixed(2);
	const four = (three * powerCost).toFixed(0);
	const five = (one - four / rialRate / price).toFixed(8);
	const six = two - four;

	return (
		<div>
			<div>
				<div>
					{"میزان کارمزد استخر"}
					<input
						type="Number"
						value={poolCost}
						onChange={(e) => {
							const value = e.target.value;
							if (value > 100) {
								setPoolCost(100);
								return;
							}
							if (value < 0) {
								setPoolCost(0);
								return;
							}
							setPoolCost(value);
						}}
					/>
					{"%"}
				</div>
				<div>
					{"هزینه هر کیلو وات ساعت"}
					<input
						type="Number"
						value={powerCost}
						onChange={(e) => {
							const value = e.target.value;
							if (value < 0) {
								setPowerCost(0);
								return;
							}
							setPowerCost(value);
						}}
					/>
					{"ریال"}
				</div>
			</div>
			<div style={{ overflowX: "auto" }}>
				<table>
					<thead>
						<tr>
							<th>دوره</th>
							<th>کارکرد به بیتکوین</th>
							<th>کارکرد به ریال</th>
							<th>برق مصرفی</th>
							<th>هزینه برق مصرفی</th>
							<th>کارکرد پس از کسر هزینه به بیت کوین</th>
							<th>کارکرد پس از کسر هزینه به ریال</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>روزانه</td>
							<td>{(one * 1).toFixed(8)} BTC</td>
							<td>{(two * 1).toLocaleString()} ریال</td>
							<td>{((three * 1).toFixed(2) * 1).toLocaleString()} kw</td>
							<td>{(four * 1).toLocaleString()} ریال</td>
							<td>{five} BTC</td>
							<td>{(six * 1).toLocaleString()} ریال</td>
						</tr>
						<tr>
							<td>هفتگی</td>
							<td>{(one * 7).toFixed(8)} BTC</td>
							<td>{(two * 7).toLocaleString()} ریال</td>
							<td>{((three * 7).toFixed(2) * 1).toLocaleString()} kw</td>
							<td>{(four * 7).toLocaleString()} ریال</td>
							<td>{(five * 7).toFixed(8)} BTC</td>
							<td>{(six * 7).toLocaleString()} ریال</td>
						</tr>
						<tr>
							<td>ماهانه</td>
							<td>{(one * 30).toFixed(8)} BTC</td>
							<td>{(two * 30).toLocaleString()} ریال</td>
							<td>{((three * 30).toFixed(2) * 1).toLocaleString()} kw</td>
							<td>{(four * 30).toLocaleString()} ریال</td>
							<td>{(five * 30).toFixed(8)} BTC</td>
							<td>{(six * 30).toLocaleString()} ریال</td>
						</tr>
						<tr>
							<td>سالانه</td>
							<td>{(one * 365).toFixed(8)} BTC</td>
							<td>{(two * 365).toLocaleString()} ریال</td>
							<td>{((three * 365).toFixed(2) * 1).toLocaleString()} kw</td>
							<td>{(four * 365).toLocaleString()} ریال</td>
							<td>{(five * 365).toFixed(8)} BTC</td>
							<td>{(six * 365).toLocaleString()} ریال</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
