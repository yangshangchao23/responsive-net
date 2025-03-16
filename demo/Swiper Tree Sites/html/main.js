// Swiper动画设置
const swiper = new Swiper(".swiper", {
  mousewheel: true,
  direction: "vertical",
  speed: 1700,
  parallax: true,
});

document.querySelectorAll(".header-content h1").forEach((e) => {
  // 拆分大标题文字为数组
  const words = e.textContent.split("");
  e.innerHTML = "";
  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.className = "letter";
    span.innerHTML = word;
    e.appendChild(span);
  });

  // 设置每个文字的z-index和动画时间
  e.querySelectorAll(".letter").forEach(function (l, i) {
    l.setAttribute(
      "style",
      `z-index: -${i}; transition-duration: ${i / 5 + 1}s`
    );
  });
});

swiper.on("slideChange", function () {
  document.querySelectorAll(".header-content__slide").forEach(function (e, i) {
    return swiper.activeIndex === i
      ? e.classList.add("active")
      : e.classList.remove("active");
  });
});
