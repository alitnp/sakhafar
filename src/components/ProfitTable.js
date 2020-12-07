import { useState } from "react";

export default function ProfitTable(props) {
	const [poolCost, setPoolCost] = useState(1);
	const [powerCost, setPowerCost] = useState(4000);

	const { power, hash, dailyProfit, price, rialRate } = props.tData;

	const one = dailyProfit * hash;
	const two = one * price * rialRate;
	const three = power / 1000;
	const four = (power / 1000) * powerCost;
	const five = one - four / rialRate / price;
	const six = two - four;

	return (
		<div>
			<div>
				<div>
					{"میزان کارمزد استخر"}
					<input
						type="Number"
						value={1}
						onChange={(e) => {
							setPoolCost(e.target.value);
						}}
					/>
					{"%"}
				</div>
				<div>
					{"هزینه هر کیلو وات ساعت"}
					<input
						type="Number"
						value={4000}
						onChange={(e) => {
							setPowerCost(e.target.value);
						}}
					/>
					{"ریال"}
				</div>
			</div>
			<table>
				<thead>
					<tr>
						<th>-</th>
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
						<td>{one}</td>
						<td>{two}</td>
						<td>{three}</td>
						<td>{four}</td>
						<td>{five}</td>
						<td>{six}</td>
					</tr>
					<tr>
						<td>هفتگی</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>ماهانه</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>سالانه</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
