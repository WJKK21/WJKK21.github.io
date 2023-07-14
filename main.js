import { css } from "./css";

css();

const tagMaker = function (tagName, innerText, attributes) {
  let tag = document.createElement(tagName);

  if (innerText) {
    tag.innerText = innerText;
  }

  for (var key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      tag.setAttribute(key, attributes[key]);
    }
  }

  return root.appendChild(tag);
};

tagMaker("h2", "안녕하세요", { id: "haeder" });
tagMaker("div", "임지성입니다");
tagMaker("div", "");
tagMaker("img", "123", {
  src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  alt: "스크립트 꺼졌는데요?",
});
tagMaker("div", "verstand821@gmail.com ");
tagMaker("a", "깃허브", { link: "https://github.com/WJKK21" });
