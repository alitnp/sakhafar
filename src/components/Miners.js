import React, { useState, useEffect } from "react";

import "./Miners.css";

const tableCreator = (info, miners) => {
	let key = 0;
	allThs = 0;
	allPowers = 0;
	const finalData = info.map((element) => {
		key++;
		allThs = allThs + miners[element.id].th * element.qty;
		allPowers = allPowers + miners[element.id].power * element.qty;
		return (
			<tr key={key}>
				<td>{key}</td>
				<td>{miners[element.id].name}</td>
				<td>
					{miners[element.id].th}
					{" th"}
				</td>
				<td>
					{miners[element.id].power.toLocaleString()}
					{" Watt"}
				</td>
				<td>{element.qty}</td>
			</tr>
		);
	});

	return finalData;
};

let allThs = 0;
let allPowers = 0;
let info = "";

export default function Miners(props) {
	if (info === "") info = props.info;

	const initialTable = tableCreator(info, props.miners);
	const [tableData, setTableData] = useState(initialTable);
	const [addMiner, setAddMiner] = useState({ id: "", qty: 0 });
	const [collapsed, setCollapsed] = useState(false);

	useEffect(() => {}, [props.loggedIn]);

	useEffect(() => {
		const totals = { hash: allThs, power: allPowers };

		props.onTotalChange(totals);
	}, [tableData]);

	const addMinerHandler = () => {
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
			setAddMiner({ id: "", qty: 0 });
			setCollapsed(false);
			setTableData(newTableData);
		}
	};

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
				<div className="table-container">
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
						<tbody>{props.loggedIn && tableData}</tbody>
					</table>
				</div>
				<div className="table-totals">
					<p>{`  مجموع قدرت پردازش :  TH ${
						props.loggedIn ? allThs.toLocaleString() : 0
					}  `}</p>
					<p>{`مجموع توان مصرفی : ${
						props.loggedIn ? allPowers.toLocaleString() : 0
					} Watts`}</p>
				</div>
				{props.loggedIn && (
					<div className="add-miner">
						<p
							onClick={() => {
								setCollapsed(!collapsed);
							}}
						>
							{collapsed ? "-" : "+"}
							{"  "}
							{"افزودن دستگاه جدید"}
						</p>
						{collapsed && (
							<div className="form">
								<label htmlFor="addMinerNmae">نوع دستگاه</label>
								<select
									name="addMinerName"
									id="addMinerName"
									onChange={(e) => {
										const newAddMiner = {
											id: e.target.value,
											qty: addMiner.qty,
										};
										setAddMiner(newAddMiner);
									}}
								>
									<option key="0" value="" select="true">
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
								<div>
									<input
										type="number"
										id="addMinerQty"
										name="addMinerQty"
										onKeyUp={(e) => {
											if (e.key == "Enter") {
												e.preventDefault();
												addMinerHandler();
											}
										}}
										onChange={(e) => {
											let qty = parseInt(e.target.value);
											if (qty < 0) qty = 0;
											const newAddMiner = {
												id: addMiner.id,
												qty: qty,
											};
											setAddMiner(newAddMiner);
										}}
									/>
									<button onClick={addMinerHandler}>+</button>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
