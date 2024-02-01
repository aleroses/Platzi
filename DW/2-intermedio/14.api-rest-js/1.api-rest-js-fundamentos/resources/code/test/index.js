// Obtener imágenes de gatos aleatorias
async function getRandomCatImages() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=3');
    const data = await response.json();

    const catImages = data.map((cat) => cat.url);

    return catImages;
  } catch (error) {
    console.error('Error al obtener las imágenes de gatos', error);
    return [];
  }
}

// Marcar una imagen como favorita
async function markAsFavorite(imageId, subId) {
  try {
    const rawBody = JSON.stringify({
      image_id: imageId,
      sub_id: subId,
    });

    const response = await fetch('https://api.thecatapi.com/v1/favourites', {
      method: 'POST',
      headers: { 'x-api-key': "live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY", 'Content-Type': 'application/json' },
      body: rawBody,
    });

    const data = await response.json();

    return data.id;
  } catch (error) {
    console.error('Error al marcar la imagen como favorita', error);
    return null;
  }
}

// Obtener las imágenes favoritas
async function getFavoriteImages(subId) {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/favourites?sub_id=${subId}`, {
      headers: {
        'x-api-key': "live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY",
      },
    });

    const data = await response.json();

    const favoriteImages = data.map((favorite) => favorite.image.url);

    return favoriteImages;
  } catch (error) {
    console.error('Error al obtener las imágenes favoritas', error);
    return [];
  }
}

// Función principal para mostrar las imágenes y manejar los favoritos
async function showCatImages() {
  const catImages = await getRandomCatImages();
  const favorites = await getFavoriteImages('TU-ID-DE-USUARIO');

  const container = document.getElementById('cat-images-container');
  container.innerHTML = '';

  catImages.forEach((imageUrl) => {
    const image = document.createElement('img');
    image.src = imageUrl;
    container.appendChild(image);

    const favoriteButton = document.createElement('button');
    favoriteButton.textContent = favorites.includes(imageUrl) ? 'Quitar de favoritos' : 'Marcar como favorito';
    favoriteButton.addEventListener('click', async () => {
      if (favorites.includes(imageUrl)) {
        // Si ya es favorito, quitar de favoritos
        // Aquí puedes agregar el código para eliminar la imagen de favoritos
      } else {
        // Si no es favorito, marcar como favorito
        const favoriteId = await markAsFavorite(imageUrl, 'TU-ID-DE-USUARIO');
        console.log(`Imagen marcada como favorita con ID ${favoriteId}`);
      }
    });

    container.appendChild(favoriteButton);
  });
}

// Llamar a la función principal para mostrar las imágenes
showCatImages();