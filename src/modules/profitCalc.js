import axios from "axios";

export default async function profitCalc(
	coinName = "bitcoin",
	hashRate = "1000000000000"
) {
	if (sessionStorage.price) {
		return {
			price: sessionStorage.price,
			dailyProfit: sessionStorage.dailyProfit,
		};
	}

	const proxyUrl = "https://cors-anywhere.herokuapp.com/";
	const targetUrl =
		"https://www.coincalculators.io/api?name=bitcoin&hashrate=1000000000000";

	const res = await axios.get(proxyUrl + targetUrl).catch((error) => {
		console.log(error);
	});

	const price = res.data.exchanges[0].buyPrice;
	const dailyProfit = res.data.rewardsInDay.toFixed(8);

	sessionStorage.price = price;
	sessionStorage.dailyProfit = dailyProfit;
	return { price, dailyProfit };
}
