# PyConKR-Busan2026

PyCon Busan 2026 공식 웹사이트

## 프로젝트 개요

부산에서 개최되는 PyCon Korea 2026 행사를 위한 정적 웹사이트입니다. React와 Vite를 사용하여 구축되었으며, GitHub Pages를 통해 배포됩니다.

## 기술 스택

- **Frontend**: React 18
- **Build Tool**: Vite
- **Routing**: React Router (HashRouter)
- **Deployment**: GitHub Pages

## 개발 환경 설정

### 요구사항

- Node.js 18 이상
- npm 또는 yarn

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버는 `http://localhost:5173/2026/`에서 실행됩니다. (Vite `base`가 `/2026/`이므로 루트 `/`로 접근하면 404가 납니다.)

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 디렉토리에 생성됩니다.

### 빌드 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
src/
  components/       # 재사용 가능한 컴포넌트
    Navbar.jsx
    Hero.jsx
    TimetableList.jsx
    TimetableItem.jsx
  data/            # 데이터 파일
    schedule.js    # 일정 데이터
  pages/           # 페이지 컴포넌트
    Home.jsx
    Timetable.jsx
  App.jsx          # 메인 App 컴포넌트
  main.jsx         # 엔트리 포인트
```

## 일정 업데이트

일정을 업데이트하려면 `src/data/schedule.js` 파일을 수정하세요.

각 세션은 다음 구조를 따릅니다:

```javascript
{
  id: 1,
  time: '09:00',
  title: '세션 제목',
  speaker: '발표자 이름',
  room: '발표 장소'
}
```

## GitHub Pages 배포

`main` 브랜치에 푸시되면 `.github/workflows/deploy.yml`이 자동으로 빌드 → `busan.pycon.kr/2026/` 경로에 배포합니다.

최초 1회 설정 (리포 관리자):

1. Repo Settings → Pages → Source: **GitHub Actions**
2. Repo Settings → Actions → General → Workflow permissions: **Read and write permissions**
3. DNS: `busan.pycon.kr` CNAME → `pythonkr.github.io.` (`pycon.kr` zone에 `busan` 서브도메인 CNAME 추가)
4. DNS 전파 후 Pages 설정에서 **Enforce HTTPS** 활성화

루트(`busan.pycon.kr/`) 접근 시 `/2026/`으로 meta-refresh 됩니다.

## 라이선스

Apache License 2.0

