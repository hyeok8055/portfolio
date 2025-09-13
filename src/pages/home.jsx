import React from 'react';
import { Row, Col, Image, Typography, Button, Space, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../styles/colors.css';
import './home.css';
import profileImg from '@/assets/chaeseula.webp';

const { Title } = Typography;

function Home() {
	const navigate = useNavigate();

	const handleNavigation = (path) => {
		navigate(path);
	};

	return (
		<Space
			style={{
				padding: '80px 0',
				width: '100%',
				maxWidth: '1200px',
				minHeight: '75vh',
				margin: '0 auto',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{/* Desktop Layout */}
			<Row gutter={[1, 32]} style={{ width: '100%' }} className="desktop-layout">
				<Col xs={24} md={12} className="left-col fade-in-up">
					<div className="profile-wrap" style={{ marginRight: '24px' }}>
						<Image src={profileImg} preview={false}  alt="profile" className="profile-img" />
					</div>
				</Col>

				<Col xs={24} md={12} className="right-col fade-in-up" style={{ alignItems: 'start' }}>
					<div className="greeting">
						<div style={{ fontSize: '5rem', fontWeight: 900 }}>이채슬</div>
					</div>

					<div className="about">
						<h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>나로 시작하여 모두가 함께 하는 끝없는 성장</h3>
						<p style={{ fontWeight: 100, fontSize: 15, lineHeight: 1.3 }}>
							어제의 나와 오늘의 나를 비교하며 성장하고자 합니다.<br/>
							함께 하는 이들에게 많은 것을 흡수하고 나아가 배운 것을 나눌 수 있는 사람이 되기를 희망하고 있습니다.<br/>
							매일 성장하기를, 함께 성장하기를.
						</p>
					</div>

					<div className="actions">
						<Space size="large">
							<Button className="circle resume fade-in-up" onClick={() => handleNavigation('/resume')}>Resume</Button>
							<Button className="circle projects fade-in-up-delay-1" onClick={() => handleNavigation('/projects')}>Projects</Button>
							<Button className="circle contact fade-in-up-delay-2" onClick={() => handleNavigation('/contact')}>Contact</Button>
						</Space>
					</div>
				</Col>
			</Row>

			{/* Mobile Layout */}
			<div className="mobile-layout">
				<div className="mobile-content fade-in-up">
					<div className="greeting">
						<div style={{ fontSize: '4rem', fontWeight: 900 }}>이채슬</div>
					</div>

					<div className="about">
						<h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>나로 시작하여 모두가 함께 하는 <br/>끝없는 성장</h3>
						<p style={{ fontWeight: 100, fontSize: 15, lineHeight: 1.3 }}>
							어제의 나와 오늘의 나를 비교하며 성장하고자 합니다.<br/>
							함께 하는 이들에게 많은 것을 흡수하고 나아가 배운 것을 나눌 수 있는 사람이 되기를 희망하고 있습니다.<br/>
							매일 성장하기를, 함께 성장하기를.
						</p>
					</div>

					<div className="actions">
						<Space size="middle">
							<Button className="circle resume fade-in-up" onClick={() => handleNavigation('/resume')}>Resume</Button>
							<Button className="circle projects fade-in-up-delay-1" onClick={() => handleNavigation('/projects')}>Projects</Button>
							<Button className="circle contact fade-in-up-delay-2" onClick={() => handleNavigation('/contact')}>Contact</Button>
						</Space>
					</div>
				</div>

				<div className="mobile-profile fade-in-up-delay-1">
					<div className="profile-wrap">
						<Image src={profileImg} preview={false}  alt="profile" className="profile-img" />
					</div>
				</div>
			</div>
		</Space>
	);
}

export default Home;
