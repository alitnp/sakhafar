import axios from "axios";

export default async function rialRate() {
	if (sessionStorage.rialRate) {
		return sessionStorage.rialRate;
	}
	const proxyUrl = "https://cors-anywhere.herokuapp.com/";
	const targetUrl = "https://www.megaweb.ir/api/money";
	const { data } = await axios.get(proxyUrl + targetUrl).catch((error) => {
		console.log(error);
	});
	const rialRate = parseInt(data.sell_usd.price.replace(",", ""));
	sessionStorage.rialRate = rialRate;
	return rialRate;
}
