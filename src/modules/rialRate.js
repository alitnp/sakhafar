import axios from "axios";

export default async function rialRate() {
	const { data } = await axios.get("/money");
	return parseInt(data.sell_usd.price.replace(",", ""));
}
