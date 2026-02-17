function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //aplicar efeito de fade
  img.style.opacity = "0"

  //aguardar a transição e substituir a imagem
  setTimeout(() => {
    if (html.classList.contains("light")) {
      img.setAttribute("src", "assets/avatar-light.png")
    } else {
      img.setAttribute("src", "assets/avatar.png")
    }
    img.style.opacity = "1"
  }, 300)
}
