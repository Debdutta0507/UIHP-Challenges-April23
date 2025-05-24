let post = undefined;

const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");
function dataToView() {
  jsInput.value = post===undefined?"What's on your mind?":post;
  jsDiv.textContent = post===undefined?"":post;
}

function handleInput() {
  post=jsInput.value
  dataToView();
}
function handleClick() {
  post = "";
  dataToView();
}
dataToView()

jsInput.onclick = handleClick;
jsInput.oninput = handleInput;
