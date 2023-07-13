document.querySelector("body").style.margin = "0";

const root = document.getElementById("root");

root.style.width = "100vw";
root.style.height = "100vh";
root.style.backgroundColor = "darkgray";
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
tagMaker("div", "임지성입니다");
tagMaker("div", "");
tagMaker("img", "123", {
  src: "https://images.velog.io/images/goblin820/post/68db173f-a375-4209-b4e6-f08191f7916c/VelogThumbnail_1.png",
  alt: "스크립트 꺼졌는데요?",
});
tagMaker("div", "verstand821@gmail.com ");

const MyName = document.querySelector(".MyName");
MyName.style.display = "flex";
MyName.style.justifyContent = "center";
