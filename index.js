const h = document.querySelector(".heading")
const p = document.querySelector(".para")

window.addEventListener("load", () => {
  h.textContent = "Your Viewport Resolution is"
  p.textContent = window.innerWidth + " X " + window.innerHeight
  
})

window.addEventListener("resize", () => {
  h.textContent = "Your Screen Resolution is"
  p.textContent = window.innerWidth + " X " + window.innerHeight
}
 )
