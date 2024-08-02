function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Mayk Brito com fundo roxo e azul para perfil")
  } else {
    //se tiver sem light mode, manter a imagem original
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Mayk Brito com fundo amarelo para perfil")
  }
}
