import "./Header.css";
import irLogo from "../images/iran.b50c6db5.png";

export default function Header() {
	return (
		<div className="header">
			<div className="title">
				<img src={irLogo} alt="Iran Logo" />
				<h1>سامانه محاسبه استخراج رمز ارز بر پایه مصرف برق</h1>
			</div>
		</div>
	);
}
