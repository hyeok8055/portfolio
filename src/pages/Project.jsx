import { Typography, Row, Col, Carousel, Space } from 'antd';
import './project.css';

// 프로젝트 데이터
const projectsData = [
	{
		id: 1,
		name: "이어드림: AI기반 재난 현장 – 구호품 기부 매칭 플랫폼 2025.08",
		description: "재난 현장 구호품 폐기 문제 해결을 위해 AI 기반 수요 예측과 공공데이터를 활용한 지능형 플랫폼을 구축. 대피소별 필요 물품을 제안하고 기부자에게 적절한 기부처를 매칭하여 낭비를 줄이고 투명성과 효율성을 확보하고자 함.",
		images: []
	},
	{
		id: 2,
		name: "글로벌 무역 리스크의 공간적 클러스터링 분석: PCA 기반 거래위험고 인프라 취약성의 차별적 공간 패턴 규명2025.06",
		description: "무역 리스크는 공간적으로 전염되어 클러스터를 이룬다는 양상을 분석한 공간 의존성을 무역 보험 심사에 포함하는 것을 제안함. 지정학적 거리 정보와 국가별 신용 위험 지표를 결합하여 기존 보험 심사 체계의 한계를 극복하고 나아가 리스크 핫스팟을 조기 식별하여 선제적으로 대응할 수 있기를 기대.",
		images: []
	},
	{
		id: 3,
		name: "잡라이트(JobRIght): 근로 생애주기 별 맞춤 권익보호 서비스2025.05",
		description: "청소년-청년 계층의 노동권 침해 사례가 증가함에 따라 구직-계약-근무-퇴사에 이르는 노동 생애주기에 필요한 정보를 제공하여 스스로의 권리를 지킬 수 있는 플랫폼을 제안 및 개발함.",
		images: []
	},
	{
		id: 4,
		name: "태위치: 태권도 경기 전후처리 자동화 프로그램2025.02",
		description: "직접 태권도 대회를 개최하며 대회 준비 중 서류 관리를 손수 처리하며 비효율이 발생한다는 점을 발견. 대구광역시 태권도 협회 경기부와 협업을 진행하여 대회 준비 과정을 전자화-자동화하는 플랫폼을 개발하고 현장에서 실사용함.",
		images: []
	},
	{
		id: 5,
		name: "사용자 장애 정보 가명화를 통한 나드리콜 지역별 배치2024.09",
		description: "수요에 비해 차량 매칭율이 떨어진다는 점을 고려해 장애 정도와 지역 수요를 분석하여 나드리콜 맞춤형 차량 배치를 제안. 이때, 민감정보인 장애 정보를 가명처리하여 개인정보를 보호하면서 장애인 이동권 보장을 추구함.",
		images: []
	},
	{
		id: 6,
		name: "사고다발해역입니다: 해상라디오를 통한 사고 주의 알람2023.06",
		description: "사고 밀집 해역과 주요 사고 원인을 분석하여 사고 다발 해역에 진입하면 주의 방송이 송출되는 시스템을 제안. 특히 해상에서의 통신을 고려하여 라디오 기반의 경고 방송 송출 방식을 채택하여 실현 가능성을 확보함.",
		images: []
	}
];

const { Title, Paragraph } = Typography;

function Project() {
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
								{/* 프로젝트 일자 */}
								<div style={{ fontSize: '13px', color: '#888', lineHeight: '1.1', marginBottom: '2px' }}>
									{project.name.match(/(\d{4}\.\d{2})$/)?.[1]}
								</div>
								<Title level={3} style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
									{project.name.replace(/(\d{4}\.\d{2})$/, '').trim()}
								</Title>
								<Paragraph style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
									{project.description}
								</Paragraph>
							</Col>

							{/* 중간: 빈 공간 */}
							<Col xs={0} md={4} className="project-spacer">
							</Col>

							{/* 우측: 이미지 캐러셀 */}
							<Col xs={24} md={10} lg={8}>
								{project.images.length > 0 ? (
									<Carousel
										autoplay
										autoplaySpeed={5000}
										style={{ maxWidth: '400px'}}
									>
										{project.images.map((image, imgIndex) => (
											<div key={imgIndex}>
												<img 
													src={image} 
													alt={`${project.name} ${imgIndex + 1}`}
													style={{
														width: '100%',
														height: '300px',
														objectFit: 'cover',
													}}
												/>
											</div>
										))}
									</Carousel>
								) : (
									<div style={{ width: '100%', height: '300px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
										이미지 준비 중
									</div>
								)}
							</Col>
						</Row>
					</div>
				))}
			</Space>
		</div>
	);
}

export default Project;
