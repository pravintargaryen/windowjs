const h = document.querySelector(".heading")
const p = document.querySelector(".para")

window.addEventListener("resize", {
  h.innerHTML = `<h1>Your Screen Resolution is</h1>`
  p.innerHTML = window.innerWidth + " X " + window.innerHeight
} )
