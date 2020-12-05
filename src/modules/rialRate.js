import axios from "axios";

export default async function rialRate() {
	const { data } = await axios.get("https://www.megaweb.ir/api/money", {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			"Access-Control-Allow-Credentials": "true",
			"Content-Type": "application/x-www-form-urlencoded",
		},
	});
	return parseInt(data.sell_usd.price.replace(",", ""));
}
