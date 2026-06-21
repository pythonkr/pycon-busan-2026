// 발표자료(PDF): src/files/slides/<code>.pdf
// 발표자 아바타(speakerAvatars)와 동일하게 Vite glob으로 한 번만 로드
// 파일을 폴더에 넣기만 하면 자동으로 상세 페이지에 다운로드 버튼이 생김

const modules = import.meta.glob("../files/slides/*.pdf", {
  eager: true,
  query: "?url",
  import: "default",
});

export const sessionSlides = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const name = path
      .split("/")
      .pop()
      .replace(/\.pdf$/i, "");
    return [name, url];
  })
);
