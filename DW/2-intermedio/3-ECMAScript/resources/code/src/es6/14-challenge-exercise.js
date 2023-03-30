import { getData } from "./14-challenge-api.js";

/* export */ function solution() {
    // Tu código aquí 👈
    return getData()
        .then(respuesta => console.log(respuesta))
        .catch(error => console.log(error));
}

solution();