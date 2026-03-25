import profileImg from '@/assets/chaeseula.webp';
import './pdf.css';

const workExperienceData = [
	{
		date: "2025.12 - 2026.02",
		title: "(주)드림아이디어소프트",
		subtitle: "시스템사업부 사원",
		description: "메타버스 및 웹, 어플리케이션 기획 담당"
	},
	{
		date: "2025.04 - 2025.11",
		title: "한국교육학술정보원",
		subtitle: "디지털교육본부 교수학습지원부 연구원",
		description: "초중등 교육정보서비스 인프라 및 콘텐츠 담당\n - 계정인증 및 클라우드 운영 지원\n - 본인인증 서비스 기획 및 운영\n - 콘텐츠 기획 및 운영 지원"
	}
];

const educationData = [
	{
		date: "2019.03 - 2025.02",
		institution: "경북대학교",
		degree: "학사",
		description: "사회과학대학 문헌정보학과 전공\nIT대학 컴퓨터학부 글로벌소프트웨어융합학과 복수전공"
	},
	{
		date: "2023.11 - 2024.04",
		institution: "네이버 부스트캠프AI",
		degree: "6기 수료",
		description: "자연어처리(NLP) 이수"
	}
];

const awardsData = [
	{ title: "개방형 클라우드 플랫폼 활용 공모전", award: "최우수상", year: "2025" },
	{ title: "데이터 문제해결은행 활용 경진대회", award: "최우수상", year: "2025" },
	{ title: "제3회 재난 안전데이터 창업경진대회", award: "대상", year: "2025" },
	{ title: "무역보험 빅데이터 분석 과제 공모전", award: "우수상", year: "2025" },
	{ title: "제4회 고용노동 공공데이터 활용 공모전", award: "최우수상", year: "2025" },
	{ title: "대구 가명정보 활용 사례 공모전", award: "최우수상", year: "2024" },
	{ title: "제3회 해양경찰 데이터 분석 아이디어 공모전", award: "우수상", year: "2023" },
	{ title: "작업현장 안전 인공지능 학습용 데이터 기반 서비스 경진대회", award: "장려상", year: "2021" },
	{ title: "소형객체 인공지능 모델 개발 챌린지", award: "대상", year: "2021" },
];

const projectsData = [
	{
		id: 1,
		name: "이어드림",
		date: "2025.08",
		summary: "AI 기반 재난 구호품 매칭 플랫폼",
		role: "서비스 기획 총괄, AI 수요 예측 모델 설계",
		result: "제3회 재난안전데이터 창업경진대회 대상 수상",
	},
	{
		id: 2,
		name: "잡라이트(JobRight)",
		date: "2025.05",
		summary: "노동 생애주기 권익보호 AI 법률 서비스",
		role: "서비스 기획 총괄, 데이터 전략 수립",
		result: "제4회 고용노동데이터 활용 공모전 수상",
	},
	{
		id: 3,
		name: "태위치",
		date: "2025.02",
		summary: "태권도 대회 자동화 프로그램",
		role: "서비스 기획, 대외 협력 및 FE 개발",
		result: "대구광역시태권도협회 공식 도입, 핵심 업무 시간 95% 이상 단축",
	},
	{
		id: 4,
		name: "MOPIc",
		date: "2024.03",
		summary: "AI 기반 영어 말하기 모의시험 서비스",
		role: "생성형 AI 문제 생성 모듈 개발, 다차원 평가 알고리즘 설계",
		result: "네이버 부스트캠프 최종 프로젝트 발표 및 서비스 시연",
	}
];

// 프리뷰 이미지
const getPreviewImage = (projectId) => {
	try {
		return new URL(`../assets/preview/${projectId}/1.webp`, import.meta.url).href;
	} catch {
		return null;
	}
};

function PdfView() {
	return (
		<div className="pdf-root">
			{/* ===== PAGE 1: HOME + RESUME ===== */}
			<section className="pdf-page pdf-combined">
				{/* 홈 영역: 가로 레이아웃 */}
				<div className="pdf-home-row">
					<div className="pdf-home-left">
						<div className="pdf-profile-wrap">
							<img src={profileImg} alt="profile" className="pdf-profile-img" />
						</div>
					</div>
					<div className="pdf-home-right">
						<h1 className="pdf-name">이채슬</h1>
						<p className="pdf-role">PM / Service Planner</p>
						<h3 className="pdf-motto">나로 시작하여 모두가 함께 하는 끝없는 성장</h3>
						<p className="pdf-bio-text">
							어제의 나와 오늘의 나를 비교하며 성장하고자 합니다.<br/>
							함께 하는 이들에게 많은 것을 흡수하고 나아가 배운 것을 나눌 수 있는 사람이 되기를 희망하고 있습니다.<br/>
							매일 성장하기를, 함께 성장하기를.
						</p>
					</div>
				</div>

				<div className="pdf-divider"></div>

				{/* Work Experience */}
				<div className="pdf-block">
					<h2 className="pdf-block-title">Work Experience</h2>
					<div className="pdf-block-content">
						{workExperienceData.map((item, i) => (
							<div key={i} className="pdf-entry">
								<span className="pdf-date">{item.date}</span>
								<div className="pdf-entry-detail">
									<strong>{item.title}</strong>
									<span className="pdf-subtitle">{item.subtitle}</span>
									{item.description.split('\n').map((line, j) => (
										<span key={j} className="pdf-desc-line">{line}</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Education */}
				<div className="pdf-block">
					<h2 className="pdf-block-title">Education</h2>
					<div className="pdf-block-content">
						{educationData.map((item, i) => (
							<div key={i} className="pdf-entry">
								<span className="pdf-date">{item.date}</span>
								<div className="pdf-entry-detail">
									<strong>{item.institution} | {item.degree}</strong>
									{item.description.split('\n').map((line, j) => (
										<span key={j} className="pdf-desc-line">{line}</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Awards */}
				<div className="pdf-block">
					<h2 className="pdf-block-title">Awards</h2>
					<div className="pdf-awards-list">
						{[...new Set(awardsData.map(a => a.year))].map(year => (
							<div key={year} className="pdf-award-year-group">
								<div className="pdf-award-year">{year}</div>
								{awardsData.filter(a => a.year === year).map((a, i) => (
									<div key={i} className="pdf-award-item">
										<span className="pdf-award-bullet">•</span>
										<span className="pdf-award-text">{a.title} — {a.award}</span>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ===== PAGE 3: PROJECTS ===== */}
			<section className="pdf-page pdf-projects">
				<h1 className="pdf-section-title">Projects</h1>
				<div className="pdf-projects-grid">
					{projectsData.map((project) => {
						const imgSrc = getPreviewImage(project.id);
						return (
							<div key={project.id} className="pdf-project-card">
								{imgSrc && (
									<div className="pdf-project-img-wrap">
										<img src={imgSrc} alt={project.name} className="pdf-project-img" />
									</div>
								)}
								<div className="pdf-project-info">
									<div className="pdf-project-date">{project.date}</div>
									<h3 className="pdf-project-name">{project.name}</h3>
									<p className="pdf-project-summary">{project.summary}</p>
									<p className="pdf-project-detail"><strong>역할:</strong> {project.role}</p>
									<p className="pdf-project-detail"><strong>성과:</strong> {project.result}</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default PdfView;
