// 발표자 아바타 이미지: src/images/speakers/<code>.{jpg|jpeg|png}
// Vite glob으로 한 번만 로드, 리스트/상세 양쪽에서 공유

const modules = import.meta.glob("../images/speakers/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
});

export const speakerAvatars = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const name = path
      .split("/")
      .pop()
      .replace(/\.(jpg|jpeg|png)$/i, "");
    return [name, url];
  })
);
