// 오픈소스 커뮤니티 샘플 데이터.
// id 는 URL 슬러그로 사용됩니다. (/communities/:id)
// logo 가 null 이면 이름 첫 글자가 placeholder 로 표시됩니다.

export const communities = [
  {
    id: "python-korea",
    name: { ko: "(사)파이썬사용자모임", en: "Python Korea" },
    shortDescription: {
      ko: "한국 파이썬 사용자들이 모여 만든 비영리 커뮤니티",
      en: "A non-profit community of Python users in Korea",
    },
    description: {
      ko: "파이썬을 사용하는 한국의 개발자, 학생, 연구자, 디자이너 등 모든 사용자들이 모여 지식을 공유하고 함께 성장하는 비영리 커뮤니티입니다. 매년 PyCon Korea 컨퍼런스를 개최하며, 다양한 지역 모임과 스터디를 통해 한국 파이썬 생태계의 저변을 넓혀 가고 있습니다.",
      en: "A non-profit community where Python users in Korea — developers, students, researchers, designers, and more — gather to share knowledge and grow together. Hosts the annual PyCon Korea conference and supports the local Python ecosystem through regional meetups and study groups.",
    },
    link: "https://python.or.kr",
    logo: null,
  },
  {
    id: "ubuntu-korea",
    name: { ko: "우분투한국커뮤니티", en: "Ubuntu Korea Community" },
    shortDescription: {
      ko: "우분투 리눅스 사용자들의 한국 커뮤니티",
      en: "The Korean community of Ubuntu Linux users",
    },
    description: {
      ko: "우분투(Ubuntu) 리눅스를 사용하는 한국 사용자들이 모여 정보를 나누고 한국어 환경 지원, 번역, 사용자 지원 활동을 진행하는 커뮤니티입니다. 정기 모임과 온라인 채널을 통해 초심자부터 숙련 사용자까지 폭넓게 교류하고 있습니다.",
      en: "A community of Ubuntu Linux users in Korea who share information and contribute to Korean localization, translation, and user support. From newcomers to seasoned users, members connect through regular meetups and online channels.",
    },
    link: "https://ubuntu-kr.org",
    logo: null,
  },
  {
    id: "airflow-korea",
    name: { ko: "Airflow 한국 사용자 모임", en: "Apache Airflow Korea" },
    shortDescription: {
      ko: "Apache Airflow를 데이터 파이프라인에 활용하는 한국 사용자 모임",
      en: "A Korean user group for Apache Airflow data pipelines",
    },
    description: {
      ko: "데이터 파이프라인 오케스트레이션 도구인 Apache Airflow를 실제 업무에 활용하는 한국의 데이터 엔지니어, 분석가, 개발자들이 운영 노하우와 사례를 나누는 사용자 모임입니다. 정기 밋업과 발표 세션, 스터디를 통해 실무 중심의 지식을 공유합니다.",
      en: "A user group of Korean data engineers, analysts, and developers who use Apache Airflow — the data pipeline orchestration tool — in production. The community shares operational know-how and real-world cases through regular meetups, talks, and study groups.",
    },
    link: "https://github.com/Airflow-Korea-User-Group",
    logo: null,
  },
  {
    id: "pytorch-korea",
    name: { ko: "PyTorch 한국 사용자 모임", en: "PyTorch Korea User Group" },
    shortDescription: {
      ko: "딥러닝 프레임워크 PyTorch의 한국 사용자 모임",
      en: "Korean user group for the PyTorch deep learning framework",
    },
    description: {
      ko: "딥러닝 연구와 서비스에 PyTorch를 활용하는 한국의 연구자와 개발자들이 모인 사용자 모임입니다. PyTorch 한국어 문서 번역, 튜토리얼 작성, 커뮤니티 Q&A 활동을 통해 한국어 사용자들의 진입 장벽을 낮추는 데 기여하고 있습니다.",
      en: "A user group for Korean researchers and developers who use PyTorch in deep learning research and production. The community lowers entry barriers for Korean speakers by translating PyTorch documentation, writing tutorials, and running Q&A channels.",
    },
    link: "https://pytorch.kr",
    logo: null,
  },
];
