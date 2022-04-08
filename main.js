const articles = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const btnClose = document.querySelector(".btnClose");

const aside_txtBox = aside.querySelector(".txtBox");
const aside_vidBox = aside.querySelector("video");
const txt_h2 = aside_txtBox.querySelector("h2");
const txt_p = aside_txtBox.querySelector("p");

articles.forEach((article) => {
  article.addEventListener("mouseenter", (e) => {
    e.currentTarget.querySelector("video").play();
  });
  article.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });

  article.addEventListener("click", (e) => {
    const article_h2 = e.currentTarget.querySelector("h2").textContent;
    const article_p = e.currentTarget.querySelector("p").textContent;
    const article_videoSrc = e.currentTarget
      .querySelector("video")
      .getAttribute("src");

    txt_h2.innerText = article_h2;
    txt_p.innerText = article_p;
    aside_vidBox.setAttribute("src", article_videoSrc);
    aside.classList.add("on");
  });
});

btnClose.addEventListener("click", () => {
  aside.classList.remove("on");
  setTimeout(() => {
    txt_h2.innerText = "";
    txt_p.innerText = "";
    aside_vidBox.setAttribute("src", "");
  }, 600);
});
