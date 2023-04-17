const form = document.querySelector("form");
let memeCount = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  memeCount++;

  const memePage = document.querySelector(".memepage");
  const memeDiv = document.createElement("div");
  const topBannerDiv = document.createElement("div");
  const imgWrapperDiv = document.createElement("div");
  const removeDiv = document.createElement("div");
  const botBannerDiv = document.createElement("div");
  const topTextInput = document.querySelector("#topText");
  const bottomTextInput = document.querySelector("#botText");
  const imgUrlInput = document.querySelector("#url");

  if (!topTextInput.value || !bottomTextInput.value || !imgUrlInput.value) {
    alert("Please fill in all fields before submitting!");
    return;
  }

  const memeId = "meme-" + memeCount;

  memeDiv.classList.add("meme");
  memeDiv.setAttribute("id", memeId);
  topBannerDiv.classList.add("topBanner");
  topBannerDiv.setAttribute("id", "topBanner-" + memeId);
  imgWrapperDiv.classList.add("img-wrapper", "img-" + memeId);
  removeDiv.classList.add("remove");
  removeDiv.textContent = "X";
  botBannerDiv.classList.add("botBanner");
  botBannerDiv.setAttribute("id", "botBanner-" + memeId);
  memeDiv.appendChild(topBannerDiv);
  memeDiv.appendChild(imgWrapperDiv);
  memeDiv.appendChild(removeDiv);
  memeDiv.appendChild(botBannerDiv);
  memePage.appendChild(memeDiv);

  const memeImg = document.querySelector(".memepage .img-" + memeId);
  const topText = document.querySelector(".memepage #topBanner-" + memeId);
  const bottomText = document.querySelector(".memepage #botBanner-" + memeId);

  memeImg.style.backgroundImage = "url('" + imgUrlInput.value + "')";
  topText.innerText = topTextInput.value;
  bottomText.innerText = bottomTextInput.value;

  topTextInput.value = "";
  bottomTextInput.value = "";
  imgUrlInput.value = "";

  removeDiv.addEventListener("mouseover", function () {
    removeDiv.style.color = "white";
    removeDiv.style.cursor = "pointer";
  });

  removeDiv.addEventListener("mouseout", function () {
    removeDiv.style.backgroundColor = "";
    removeDiv.style.color = "";
    removeDiv.style.cursor = "";
  });

  removeDiv.addEventListener("click", function () {
    memeDiv.remove();
  });
});
