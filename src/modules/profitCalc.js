import axios from "axios";

export default async function profitCalc(
	coinName = "bitcoin",
	hashRate = "1000000000000"
) {
	const res = await axios.get("/api").catch((error) => {
		console.log(error);
	});

	const price = res.data.exchanges[0].buyPrice;
	const dailyProfit = parseFloat(res.data.rewardsInDay.toFixed(10));

	return { price, dailyProfit };
}
