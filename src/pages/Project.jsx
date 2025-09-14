import { Typography, Row, Col, Carousel, Space, Modal, Button } from 'antd';
import { useState, useEffect } from 'react';
import './project.css';

// 동적으로 이미지를 불러오는 함수
const getProjectImages = (projectId, imageCount) => {
	const images = [];
	for (let i = 1; i <= imageCount; i++) {
		try {
			// Vite의 동적 import를 사용
			images.push(new URL(`../assets/preview/${projectId}/${i}.png`, import.meta.url).href);
		} catch (error) {
			console.warn(`이미지를 찾을 수 없습니다: assets/preview/${projectId}/${i}.png`);
		}
	}
	return images;
};

// 모달용 발표자료 이미지를 동적으로 불러오는 함수 (Lazy Loading)
const getModalImages = async (projectId) => {
	const images = [];
	for (let i = 1; i <= 20; i++) {
		try {
			// 파일명을 3자리 숫자로 포맷팅 (001, 002, ...)
			const paddedNumber = i.toString().padStart(3, '0');
			// 동적 import를 사용하여 이미지가 실제로 존재하는지 확인
			const imageModule = await import(`../assets/modal/${projectId}/${paddedNumber}.jpg`);
			images.push(imageModule.default);
		} catch (error) {
			// 이미지가 없으면 더 이상 시도하지 않음 (연속된 파일명 가정)
			break;
		}
	}
	return images;
};

// 단일 이미지를 lazy load하는 함수
const loadSingleImage = async (projectId, imageIndex) => {
	try {
		const paddedNumber = imageIndex.toString().padStart(3, '0');
		const imageModule = await import(`../assets/modal/${projectId}/${paddedNumber}.jpg`);
		return imageModule.default;
	} catch (error) {
		console.warn(`이미지를 찾을 수 없습니다: assets/modal/${projectId}/${paddedNumber}.jpg`);
		return null;
	}
};

// 프로젝트 데이터
const projectsData = [
	{
		id: 1,
		name: "이어드림: AI 기반 재난 구호품 매칭 플랫폼 2025.08",
		description: "AI 수요 예측으로 구호품 폐기율 50% 문제를 해결하는 재난 물품 매칭 플랫폼\n\n• 역할: 서비스 기획 총괄, AI 수요 예측 모델 설계\n• 성과: 제3회 재난안전데이터 창업경진대회 대상 수상",
		imageCount: 1
	},
	{
		id: 2,
		name: "잡라이트(JobRight): 노동 생애주기 권익보호 서비스 2025.05",
		description: "노동 생애주기 전반을 지원하며 청년 근로자의 권익을 보호하는 AI 법률 서비스\n\n• 역할: 서비스 기획 총괄, 데이터 전략 수립\n• 성과: 제4회 고용노동데이터 활용 공모전 수상",
		imageCount: 4
	},
	{
		id: 3,
		name: "태위치: 태권도 대회 자동화 프로그램 2025.02",
		description: "수작업으로 진행되던 태권도 대회 서류 업무를 자동화하여 운영 효율을 극대화\n\n• 역할: 서비스 기획, 대외 협력 및 FE 개발\n• 성과: 대구광역시태권도협회 공식 도입, 핵심 업무 시간 95% 이상 단축",
		imageCount: 1
	},
	{
		id: 4,
		name: "MOPIc: AI 기반 영어 말하기 모의시험 서비스 2024.03",
		description: "생성형 AI로 OPIc 모의시험 문제 출제 및 자동 평가를 제공하여 단기 집중 연습을 지원하는 서비스\n\n• 역할: 생성형 AI 문제 생성 모듈 개발, 다차원 평가 알고리즘 설계\n• 성과: 네이버 부스트캠프 최종 프로젝트 발표 및 서비스 시연",
		imageCount: 1
	}
];

const { Title, Paragraph } = Typography;

