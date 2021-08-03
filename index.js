// DOM

const titleID = document.getElementById("title");
titleID.style.color = "red";
titleID.style.cssText = "font-size: 10px";
const body = document.querySelector("body");
// body.style.background = "grey";
// console.log(titleID.parentNode);
// console.log(titleID.childNode);

function changeTitle() {
  titleID.style.cssText = `
    color: red;
    background: yellow;
    font-size: 20px;
  `;
}
