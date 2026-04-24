// type: 'full'     - 90인실 전체 사용 (메인 이벤트)
// type: 'parallel' - 50인실 두 방에서 동시 진행
// type: 'break'    - 쉬는 시간 / 빈 행
// titleEn / room1.titleEn / room2.titleEn: 영문 언어 선택 시 표시
// code: 상세 페이지 URL 식별자 (full 타입은 row.code, parallel 타입은 room1.code/room2.code)

export const schedule = [
  {
    time: '09:30',
    endTime: '10:00',
    type: 'break',
    title: '입장 등록 (6층)',
    titleEn: 'Registration (6F)',
  },
  {
    time: '10:00',
    endTime: '10:10',
    type: 'full',
    code: 'opening',
    title: '오프닝',
    titleEn: 'Opening',
    speaker: '준비위원회',
  },
  {
    time: '10:10',
    endTime: '10:50',
    type: 'full',
    tag: 'keynote',
    code: 'keynote-1',
    title: 'Proper Attention is All You Need Today',
    titleEn: 'Proper Attention is All You Need Today',
    speaker: '배권한',
  },
  {
    time: '10:50',
    type: 'break',
    title: '쉬는 시간',
    titleEn: 'Break',
  },
  {
    time: '11:00',
    endTime: '11:50',
    type: 'full',
    tag: 'keynote',
    code: 'keynote-2-petr',
    title: 'Turn your personal growth into Python impact.\nHow community can help you. Win-Win opportunity map.',
    titleEn: 'Turn your personal growth into Python impact.\nHow community can help you. Win-Win opportunity map.',
    speaker: 'Petr Andreev',
    abstract: '',
  },
  {
    time: '11:50',
    type: 'break',
    title: '점심 시간',
    titleEn: 'Lunch Break',
  },
  {
    time: '14:00',
    endTime: '14:30',
    type: 'parallel',
    room1: {
      code: 'pandas-3',
      title: 'Pandas 3.0, 드디어!',
      titleEn: 'Pandas 3.0, Finally!',
      speaker: '한상곤',
    },
    room2: {
      code: 'custom-claude-code-harness',
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
    endTime: '15:20',
    type: 'parallel',
    room1: {
      code: 'airflow-101',
      title: '워크플로우 자동화의 세계: Apache Airflow 101',
      titleEn: 'The World of Workflow Automation: Apache Airflow 101',
      speaker: '추영욱',
    },
    room2: {
      code: 'dtw-motion-analysis',
      title: 'From Movements to Matches: Using Python and Dynamic Time Warping for Motion Analysis',
      titleEn: 'From Movements to Matches: Using Python and Dynamic Time Warping for Motion Analysis',
      speaker: 'Melisa Krisnawati',
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
    endTime: '16:10',
    type: 'parallel',
    room1: {
      code: 'ai-pair-programming',
      title: 'AI와 페어 프로그래밍: 풀스택 개발자의 생산성 비결',
      titleEn: 'AI Pair Programming: A Full-Stack Developer\'s Productivity Secret',
      speaker: '양효정',
    },
    room2: {
      code: 'llm-cryptanalysis',
      title: 'Unlocking Secrets: Can Python Reveal the Strengths of LLMs in Cryptanalysis?',
      titleEn: 'Unlocking Secrets: Can Python Reveal the Strengths of LLMs in Cryptanalysis?',
      speaker: 'Pradana Nadhiar Ridho Wahyu',
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
    endTime: '17:00',
    type: 'parallel',
    room1: {
      code: 'python-across-domains',
      title: '도메인은 바뀌어도 데이터는 남는다 - 바이오에서 핀테크, 반도체까지 Python으로 문제를 정의하는 법',
      titleEn: 'Data Persists Across Domains: Defining Problems with Python from Bio to Fintech to Semiconductors',
      speaker: '김경서',
    },
    room2: {
      code: 'cpython-3-15',
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
    endTime: '17:50',
    type: 'parallel',
    room1: {
      code: 'llm-observability',
      title: 'LLM 애플리케이션 프로덕션 운영, 옵저버빌리티로 풀다',
      titleEn: 'Running LLM Applications in Production: Solving It with Observability',
      speaker: '신민철',
    },
    room2: {
      code: 'tbd-lee',
      title: '모르니까 만들었습니다, 웹 브라우저',
      titleEn: "I Didn't Know It, So I Built One: A Web Browser",
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
    endTime: '18:30',
    type: 'full',
    tag: 'lightning',
    code: 'lightning-talk',
    title: '라이트닝 토크',
    titleEn: 'Lightning Talk',
    speaker: '',
  },
];

// 상세 페이지용 룩업: row 컨텍스트(시간/방)와 세션 데이터를 함께 반환
export function findSessionByCode(code) {
  for (const row of schedule) {
    if (row.type === 'full' && row.code === code) {
      return {
        code: row.code,
        title: row.title,
        titleEn: row.titleEn,
        speaker: row.speaker,
        abstract: row.abstract,
        tag: row.tag,
        time: row.time,
        endTime: row.endTime,
        room: '6층 Main',
        roomEn: '6F Main',
      };
    }
    if (row.type === 'parallel') {
      for (const [key, label, labelEn] of [
        ['room1', '6층 Main', '6F Main'],
        ['room2', '7층 Room1', '7F Room1'],
      ]) {
        const r = row[key];
        if (r && r.code === code) {
          return {
            code: r.code,
            title: r.title,
            titleEn: r.titleEn,
            speaker: r.speaker,
            abstract: r.abstract,
            time: row.time,
            endTime: row.endTime,
            room: label,
            roomEn: labelEn,
          };
        }
      }
    }
  }
  return null;
}
