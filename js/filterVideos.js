import { connectApi } from "./apiConnection.js";
import createCard from "./showVideos.js";

async function getVideos(event) {
  event.preventDefault();

  const searchElement = document.querySelector("[data-search]").value;
  const get = await connectApi.filterVideos(searchElement);

  const videoListElement = document.querySelector("[data-list]");

  videoListElement.innerHTML = "";

  get.forEach(element => videoListElement.appendChild(
    createCard(element.titulo, element.descricao, element.url, element.imagem)));

  if (get.length == 0) {
    videoListElement.innerHTML = `
      <h2 class="mensagem__titulo">Não encontramos nenhum video com esses termos.</h2>
    `;
  }
}

const searchBtnElement = document.querySelector("[data-searchBtn]");
searchBtnElement.addEventListener("click", event => getVideos(event));