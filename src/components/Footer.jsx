import { Divider, Row, Col, Layout } from "antd";

const { Footer: AntdFooter } = Layout;

function Footer() {
	return (
		<AntdFooter style={{ backgroundColor: '#f3f3f3', padding: 0 }}>
			{/* 1행: Divider */}
			<div style={{ paddingLeft: '2rem', paddingRight: '2rem'}}>
				<Divider style={{ borderColor: '#000000', borderWidth: '1px' }}/>
			</div>

			{/* 2행: 4열 구성 */}
			<div>
				<Row gutter={[24, 16]} align="top" style={{ padding: '0 2.5rem 2.5rem 2.5rem' }}>
					{/* 1열: Contact */}
					<Col xs={24} sm={12} md={6}>
						<div style={{ textAlign: 'start' }}>
							<div style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '18px' }}>Phone</div>
							<div style={{fontSize: '14px'}}>010-9345-7879</div>
						</div>
					</Col>

					{/* 2열: About */}
					<Col xs={24} sm={12} md={6}>
						<div style={{ textAlign: 'start' }}>
							<div style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '18px' }}>Email</div>
							<div style={{fontSize: '14px'}}>sos000523@naver.com</div>
						</div>
					</Col>

					{/* 3열: Links */}
					<Col xs={24} sm={12} md={6}>
						<div style={{ textAlign: 'start' }}>
							<div style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '18px' }}>Follow Me</div>
							<div style={{fontSize: '14px'}}>Portfolio</div>
						</div>
					</Col>

					{/* 4열: Copyright */}
					<Col xs={24} sm={12} md={6}>
						<div className="flex flex-col items-center justify-center h-full">
							<div>© 2025 By Lee ChaeSeul</div>
						</div>
					</Col>
				</Row>
			</div>
		</AntdFooter>
	);
}

export default Footer;
