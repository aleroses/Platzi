# Test

Analiza la siguiente información de una api de gatos. Recuerda que no tienes que preocuparte por acceder a los enlaces que se muestran, solo debes usarlos según corresponda:

Quick start
Click on this to get a random Image `https://api.thecatapi.com/v1/images/search`

Muestra:

```json
[
  {
    "id": "3ht",
    "url": "https://cdn2.thecatapi.com/images/3ht.jpg",
    "width": 1037,
    "height": 692
  }
]
```

Click this to get 10 random images `https://api.thecatapi.com/v1/images/search?limit=10`

Obtenemos:

```json
[
  {
    "id": "se",
    "url": "https://cdn2.thecatapi.com/images/se.jpg",
    "width": 320,
    "height": 240
  },
  {
    "id": "22b",
    "url": "https://cdn2.thecatapi.com/images/22b.jpg",
    "width": 320,
    "height": 240
  },
  {
    "id": "4pv",
    "url": "https://cdn2.thecatapi.com/images/4pv.gif",
    "width": 500,
    "height": 281
  },
  {
    "id": "MjAyMTgwNA",
    "url": "https://cdn2.thecatapi.com/images/MjAyMTgwNA.jpg",
    "width": 590,
    "height": 392
  },
  {
    "id": "ctHlkAH3L",
    "url": "https://cdn2.thecatapi.com/images/ctHlkAH3L.jpg",
    "width": 1080,
    "height": 1350
  }
]
```

Copy this link, add your own API Key to get 10 bengal images `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME`

Getting Images
To get more than 10, and additional fields then be sure to use your API Key from the welcome email as the 'x-api-key' header, or ?api_key= query string parameter to access all the images and data.

What's in the Array of Images

Each contains the url for the image file, along with its width, height and breed information (if available), any favourite or vote you create would also be returned.

Example Response (Array of Image Objects)
[{
"id":"ebv",
"url":"https://cdn2.thecatapi.com/images/ebv.jpg",
"width":176,"height":540,
"breeds":[],
"favourite":{}
}]

Query Parameters (only used with a valid API Key)

name type description default
limit 1-100 Number of images to return between 1
page 0-n The page number to use when Paginating through the images 0
order ASC/DESC/RAND The Order to return the images in by their upload date. RAND = random RAND
has_breeds 1 or 0 Only return images that have breed information 0
breed_ids Comma delimited string The IDs of the breeds to filter the images. e.g. ?breed_ids=beng,abys none
category_ids Comma delimited string The IDs of the categories to filter the images. e.g. ?breed_ids=1,5,14 none
sub_id String Filter images that have the sub_id value you used when uploading them none

Getting more than 1 Image

By default only 1 image is returned. To increase this use the limit query string parameter

`https://api.thecatapi.com/v1/images/search?limit=10`
Note there is a maximum of 10 without using an API Key

Getting One Image by ID
You can retrieve an individual Image by using it's unique ID

Example Request URL

`https://api.thecatapi.com/v1/images/0XYvRd7oD`

Obtenemos:

```json
{
  "id": "0XYvRd7oD",
  "url": "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
  "breeds": [
    {
      "weight": {
        "imperial": "7  -  10",
        "metric": "3 - 5"
      },
      "id": "abys",
      "name": "Abyssinian",
      "indoor": 0,
      "lap": 1,
      "social_needs": 5,
      "rex": 0,
      "suppressed_tail": 0,
      "short_legs": 0,
      "wikipedia_url": "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
      "hypoallergenic": 0,
      "reference_image_id": "0XYvRd7oD"
    }
  ],
  "width": 1204,
  "height": 1445
}
```

Example Response

```json
{
  "id": "0XYvRd7oD",
  "width": 1204,
  "height": 1445,
  "url": "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
  "breeds": [
    {
      "weight": {
        "imperial": "7  -  10",
        "metric": "3 - 5"
      },
      "id": "abys",
      "name": "Abyssinian",
      "temperament": "Active, Energetic, Independent, Intelligent, Gentle",
      "origin": "Egypt",
      "country_codes": "EG",
      "country_code": "EG",
      "life_span": "14 - 15",
      "wikipedia_url": "https://en.wikipedia.org/wiki/Abyssinian_(cat)"
    }
  ]
}
```

