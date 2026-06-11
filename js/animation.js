// Split bogstaver op for h1 og .animer elementer
document.querySelectorAll("h1, .animer").forEach((el) => {
  const tekst = el.textContent;
  el.innerHTML = tekst
    .split("")
    .map((bogstav, i) => `<span style="animation-delay: ${i * 0.05}s">${bogstav === " " ? "&nbsp;" : bogstav}</span>`)
    .join("");
});

// Observer der tilføjer klassen når elementet er synligt
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("synlig");
    }
  });
});

document.querySelectorAll("h1, .animer").forEach((el) => {
  observer.observe(el);
});
