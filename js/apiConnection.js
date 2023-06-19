async function videoList() {
  const connection = await fetch("http://localhost:3000/videos");
  const connectionToJson = await connection.json();

  return connectionToJson;
}

async function addVideo(titulo, descricao, url, imagem) {
  const connection = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem
    })
  });

  if (!connection.ok) throw new Error("Não foi possível enviar o vídeo.");

  const connectionToJson = await connection.json();

  return connectionToJson;
}

async function filterVideos(query) {
  const connection = await fetch(`http://localhost:3000/videos?q=${query}`);
  const connectionToJson = await connection.json();

  return connectionToJson;
}

export const connectApi = {
  videoList,
  addVideo,
  filterVideos,
};