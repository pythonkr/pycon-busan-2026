import airflowLogo from "../images/community/airflow_korea_user_group.png";
import cppkoreaLogo from "../images/community/cppkorea_renew.png";
import ubuntuLogo from "../images/community/ubuntu_korea.svg";
import hackersPubLogo from "../images/community/pubnyan-normal-transparent.png";

// 오픈소스 커뮤니티 데이터.
// id 는 URL 슬러그로 사용됩니다. (/communities/:id)
// logo 가 없으면 이름 첫 글자가 placeholder 로 표시됩니다.
// sns 는 선택 사항이며, 없는 커뮤니티는 비워 둘 수 있습니다.

export const communities = [
  {
    id: "airflow-korea",
    name: { ko: "Airflow 한국 사용자 모임", en: "Airflow Korea User Group" },
    shortDescription: {
      ko: "Apache Airflow를 사용하는 개발자와 데이터 엔지니어를 위한 커뮤니티",
      en: "A community for developers and data engineers using Apache Airflow",
    },
    description: {
      ko: "Airflow 한국 사용자 모임은 Apache Airflow를 사용하는 개발자, 데이터 엔지니어, 운영자 등 다양한 사용자들을 위한 커뮤니티입니다. Apache Airflow는 Python 기반의 오픈소스 워크플로우 관리 도구로, 데이터 파이프라인을 코드로 정의하고 스케줄링 및 모니터링할 수 있는 강력한 기능을 제공합니다. 이 모임은 Airflow를 중심으로 한 경험 공유, 정보 교류, 기술 학습을 목적으로 하며, 정기 밋업과 세미나를 통해 활발히 활동하고 있습니다.",
      en: "Airflow Korea User Group is a community for developers, data engineers, operators, and other users of Apache Airflow. Apache Airflow is a Python-based open source workflow management tool that lets you define, schedule, and monitor data pipelines as code. The group focuses on sharing experience, exchanging information, and learning together through regular meetups and seminars.",
    },
    link: "https://www.airflow-kr.org/",
    sns: [
      { label: "Discourse", url: "https://discourse.airflow-kr.org/" },
      { label: "Meetup", url: "https://www.meetup.com/apache-airflow-korea-users-group/" },
      { label: "Open KakaoTalk", url: "https://open.kakao.com/o/gM4hR8Pg" },
    ],
    logo: airflowLogo,
  },
  {
    id: "hackers-pub",
    name: { ko: "Hackers' Pub", en: "Hackers' Pub" },
    shortDescription: {
      ko: "다양한 배경의 소프트웨어 엔지니어들이 함께하는 커뮤니티",
      en: "A community where software engineers from diverse backgrounds connect",
    },
    description: {
      ko: "Hackers' Pub은 다양한 배경을 가진 소프트웨어 엔지니어들이 함께 어우러지는 커뮤니티입니다. 국내 개발자 커뮤니티가 서울·경기권에 집중되어 있는 현실 속에서, 파이콘 부산을 통해 경상권 개발자들과도 교류하고 지역을 넘나드는 연결의 장을 함께 만들어가고자 합니다. 부스에서는 가입 이벤트와 스티커 나눔 등을 통해 커뮤니티를 소개하고, 방문하시는 분들과 가볍게 이야기 나눌 수 있는 자리를 마련할 예정입니다.",
      en: "Hackers' Pub is a community where software engineers from diverse backgrounds come together. In a landscape where many domestic developer communities are concentrated in the Seoul and Gyeonggi area, we want to connect with developers in the Gyeongsang region through PyCon Busan and build a space that bridges regions. At the booth, we will introduce the community through sign-up events and sticker giveaways, and we hope to create a relaxed space for conversation with visitors.",
    },
    link: "https://hackers.pub",
    logo: hackersPubLogo,
  },
  {
    id: "ubuntu-korea",
    name: { ko: "우분투한국커뮤니티", en: "Ubuntu Korea Community" },
    shortDescription: {
      ko: "Ubuntu와 오픈소스를 좋아하는 모두를 위한 공식 한국 커뮤니티",
      en: "The official Korean community for Ubuntu and open source enthusiasts",
    },
    description: {
      ko: "우분투한국커뮤니티는 Ubuntu와 오픈소스를 좋아하는 모두를 위한 곳으로, Ubuntu LoCo Council의 인증을 받은 공식 한국 커뮤니티입니다. Ubuntu와 오픈소스를 공통점으로 다양한 사람들을 연결하고, 행사 개최와 Ubuntu 및 관련 오픈소스 기여 활동, 그리고 국내외 다양한 오픈소스 커뮤니티와의 교류를 통해 Ubuntu와 오픈소스 저변 확대에 많은 노력을 기울이고 있습니다.",
      en: "Ubuntu Korea Community is a place for everyone who loves Ubuntu and open source, and it is the official Korean community certified by the Ubuntu LoCo Council. With Ubuntu and open source as common ground, the community connects people from different backgrounds and works to broaden the Ubuntu and open source ecosystem through events, Ubuntu and related open source contributions, and exchanges with domestic and international open source communities.",
    },
    link: "https://ubuntu-kr.org/",
    sns: [
      { label: "Facebook", url: "https://www.facebook.com/ubuntukorea" },
    ],
    logo: ubuntuLogo,
  },
  {
    id: "cppkorea",
    name: { ko: "C++Korea", en: "C++ Korea" },
    shortDescription: {
      ko: "한국 C++ 사용자들을 위한 기술 커뮤니티",
      en: "A technical community for C++ users in Korea",
    },
    description: {
      ko: "C++ Korea는 2013년 11월에 설립된 그룹으로, 한국 C++ 사용자들에게 최신 C++ 뉴스 및 관련 자료를 제공하고 있습니다. 여러 차례 스터디와 세미나를 진행했으며, 현재는 C++ 템플릿 스터디와 C++ 핵심 가이드라인 한글화 프로젝트를 진행하고 있습니다. 수도권 지역의 치킨 모임과 여러 지역에서의 밋업도 이어가며 활동하고 있습니다.",
      en: "C++ Korea is a group founded in November 2013 that shares the latest C++ news and related resources with C++ users in Korea. The community has run many study groups and seminars, and is currently working on a C++ template study group and a Korean translation project for the C++ Core Guidelines. It also continues to hold local meetups and gatherings in different regions.",
    },
    link: "https://cppkorea.org/",
    sns: [
      { label: "Discord", url: "https://discord.gg/egrHcm6gb4" },
    ],
    logo: cppkoreaLogo,
  },
];
