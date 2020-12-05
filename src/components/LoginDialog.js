import { useState } from "react";

import "./LoginDialog.css";
import loginImage from "../images/loginImage.jpg";

export default function LoginDialog(props) {
	
	const [phone, setPhone] = useState(false);
	const [password, setPassword] = useState(false);
	return (
		<div
			className={`login-dialog-bg ${!props.appear && "disappear"}`}
			onClick={props.closeLoginDialog}
		>
			<div
				className="login-dialog"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<img src={loginImage} alt="" />
				<div className="form-div">
					<div className="inputs" style={phone ? { left: 0 } : {}}>
						<div className="input">
							<label htmlFor="phone">شماره تلفن همراه</label>
							<input type="number" id="phone" name="phone" />
							<button
								onClick={() => {
									setPhone(true);
								}}
							>
								&#60; ارسال رمز ورود
							</button>
						</div>
						<div className="input">
							<label htmlFor="phone">رمز ورود</label>
							<input type="number" id="phone" name="phone" />
							<div>
								<button
									onClick={() => {
										setPhone(false);
									}}
								>
									بازگشت &#62;
								</button>
								<button
									onClick={() => {
										props.successfulLogin();
										setPhone(false);
									}}
								>
									&#60; ورود
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
