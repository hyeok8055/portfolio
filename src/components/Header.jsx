import { Row, Col, Divider, Drawer } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const navigate = useNavigate();

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	const closeDrawer = () => {
		setIsDrawerOpen(false);
	};

	const handleNavigation = (path) => {
		navigate(path);
		closeDrawer();
	};

	return (
		<>
			<header style={{ width: '100%', padding: '2rem' }}>
				{/* Desktop Header */}
				<div className="desktop-header">
					<Row justify="space-between" align="bottom" style={{ width: '100%' }}>
					{/* 1열: 3개 요소 (colordot, 이름, pm) */}
					<Col 
						onClick={() => handleNavigation('/')}
						style={{ 
							cursor: 'pointer',
							transition: 'opacity 0.3s ease',
						}}
						onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
						onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
					>
						<Row align="center" gutter={8}>
							<Col>
								<div style={{ 
									width: '24px', 
									height: '24px', 
									borderRadius: '50%', 
									backgroundColor: '#FFB3BA',
									margin : '0 5px 0 0'
								}}></div>
							</Col>
							<Col>
								<span style={{ fontWeight: 700, fontSize: '22px',marginRight:'6px' }}>Lee ChaeSeul</span>
								<span style={{ fontWeight: 400, fontSize: '15px', color: '#666'}}>PM</span>
							</Col>
						</Row>
					</Col>						{/* 2열: 5개 요소 (Resume, Divider, Projects, Divider, Contact) */}
						<Col>
							<Row align="middle" gutter={4}>
								<Col>
									<span 
										style={{ fontWeight: 300, fontSize: '14px', cursor: 'pointer' }}
										onClick={() => handleNavigation('/resume')}
									>
										Resume
									</span>
								</Col>
								<Col>
									<Divider type="vertical" style={{ borderColor: '#000000', borderWidth: '1.5px' }} />
								</Col>
								<Col>
									<span 
										style={{ fontWeight: 300, fontSize: '14px', cursor: 'pointer' }}
										onClick={() => handleNavigation('/projects')}
									>
										Projects
									</span>
								</Col>
								<Col>
									<Divider type="vertical" style={{ borderColor: '#000000', borderWidth: '1.5px' }} />
								</Col>
								<Col>
									<span 
										style={{ fontWeight: 300, fontSize: '14px', cursor: 'pointer' }}
										onClick={() => handleNavigation('/contact')}
									>
										Contact
									</span>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>

				{/* Mobile Header */}
				<div className="mobile-header">
					<Row justify="space-between" align="center" style={{ width: '100%' }}>
						<Col 
							onClick={() => handleNavigation('/')}
							style={{ 
								cursor: 'pointer',
								transition: 'opacity 0.3s ease',
							}}
							onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
							onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
						>
							<Row align="center" gutter={8}>
								<Col>
									<div style={{ 
										width: '20px', 
										height: '20px', 
										borderRadius: '50%', 
										backgroundColor: '#FFB3BA',
										margin : '0 5px 0 0'
									}}></div>
								</Col>
								<Col>
									<span style={{ fontWeight: 700, fontSize: '18px',marginRight:'4px' }}>Lee ChaeSeul</span>
									<span style={{ fontWeight: 400, fontSize: '13px', color: '#666'}}>PM</span>
								</Col>
							</Row>
						</Col>

						<Col>
							<div 
								onClick={toggleDrawer}
								style={{ 
									cursor: 'pointer', 
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									width: '24px',
									height: '24px',
									position: isDrawerOpen ? 'fixed' : 'relative',
									top: isDrawerOpen ? '2rem' : 'auto',
									right: isDrawerOpen ? '2rem' : 'auto',
									zIndex: 10000,
									backgroundColor: 'transparent',
									borderRadius: '4px',
									transition: 'all 0.3s ease'
								}}
								className={`hamburger-icon ${isDrawerOpen ? 'open' : ''}`}
							>
								<span className="hamburger-line"></span>
								<span className="hamburger-line"></span>
								<span className="hamburger-line"></span>
							</div>
						</Col>
					</Row>
				</div>
			</header>

			{/* Mobile Menu Drawer */}
			<Drawer
				placement="top"
				onClose={closeDrawer}
				open={isDrawerOpen}
				height="100vh"
				className="mobile-menu-drawer"
				closable={false}
				styles={{
					body: {
						padding: 0,
						background: '#f5f5f5'
					}
				}}
			>
				<div className="mobile-menu-content">
					<div className="mobile-menu-items">
						<div className="mobile-menu-item" onClick={() => handleNavigation('/resume')}>
							<span style={{ color: '#FFB3BA', fontWeight: 500, fontSize: '24px' }}>Resume</span>
						</div>
						<div className="mobile-menu-item" onClick={() => handleNavigation('/projects')}>
							<span style={{ color: '#333', fontWeight: 400, fontSize: '24px' }}>Projects</span>
						</div>
						<div className="mobile-menu-item" onClick={() => handleNavigation('/contact')}>
							<span style={{ color: '#333', fontWeight: 400, fontSize: '24px' }}>Contact</span>
						</div>
					</div>
				</div>
			</Drawer>
		</>
	);
}

export default Header;
