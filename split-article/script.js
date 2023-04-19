const articleInput = document.getElementById("article-input");
const submitButton = document.getElementById("submit-button");
const articleOutput = document.getElementById("article-output");

submitButton.addEventListener("click", function () {
  const paragraphs = articleInput.value.split("\n");
  articleOutput.innerHTML = "";
  for (let i = 0; i < paragraphs.length; i++) {
    const articleBox = document.createElement("div");
    articleBox.classList.add("article-box");
    const paragraph = document.createElement("p");
    paragraph.innerText = paragraphs[i];
    articleBox.appendChild(paragraph);
    articleOutput.appendChild(articleBox);
  }
  articleInput.value = "";
});
