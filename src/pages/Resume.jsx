import React from 'react';
import { Typography, Flex, Divider } from 'antd';
import './resume.css';

const { Title, Text } = Typography;

function Resume() {
	const workExperienceData = [
		{
			date: "2025.04 - Present",
			title: "한국교육학술정보원",
			subtitle: "디지털교육본부 교수학습지원부 연구원",
			description: "초중등 교육정보서비스 인프라 및 콘텐츠 담당\n\
			\t - 계정인증 및 클라우드 운영 지원\n\
			\t - 본인인증 서비스 기획 및 운영\n\
			\t - 콘텐츠 기획 및 운영 지원"
		}
	];

	const educationData = [
		{
			date: "2019.03 - 2025.02",
			institution: "경북대학교",
			degree: "학사",
			description: "- 사회과학대학 문헌정보학과 전공\n\
			\t - IT대학 컴퓨터학부 글로벌소프트웨어융합학과 복수전공\n\
			"
		},
		{
			date: "2023.11 - 2024.04", 
			institution: "네이버 부스트캠프AI",
			degree: "6기 수료",
			description: "— 자연어처리(NLP) 이수"
		}
	];

	const awardsData = [
		{
			title: "제3회 재난 안전데이터 창업경진대회",
			award: "대상",
			year: "2025"
		},
		{
			title: "무역보험 빅데이터 분석 과제 공모전",
			award: "우수상",
			year: "2025"
		},
		{
			title: "제4회 고용노동 공공데이터 활용 공모전",
			award: "최우수상",
			year: "2025"
		},
		{
			title: "대구 가명정보 활용 사례 공모전",
			award: "최우수상",
			year: "2024"
		},
		{
			title: "제3회 해양경찰 데이터 분석 아이디어 공모전",
			award: "우수상",
			year: "2023"
		},
		{
			title: "작업현장 안전 인공지능 학습용 데이터 기반 서비스 경진대회",
			award: "장려상",
			year: "2021"
		},
		{
			title: "소형객체 인공지능 모델 개발 챌린지",
			award: "대상",
			year: "2021"
		}
	];

	return (
		<div className="resume-container">
			<div className="resume-content">
				<Title level={1} className="resume-title">Resume</Title>
				{/* Work Experience Section */}
				<Flex className="resume-table" justify='space-between' align='start'>
					{/* Section Title Column */}
					<div className="section-column">
						<Title level={2} className="section-title">Work <br/>Experience</Title>
					</div>
					
					{/* Content Columns */}
					<div className="content-columns">
						{workExperienceData.map((item, index) => (
							<Flex key={index} className="resume-row">
								<div className="date-column">
									<Text className="date-text">{item.date}</Text>
								</div>
								<div className="details-column">
									<Title level={3} className="position-title m-0 text-left">
										{item.title}
									</Title>
									<Title level={5} style={{ margin: 0, textAlign: 'left' }}>
										{item.subtitle}
									</Title>
									<div className="description-text">
										{item.description.split('\n').map((line, lineIndex) => (
											<Text key={lineIndex} style={{ display: 'block' }} className="m-0 text-left">
												{line}
											</Text>
										))}
									</div>
								</div>
							</Flex>
						))}
					</div>
				</Flex>
				{/* Education Section */}
				<Flex className="resume-table" justify='space-between' align='start' marginBottom={0}>
					{/* Section Title Column */}
					<div className="section-column">
						<Title level={2} className="section-title">Education</Title>
					</div>
					
					{/* Content Columns */}
					<div className="content-columns">
						{educationData.map((item, index) => (
							<Flex key={index} className="resume-row">
								<div className="date-column">
									<Text className="date-text">{item.date}</Text>
								</div>
								<div className="details-column">
									<Title level={3} className="position-title">
										{item.institution} | {item.degree}
									</Title>
									<div className="description-text">
										{item.description.split('\n').map((line, lineIndex) => (
											<Text key={lineIndex} style={{ display: 'block' }}>
												{line}
											</Text>
										))}
									</div>
								</div>
							</Flex>
						))}
					</div>
				</Flex>
                <Divider style={{ borderColor: '#000000', borderWidth: '1px', marginTop: 0 }}/>
				{/* Skills Section */}
				<Flex className="resume-table" justify='space-between' align='start'>
					{/* Section Title Column */}
					<div className="section-column">
						<Title level={2} className="section-title">Awards</Title>
					</div>
					
					{/* Content Columns */}
					<div className="content-columns">
						<div className="skills-content">
							{awardsData.map((award, index) => (
								<div key={index} className="skill-item">
									<div className="description-text">
										<Text style={{ display: 'block' }}>
											• {award.title} - {award.award} ({award.year})
										</Text>
									</div>
								</div>
							))}
						</div>
					</div>
				</Flex>
			</div>
		</div>
	);
}

export default Resume;