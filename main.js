const root = document.getElementById("root");

document.querySelector("body").style.margin = "0";

root.style.width = "100vw";
root.style.height = "100vh";
root.style.backgroundColor = "slategray";
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.alignItems = "center";

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

tagMaker("div", "안녕하세요", { id: "haeder" });
tagMaker("div", "웹 개발을 하고 있는 임지성입니다");
tagMaker("div", "");
/* tagMaker("img", "123", {
  src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  alt: "스크립트 꺼졌는데요?",
}); */
tagMaker("div", "verstand821@gmail.com ");
tagMaker("a", "GitHub", {
  href: "https://github.com/WJKK21",
  target: "_blank",
});
tagMaker("a", "프로젝트1", {
  href: "https://github.com/WJKK21/KDT-2-Project-C-5",
  target: "_blank",
});
tagMaker("a", "프로젝트2", {
  href: "https://github.com/WJKK21/KDT-2-Project-B-5",
  target: "_blank",
});
tagMaker("a", "프로젝트3", {
  href: "https://github.com/WJKK21/KDT-2-Project-A-5",
  target: "_blank",
});
