import axios from "axios";

export default async function rialRate() {
	const { data } = await axios.get("https://www.megaweb.ir/api/money");
	return parseInt(data.sell_usd.price.replace(",", ""));
}