## Favouriting & UnFavouriting Images

`https://api.thecatapi.com/v1/favourites`

Create a Favourite
To allow your Users to Favourite a particular Image, you need to create a 'Favourite' via POST ./favourites, passing:

{
"image_id":"id of the image",
"sub_id":"optional unique id of your user"
}

This will return:

{
"id":"unique-id-of-the-new-favourite"
}

Request Example

```json
var rawBody = JSON.stringify({
"image_id": "id-of-image-to-favourite",
"sub_id":"user-123"
 });

const newFavourite = await fetch(
"https://api.thecatapi.com/v1/favourites",
    {
        method: 'POST',
        headers: { 'x-api-key': 'YOUR-KEY'} ,
        body: rawBody
    }
)
```

Getting Favourites
Retrieve any created Favourites via GET `https://api.thecatapi.com/v1/favourites` . This can be filtered by sub_id, and paginated using page and limit Query string parameters.

Optional query paramaters:

name values description
attach_image 1 or 0 Add the Image matching the image_id to the response
image_id string Filter favourites to those with matching image_id
sub_id string Filter favourites to those with matching sub_id
page 0-n paginate through the favourites
limit 1-100 number of favourites to return at once
order ASC, DESC order to return by created_at. Default ASC

Response Example:

```json
[{
"id":100038507,
"image_id":"E8dL1Pqpz",
"sub_id":null,
"created_at":"2022-07-10T12:24:39.000Z",
"image":{
    "id":"E8dL1Pqpz",
    "url":"https://cdn2.thecatapi.com/images/E8dL1Pqpz.jpg"
    }
},
{ ... }]
```

Getting Favourites by 'sub_id'

This example shows getting the 20 latest Favourites for 'user-123'

```js
const response = await fetch(
  "https://api.thecatapi.com/v1/favourites?limit=20&sub_id=user-123&order=DESC",
  {
    headers: {
      "content-type": "application/json",
      "x-api-key": "YOUR-KEY",
    },
  }
);
const favourites = await response.json();
```

Deleting Favourites

DELETE `https://api.thecatapi.com/v1/favourites/:favouriteId`

```js
const favouriteId = "id-of-favourite-to-delete";
var requestOptions = {
  method: "DELETE",
  headers,
};

await fetch(
  `https://api.thecatapi.com/v1/favourites/${favouriteId}`,
  requestOptions
);
```

Según toda esta información quiero que corrijas mi código. El objetivo de mi código es añadir algunos gatos random, añadirlos como favoritos, mostrarlos todos mis favoritos y eliminar los que ya no me gusten.

### Mi codigo

random.mjs
import { showImages } from "./main.mjs";

const randomImg = () => {
  const randomButton =
    document.querySelector("button");

  randomButton.addEventListener(
    "click",
    showImages
  );
};

export { randomImg };

parameters.mjs

const URLRANDOM =
  "https://api.thecatapi.com/v1/images/search";
const URLFAVORITES =
  "https://api.thecatapi.com/v1/favourites";
const URLDELETE = id => {
  `https://api.thecatapi.com/v1/favourites/:${id}`;
};
const APIKEY =
  "live_W59yADfCl0zz50jHsAElmhFZEyJV6jC9RT3YY5Q43cP78HvD8XNGH80daxZBiTzY";
const KEY = [/* "&", */ "api_key=", APIKEY].join(
  ""
);

const queryRandom = [
  URLRANDOM,
  "?",
  "limit=",
  3,
  "&",
  KEY,
].join("");

const queryFavorites = [
  URLFAVORITES,
  "?",
  KEY,
].join("");
console.log(queryFavorites);

/* const queryDelete = [
  URLDELETE, 
] */

// ?limit=10

export {
  URLRANDOM,
  URLFAVORITES,
  URLDELETE,
  APIKEY,
  KEY,
  queryRandom,
  queryFavorites,
};

