const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCX9NJ471o7Wie1DQe94RVIg&part=snippet%2Cid&order=date&maxResults=9";

const content = document.querySelector(".content__show") || null;

const options = {
  method: "GET",
  headers: {
    // Esta key no se debe mostrar
    "X-RapidAPI-Key": "6c8aec95f0mshc835fd1a770d505p1250bfjsn6fdebd898161",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
      ${videos.items
        .map(
          (video) => `
        <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
          <article class="content__video">
            <figure>
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" />
            </figure>
            <div>
              <p>
                ${video.snippet.title}
              </p>
            </div>
          </article>
        </a>
      `
        )
        .slice(0, 8)
        .join("")}
    `;

    content.innerHTML = view;
  } catch (e) {
    console.log(e);
    console.warn(e);
  }
})();
