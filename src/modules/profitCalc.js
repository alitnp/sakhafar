import axios from "axios";

export default async function profitCalc(
	coinName = "bitcoin",
	hashRate = "1000000000000"
) {
	const res = await axios
		.get(
			`https://www.coincalculators.io/api?name=${coinName}&hashrate=${hashRate}`,
			{
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
					"Access-Control-Allow-Credentials": "true",
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}
		)
		.catch((error) => {
			console.log(error);
		});
	const price = res.data.exchanges[0].buyPrice;
	const dailyProfit = parseFloat(res.data.rewardsInDay.toFixed(10));

	return { price, dailyProfit };
}
