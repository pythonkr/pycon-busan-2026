// type: 'full'     - 90인실 전체 사용 (메인 이벤트)
// type: 'parallel' - 50인실 두 방에서 동시 진행
// type: 'break'    - 쉬는 시간 / 빈 행
// titleEn / room1.titleEn / room2.titleEn: 영문 언어 선택 시 표시

export const schedule = [
  {
    time: '10:00',
    type: 'full',
    title: '오프닝',
    titleEn: 'Opening',
    speaker: '준비위원회',
  },
  {
    time: '10:10',
    type: 'full',
    tag: 'keynote',
    title: '키노트 1 (40분)',
    titleEn: 'Keynote 1 (40 min)',
    speaker: '배권한',
    abstract: 'TBD',
  },
  {
    time: '10:50',
    type: 'break',
    title: '쉬는 시간',
    titleEn: 'Break',
  },
  {
    time: '11:00',
    type: 'full',
    tag: 'keynote',
    title: '키노트 2 (40분)',
    titleEn: 'Keynote 2 (40 min)',
    speaker: 'Petr Andreev',
    abstract: 'Turn your personal growth into Python impact. How community can help you. Win-Win opportunity map.',
  },
  {
    time: '11:50',
    type: 'break',
    title: '점심 시간',
    titleEn: 'Lunch Break',
  },
  {
    time: '14:00',
    type: 'parallel',
    room1: {
      title: '워크플로우 자동화의 세계: Apache Airflow 101',
      titleEn: 'The World of Workflow Automation: Apache Airflow 101',
      speaker: '추영욱',
    },
    room2: {
      title: '나만의 Custom Claude Code Harness',
      titleEn: 'My Own Custom Claude Code Harness',
      speaker: '김정택',
    },
  },
  {
    time: '14:30',
    type: 'break',
    title: '',
    titleEn: '',
  },
  {
    time: '14:50',
    type: 'parallel',
    room1: {
      title: 'Pandas 3.0, 드디어!',
      titleEn: 'Pandas 3.0, Finally!',
      speaker: '한상곤',
    },
    room2: {
      title: 'Unlocking Secrets: Can Python Reveal the Strengths of LLMs in Cryptanalysis?',
      titleEn: 'Unlocking Secrets: Can Python Reveal the Strengths of LLMs in Cryptanalysis?',
      speaker: 'Pradana Nadhiar Ridho Wahyu',
    },
  },
  {
    time: '15:20',
    type: 'break',
    title: '',
    titleEn: '',
  },
  {
    time: '15:40',
    type: 'parallel',
    room1: {
      title: 'AI와 페어 프로그래밍: 풀스택 개발자의 생산성 비결',
      titleEn: 'AI Pair Programming: A Full-Stack Developer\'s Productivity Secret',
      speaker: '양효정',
    },
    room2: {
      title: 'From Movements to Matches: Using Python and Dynamic Time Warping for Motion Analysis',
      titleEn: 'From Movements to Matches: Using Python and Dynamic Time Warping for Motion Analysis',
      speaker: 'Melisa Krisnawati',
    },
  },
  {
    time: '16:10',
    type: 'break',
    title: '',
    titleEn: '',
  },
  {
    time: '16:30',
    type: 'parallel',
    room1: {
      title: '도메인은 바뀌어도 데이터는 남는다 - 바이오에서 핀테크, 반도체까지 Python으로 문제를 정의하는 법',
      titleEn: 'Data Persists Across Domains: Defining Problems with Python from Bio to Fintech to Semiconductors',
      speaker: '김경서',
    },
    room2: {
      title: 'CPython 3.15: Updates Rivals Will Use: Profiler, JIT, noGIL, Lazy Imports, UTF-8',
      titleEn: 'CPython 3.15: Updates Rivals Will Use: Profiler, JIT, noGIL, Lazy Imports, UTF-8',
      speaker: 'Petr Andreev',
    },
  },
  {
    time: '17:00',
    type: 'break',
    title: '',
    titleEn: '',
  },
  {
    time: '17:20',
    type: 'parallel',
    room1: {
      title: 'LLM 애플리케이션 프로덕션 운영, 옵저버빌리티로 풀다',
      titleEn: 'Running LLM Applications in Production: Solving It with Observability',
      speaker: '신민철',
    },
    room2: {
      title: 'TBD',
      titleEn: 'TBD',
      speaker: '이재열',
    },
  },
  {
    time: '17:50',
    type: 'break',
    title: '',
    titleEn: '',
  },
  {
    time: '18:00',
    type: 'full',
    tag: 'lightning',
    title: '라이트닝 토크',
    titleEn: 'Lightning Talk',
    speaker: '',
  },
];
