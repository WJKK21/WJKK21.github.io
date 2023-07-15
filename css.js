export function css() {
  const root = document.getElementById("root");

  document.querySelector("body").style.margin = "0";

  root.style.width = "100vw";
  root.style.height = "100vh";
  root.style.backgroundColor = "slategray";
  root.style.display = "flex";
  root.style.flexDirection = "column";
  root.style.alignItems = "center";
}
