import React, { useState, useEffect } from "react";

import "./Miners.css";

const tableCreator = (info, miners) => {
	let key = 0;
	const finalData = info.map((element) => {
		key++;
		allThs = allThs + miners[element.id].th * element.qty;
		allPowers = allPowers + miners[element.id].power * element.qty;
		return (
			<tr key={key}>
				<td>{key}</td>
				<td>{miners[element.id].name}</td>
				<td>{miners[element.id].th}</td>
				<td>{miners[element.id].power}</td>
				<td>{element.qty}</td>
			</tr>
		);
	});

	return finalData;
};

let allThs = 0;
let allPowers = 0;
let info = "";
let addMiner = { id: "", qty: 0 };

export default function Miners(props) {
	if (info === "") info = props.info;

	const [tableData, setTableData] = useState(tableCreator(info, props.miners));

	React.useEffect(() => {});
	return (
		<div className="miners-container">
			<div className="miners-grid">
				<h4>اطلاعات دستگاه ها</h4>
				<p>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
					از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
					سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
					متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
					درصد گذشته.
				</p>
				<table>
					<thead>
						<tr>
							<th>#</th>
							<th>نام دستگاه</th>
							<th> قدرت پردازش هر دستگاه</th>
							<th>توان مصرفی هر دستگاه</th>
							<th>تعداد</th>
						</tr>
					</thead>
					<tbody>{tableData}</tbody>
				</table>
				<div className="">
					<h4>{`  مجموع قدرت پردازش :  TH ${allThs}  `}</h4>
					<h4>{`مجموع توان مصرفی : ${allPowers} watts`}</h4>
				</div>
				<div>
					<p>افزودن دستگاه جدید</p>
					<div>
						<label htmlFor="addMinerNmae">نوع دستگاه</label>
						<select
							name="addMinerName"
							id="addMinerName"
							onChange={(e) => {
								const newAddMiner = { id: e.target.value, qty: addMiner.qty };
								addMiner = newAddMiner;
							}}
						>
							<option key="0" value="">
								انتخاب کنید
							</option>
							{Object.keys(props.miners).map((miner) => {
								const name = props.miners[miner].name;
								return (
									<option key={name} value={miner}>
										{name}
									</option>
								);
							})}
						</select>
						<label htmlFor="addMinerQty">تعداد</label>
						<input
							type="number"
							id="addMinerQty"
							name="addMinerQty"
							onChange={(e) => {
								const qty = parseInt(e.target.value);
								const newAddMiner = {
									id: addMiner.id,
									qty: qty,
								};
								addMiner = newAddMiner;
							}}
						/>
						<button
							onClick={() => {
								if (addMiner.id !== "" && addMiner.qty !== 0) {
									let wasThere = -1;
									let newInfo = info;

									newInfo.forEach((element) => {
										if (element.id === addMiner.id) {
											wasThere = newInfo.indexOf(element);
										}
									});
									if (wasThere === -1) {
										newInfo = [...info, addMiner];
									} else {
										newInfo[wasThere] = {
											id: addMiner.id,
											qty: newInfo[wasThere].qty + addMiner.qty,
										};
									}
									info = newInfo;
									const newTableData = tableCreator(info, props.miners);
									setTableData(newTableData);
								}
							}}
						>
							+ افزودن{" "}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
