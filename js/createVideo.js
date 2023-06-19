import { connectApi } from "./apiConnection.js";

const formsElement = document.querySelector("[data-forms]");

async function createVideo(event) {
  event.preventDefault();

  const title = document.querySelector("[data-title]").value;
  const url = document.querySelector("[data-url]").value;
  const image = document.querySelector("[data-image]").value;
  const description = Math.floor(Math.random() * 10).toString();

  try {
    await connectApi.addVideo(title, description, url, image);

    window.location.href = "../pages/envio-concluido.html";
  } catch (err) {
    console.log(err);
    alert(err);
  }
}

formsElement.addEventListener("submit", event => createVideo(event));