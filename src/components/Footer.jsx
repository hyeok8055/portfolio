import { Divider } from "antd";

function Footer() {
	return (
		<>
			<Divider />
			<footer style={{ width: '100%', padding: '2rem 0', display: 'flex', justifyContent: 'space-around', alignItems: 'center', fontWeight: 400, fontSize: '1rem' }}>
				<div>Contact</div>
				<div>About</div>
				<div>Links</div>
				<div>© 2025 Portfolio</div>
			</footer>
		</>
	);
}

export default Footer;
