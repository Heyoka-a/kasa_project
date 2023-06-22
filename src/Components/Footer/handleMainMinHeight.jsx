function HandleMainMinHeight() {
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");
  main.style.minHeight = `calc(100vh - ${
    header.offsetHeight + footer.offsetHeight + 24
  }px)`;
}
export default HandleMainMinHeight;
