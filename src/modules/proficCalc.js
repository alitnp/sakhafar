import axios from "axios";

export default async function (
	coinName = "bitcoin",
	hashRate = "1000000000000"
) {
	const res = await axios
		.get(
			`https://www.coincalculators.io/api?name=${coinName}&hashrate=${hashRate}`
		)
		.catch((error) => {
			console.log(error);
		});
	const price = res.data.exchanges[0].buyPrice;
	const dailyProfit = res.data.rewardsInDay.toFixed(10);
	return { price, dailyProfit };
}
