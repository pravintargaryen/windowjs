const h = document.querySelector(".heading")
const p = document.querySelector(".para")

window.addEventListener("resize", () => {
  h.textContent = "Your Screen Resolution is"
  p.textContent = window.innerWidth + " X " + window.innerHeight
}
 )
