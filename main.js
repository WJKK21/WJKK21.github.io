const root = document.getElementById("root");

document.querySelector("body").style.margin = "0";
root.style.width = "100vw";
root.style.height = "100vh";
root.style.backgroundColor = "darkgray";
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.alignItems = "center";

const tagMaker = function (tagName, innerText, parent, className) {
  let a = document.createElement(tagName);
  a.innerText = innerText;
  a.setAttribute("class", className);
  return parent.appendChild(a);
};

tagMaker("div", "안녕하세요", root);
tagMaker("div", "웹 개발을 하고 있는 임지성입니다", root);
tagMaker("div", "  ", root);
tagMaker(
  "img scr = https://images.velog.io/images/rosarang/post/e42e7753-f6f8-439d-acf4-4911bcf1eac6/html.png",
  "",
  root
);
tagMaker("div", " verstad821@gmail.com ", root);

const MyName = document.querySelector(".MyName");
MyName.style.display = "flex";
MyName.style.justifyContent = "center";