function Project() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);
	const [modalImages, setModalImages] = useState([]);
	const [isLoadingImages, setIsLoadingImages] = useState(false);

	const showModal = (project) => {
		setSelectedProject(project);
		setIsModalVisible(true);
		loadModalImages(project.id);
	};

	const loadModalImages = async (projectId) => {
		setIsLoadingImages(true);
		setModalImages([]);
		try {
			const images = await getModalImages(projectId);
			setModalImages(images);
		} catch (error) {
			console.error('이미지 로딩 중 오류 발생:', error);
		} finally {
			setIsLoadingImages(false);
		}
	};

	const handleCancel = () => {
		setIsModalVisible(false);
		setSelectedProject(null);
		setModalImages([]);
		setIsLoadingImages(false);
	};

	return (
		<div className="project-container">
			{/* 페이지 제목 */}
			<div className="project-header">
				<Title level={1} style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '60px' }}>
					Projects
				</Title>
			</div>

			{/* 프로젝트 목록 */}
			<Space direction="vertical" size="large" style={{ width: '100%' }}>
				{projectsData.map((project, index) => (
					<div key={project.id} className="project-item">
						<Row gutter={[20, 20]} align="top">
							{/* 좌측: 프로젝트명과 설명 */}
							<Col xs={24} md={10} lg={12} className="project-content">
								<div style={{ 
									height: '100%', 
									display: 'flex', 
									flexDirection: 'column', 
									justifyContent: 'space-between'
								}}>
									<div>
										{/* 프로젝트 일자 */}
										<div style={{ fontSize: '13px', color: '#888', lineHeight: '1.1', marginBottom: '2px' }}>
											{project.name.match(/(\d{4}\.\d{2})$/)?.[1]}
										</div>
										<Title level={3} style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
											{project.name.replace(/(\d{4}\.\d{2})$/, '').trim()}
										</Title>
										<Paragraph style={{ fontSize: '14px', lineHeight: '1.6', color: '#666', whiteSpace: 'pre-line' }}>
											{project.description}
										</Paragraph>
									</div>
									<Button 
										type="text" 
										style={{ 
											padding: '0', 
											height: 'auto', 
											fontSize: '14px',
											alignSelf: 'flex-start'
										}}
										onClick={() => showModal(project)}
									>
										[ 더보기 ]
									</Button>
								</div>
							</Col>

							{/* 중간: 빈 공간 */}
							<Col xs={0} md={4} className="project-spacer">
							</Col>

							{/* 우측: 이미지 캐러셀 */}
							<Col xs={24} md={10} lg={8}>
								{(() => {
									const images = getProjectImages(project.id, project.imageCount);
									return images.length > 0 ? (
										<Carousel
											autoplay
											autoplaySpeed={5000}
											style={{ maxWidth: '400px'}}
										>
											{images.map((image, imgIndex) => (
												<div key={imgIndex}>
													<img 
														src={image} 
														alt={`${project.name} ${imgIndex + 1}`}
														style={{
															width: '100%',
															height: '300px',
															objectFit: 'contain',
														}}
													/>
												</div>
											))}
										</Carousel>
									) : (
										<div style={{ width: '100%', height: '300px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
											이미지 준비 중
										</div>
									);
								})()}
							</Col>
						</Row>
					</div>
				))}
			</Space>

			{/* 모달창 */}
			<Modal
				title={selectedProject ? selectedProject.name.replace(/(\d{4}\.\d{2})$/, '').trim() : ''}
				open={isModalVisible}
				onCancel={handleCancel}
				footer={null}
				width={800}
				centered
			>
				{selectedProject && (
					isLoadingImages ? (
						<div style={{ 
							textAlign: 'center', 
							padding: '50px', 
							color: '#999' 
						}}>
							발표자료 로딩 중...
						</div>
					) : modalImages.length > 0 ? (
						<Carousel
							autoplay={false}
							dots={true}
							style={{ textAlign: 'center' }}
						>
							{modalImages.map((image, imgIndex) => (
								<div key={imgIndex}>
									<img 
										src={image} 
										alt={`${selectedProject.name} 발표자료 ${imgIndex + 1}`}
										style={{
											width: '100%',
											maxHeight: '500px',
											objectFit: 'contain',
										}}
										loading="lazy"
									/>
								</div>
							))}
						</Carousel>
					) : (
						<div style={{ 
							textAlign: 'center', 
							padding: '50px', 
							color: '#999' 
						}}>
							발표자료 준비 중
						</div>
					)
				)}
			</Modal>
		</div>
	);
}

export default Project;