main.mjs
import { randomImg } from "./random.mjs";
import { fetchData } from "./methods/get.mjs";
import { favorites } from "./methods/post.mjs";
import { getFavorites } from "./methods/get-favorites.mjs";
import { deleteFavorites } from "./methods/delete-favorites.mjs";

const showImages = async () => {
  const data = await fetchData();

  const container =
    document.querySelector(".container");
  container.innerHTML = "";
  // let content = "";

  data.map(img => {
    const figure = document.createElement("figure");
    figure.className = "random-cats";

    const image = document.createElement("img");
    image.className = "cat-image";
    image.src = img.url;
    image.alt = "";
    figure.appendChild(image);

    const button = document.createElement("button");
    button.className = "like-button";
    button.innerHTML = "💙";
    button.addEventListener("click", () => {
      favorites(img.id);
      loadFavorites();
    });
    figure.appendChild(button);

    container.appendChild(figure);
  });
};

const loadFavorites = async () => {
  const data = await getFavorites();

  const container = document.querySelector(
    ".favorite-cats"
  );
  container.innerHTML = "";

  data &&
    data.map(favorite => {
      //console.log(favorite.id);
      const figure =
        document.createElement("figure");
      figure.className = "delete";
      const image = document.createElement("img");
      image.src = favorite.image.url;
      image.className = "favorite-cat";

      const button =
        document.createElement("button");
      button.className = "delete-button";
      button.innerHTML = "❌";
      button.addEventListener("click", () => {
        deleteFavorites(favorite.id);
      });

      figure.append(image);
      figure.append(button);
      container.append(figure);
    });
};

// window.addEventListener("load", showImages);
showImages();
randomImg();
loadFavorites();

export { showImages, loadFavorites };

index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="./css/styles.css" />
    <title>API Cat</title>
  </head>
  <body>
    <h1>Practice</h1>
    <main>
      <section class="container">
        <!-- Content
      <figure class="random-cats">
        
        <img src="" alt=""> 
      </figure>
    -->
      </section>

      <button type="button" class="random-button">
        Random
      </button>
    </main>
    <section class="favorite-cats">
      <!-- <figure class="favorite-cats">
        Content 
        <img src="" alt=""> 
      </figure>-->
      <!-- <button type="button">🔥</button> -->
    </section>

    <script src="./main.mjs" type="module"></script>
  </body>
</html>

delete-favorites.mjs
import {
  URLDELETE,
  APIKEY,
} from "./parameters.mjs";

const deleteFavorites = async id => {
  const response = await fetch(URLDELETE(id), {
    method: "DELETE",
    headers: { "x-api-key": APIKEY },
  });

  if (response.status === 200) {
    const data = await response.json();

    console.log("Delete: ", response);
    console.log("Data: ", data);
  } else {
    console.log(response.status);
  }
};

export { deleteFavorites };

post.mjs
import {
  APIKEY,
  URLFAVORITES,
} from "./parameters.mjs";
import { loadFavorites } from "../main.mjs";

const favorites = async id => {
  const response = await fetch(URLFAVORITES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": APIKEY,
    },
    body: JSON.stringify({
      image_id: id,
      sub_id: "user-123",
    }),
  });

  if (response.status === 200) {
    const data = await response.json();
    /* console.log("Save: Post ❤💜💙", response);
    console.log("Data: Post ❤💜💙", data); */
    //return data;

    // función cargar favoritos()
    //loadFavorites();
  } else {
    console.log("xd", response.status);
  }
};

export { favorites };

get-favorites.mjs
import {
  URLFAVORITES,
  queryFavorites,
} from "./parameters.mjs";

const getFavorites = async () => {
  const response = await fetch(queryFavorites);

  if (response.status === 200) {
    const data = await response.json();

    /* console.log("Favorites");
    console.log(data); */
    return data;
  }
};

export { getFavorites };

get.mjs
import { queryRandom } from "./parameters.mjs";

const fetchData = async () => {
  const response = await fetch(queryRandom);
  const data = await response.json();

  // console.log(data);
  return data;
};

export { fetchData };

Ayudame a corregir mi código y a poder eliminar los que se añadan a favoritos. No te preocupes por no poder acceder a los enalces colocados ya que solo son de referencia, te he colocado toda la información que necesitas.