# 발표자료 (Presentation slides)

세션 상세 페이지에 노출되는 발표자료 PDF를 두는 폴더입니다.

## 올리는 방법

1. PDF 파일명을 **세션 `code`** 와 똑같이 맞춥니다. (`code`는 `src/data/schedule.js`에서 확인)
2. 이 폴더(`src/files/slides/`)에 `<code>.pdf` 로 넣습니다.

```
src/files/slides/
  ├─ ai-pair-programming.pdf
  ├─ pandas-3.pdf
  └─ cpython-3-15.pdf
```

코드 수정 없이 상세 페이지에 자동으로 "발표자료" 섹션과 다운로드 버튼이 생깁니다.
(자동 연결 로직: `src/data/sessionSlides.js`)

## 발표 영상은?

영상은 파일이 아니라 `src/data/sessionDetails.js`에서 세션별로 `youtubeId` 한 줄만 추가하면 됩니다.

```js
"ai-pair-programming": {
  // ...기존 bio / description...
  youtubeId: "dQw4w9WgXcQ",
},
```
