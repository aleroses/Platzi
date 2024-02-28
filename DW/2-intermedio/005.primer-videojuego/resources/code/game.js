/**
 * @type {HTMLCanvasElement}
**/

// Resumenen de cada punto:
// 1. Definir el tamaño del canvas
// 2. Renderizar el mapa
//  2.1 Definir el tamaño de cada emoji
// 3. Renderizar emoji del player
// 4. Mover emoji del player
//  4.1 Hacer funcionar los botones de pantalla
//  4.2 Hacer funcionar los keyboard
// 5. Detectar colisión: player vs gift
// 6. Detectar colisión: player vs enemy bomb
// 7. Renderizar el siguiente mapa
// 8. Quitar vidas 
// 9. Mostrar vidas en pantalla
// 10. Agregar un temporizador 
// 11. Guardar record en el navegador
//  11.1 game_win

// errores
// si pierdo las 3 vidas el cronometro arranca sin que se empiece a jugar

const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btn_up = document.querySelector('#up');
const btn_left = document.querySelector('#left');
const btn_right = document.querySelector('#right');
const btn_down = document.querySelector('#down');
const span_lives = document.querySelector('#lives');
const span_time = document.querySelector('#time');
const span_record = document.querySelector('#record');
const p_result = document.querySelector('#result');
const btn_reset = document.querySelector('#reset');

let canvas_size;
let elements_size;
let level = 0;
let lives = 3;
let start_time;
let interval_time;

const player_position = {
    x: undefined,
    y: undefined,
};
const gift_position = {
    x: undefined,
    y: undefined,
}

let bomb_position = [];

window.addEventListener('load', calculate_canvas_size);
window.addEventListener('resize', calculate_canvas_size);
window.addEventListener('keydown', move_by_keys);

btn_up.addEventListener('click', move_up);
btn_left.addEventListener('click', move_left);
btn_right.addEventListener('click', move_right);
btn_down.addEventListener('click', move_down);
btn_reset.addEventListener('click', reset_game);

function calculate_canvas_size(){
    window.innerHeight > window.innerWidth
    ? canvas_size = Math.ceil(window.innerWidth * 0.8)
    : canvas_size = Math.ceil(window.innerHeight * 0.8)

    canvas.setAttribute('width', canvas_size);
    canvas.setAttribute('height', canvas_size);

    render_mapa();
}

function render_mapa(){
    elements_size = Math.ceil((canvas_size * 0.1)-1);
    game.font = `${elements_size}px Verdana`

    const map_number = maps[level];
    if(!map_number){
        game_win();
        return;
    }

    const map = (map_number.trim().split('\n')).map(x => x.trim().split(''));

    bomb_position = [];
    map.forEach((row, ri) => { // element, index
        row.forEach((col, ci) => {
            const emoji = emojis[col];
            const x = elements_size * ci;
            const y = elements_size * (ri+1);
            
            if(col == 'O' && (!player_position.x && !player_position.y)){
                player_position.x = x / elements_size;
                player_position.y = y / elements_size;
            }else if(col == 'I'){
                gift_position.x = x / elements_size;
                gift_position.y = y / elements_size;
            }else if(col == 'X'){
                bomb_position.push({
                    x: x / elements_size,
                    y: y / elements_size,
                })
            }


            game.fillText(emoji, x, y);
        });
    });
    render_player();
    show_lives();
    show_record();
}

function render_player(){
    const gift_collision_x = gift_position.x == player_position.x;
    const gift_collision_y = gift_position.y == player_position.y; 
    const gift_collision = gift_collision_x && gift_collision_y;

    const bomb_collision = bomb_position.find(bomb => {
        const bomb_collision_x = bomb.x == player_position.x;
        const bomb_collision_y = bomb.y == player_position.y;
        return bomb_collision_x && bomb_collision_y;
    })

    if(gift_collision){
        level_win();
        console.log('Your passed to the next level');
    }
    if(bomb_collision){
        level_fail();
        console.log('You collided with a bomb!!');
    }

    game.fillText(emojis['PLAYER'], player_position.x*elements_size, player_position.y*elements_size);
}
function level_win(){
    level++;
    calculate_canvas_size();
}
function level_fail(){
    lives--;
    if(lives == 0){
        level = 0;
        lives = 3;
    }

    player_position.x = undefined;
    player_position.y = undefined;
    calculate_canvas_size();
}
function game_win(){
    clearInterval(interval_time);

    player_position.x = undefined;
    player_position.y = undefined;
    game.font = `bold ${elements_size}px Verdana`
    game.textAlign = 'center';
    game.fillText('You Win 🏆', canvas_size / 2, canvas_size / 2);

    // Tiempo anterior vs el nuevo tiempo del jugador
    const last_record = localStorage.getItem('record_time');
    const new_player_time = Date.now() - start_time;

    if(last_record){
        // Si el record anterior es mas alto, reemplazalo por el nuevo
        if(last_record > new_player_time){
            localStorage.setItem('record_time', new_player_time);
            // Rompiste el record
            p_result.innerText = "You beat the record 😌";
        }else{
            p_result.innerText = "Sorry, you don't beat the record"
        }
    }else{
        localStorage.setItem('record_time', new_player_time);
        p_result.innerText = "New to the game, huh! Try to beat your time..."
    }
}
function show_lives(){
    span_lives.innerText = emojis['HEART'].repeat(lives);
    // Otra forma de mostrar los hearts: 
    // const hearts_array = Array(lives).fill(emojis['HEART']);

    // span_lives.innerText = '';
    // hearts_array.forEach(heart => span_lives.append(heart));
}
function calculate_time(){
    if(!start_time){
        start_time = Date.now();
        interval_time = setInterval(show_time, 100);
    }
}
function show_time(){
    span_time.innerText = Date.now() - start_time;
}
function show_record(){
    span_record.innerText = localStorage.getItem('record_time');
}
function reset_game(){
    location.reload();
}

function move_by_keys(event){
    // console.log(event.key);
    if(event.key == 'ArrowUp') move_up();
    else if(event.key == 'ArrowLeft') move_left();
    else if(event.key == 'ArrowRight') move_right();
    else if(event.key == 'ArrowDown') move_down();
}
function move_up(){
    if(player_position.y > 1){
        player_position.y -= 1;
    }
    calculate_canvas_size();

    if(level < maps.length){
        calculate_time();
        show_time();
    }
}
function move_left(){
    if(player_position.x > 0){
        player_position.x -= 1;
    }
    calculate_canvas_size();
}
function move_right(){
    if(player_position.x < 9){
        player_position.x += 1;
    }
    calculate_canvas_size();
}
function move_down(){
    if(player_position.y < 10){
        player_position.y += 1;
    }
    calculate_canvas_size();
}
// registro de la consola


// Código de la clase 
/* const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const spanLives = document.querySelector('#lives');
const spanTime = document.querySelector('#time');
const spanRecord = document.querySelector('#record');
const pResult = document.querySelector('#result');

let canvasSize;
let elementsSize; //10%
let level = 0;
let lives = 3;
let timeStart;
let timePlayer;
let timeInterval;

const playerPosition = {
    x: undefined,
    y: undefined,
};
const giftPosition = {
    x: undefined,
    y: undefined,
};
let enemyPositions = [];

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize(){
    // Medidas del canvas
    if(window.innerHeight > window.innerWidth){
        canvasSize = window.innerWidth * 0.8;
    }else{
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    startGame();
}

function startGame(){
    // Renderizar Mapa
    elementsSize = (canvasSize * 0.1);
    game.font = `${elementsSize}px Verdana`;
    game.textAlign = "end";

    const map = maps[level];

    if(!map){
        console.log();
        gameWin();
        return;
    }
    if(!timeStart){
        timeStart = Date.now();
        timeInterval = setInterval(showTime, 100);

        showRecord(); // mostrar record
    }

    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    // console.log({map, mapRows, mapRowCols});

    showLives();
    enemyPositions = [];
    game.clearRect(0,0, canvasSize, canvasSize);
    mapRowCols.forEach((row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);

            if(col == 'O'){
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY;
                    // console.log({playerPosition});
                }
            } else if (col == 'I'){
                giftPosition.x = posX;
                giftPosition.y = posY;
            } else if(col == 'X'){
                enemyPositions.push({
                    x: posX,
                    y: posY,
                });
            }

            game.fillText(emoji, posX, posY)
        })
    });

    movePlayer();
}

function movePlayer(){
    const giftCollisionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftCollisionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftCollision = giftCollisionX && giftCollisionY;

    if(giftCollision){
        levelWin();
    }

    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollisionX = enemy.x.toFixed(3) == playerPosition.x.toFixed(3);
        const enemyCollisionY = enemy.y.toFixed(3) == playerPosition.y.toFixed(3);
        return enemyCollisionX && enemyCollisionY;
    });
    
    if(enemyCollision){
        levelFail();
    }

    game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

function levelWin(){
    console.log('Win');;
    level++;
    startGame();
}

function levelFail(){
    lives--;

    if(lives <= 0){
        level = 0;
        lives = 3;
        timeStart = undefined;
    }

    playerPosition.x = undefined;
    playerPosition.y = undefined;
    startGame();
}

function gameWin(){
    console.log('Terminaste el juego');
    clearInterval(timeInterval);

    const recordTime = localStorage.getItem('record_time');
    const playerTime = Date.now() - timeStart;
    
    if(recordTime){
        if(recordTime >= playerTime){ //menor
            localStorage.setItem('record_time', playerTime);
            pResult.innerHTML = 'Superaste el record'
        }else{
            pResult.innerHTML = 'Lo siento, no superaste el record'
        }
    }else{
        localStorage.setItem('record_time', playerTime);
        pResult.innerHTML = 'Primera vez en el juego, trata de supera tu tiempo'
    }
    console.log({recordTime, playerTime});
}

function showLives(){   
    // Array de 3 espacios que llenamos con 3 corazones
    const heartsArray = Array(lives).fill(emojis['HEART']) // [1,2,3]
    
    spanLives.innerHTML = ''; // limpiamos corazones
    heartsArray.forEach(heart => spanLives.append(heart)); // adjuntar
}

function showTime(){
    spanTime.innerText = Date.now() - timeStart;
}
function showRecord(){
    spanRecord.innerText = localStorage.getItem('record_time');
}

window.addEventListener('keydown', moveBykeys); //keyup
btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

function moveBykeys(event){
    if (event.key == 'ArrowUp') moveUp();
    else if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if(event.key == 'ArrowDown') moveDown();
    // console.log(event); // revisar code or key: "ArrowUp"
}

function moveUp(){
    // console.log('arriba');
    if(playerPosition.y - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.y -= elementsSize;
        startGame();
    }
}
function moveLeft(){
    // console.log('izquierda');
    if(playerPosition.x - elementsSize < elementsSize){
        console.log('OUT');
    }else{
        playerPosition.x -= elementsSize;
        startGame();
    }
}
function moveRight(){
    // console.log('derecha');
    if(playerPosition.x + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.x += elementsSize;
        startGame();
    }
}
function moveDown(){
    // console.log('abajo');
    if(playerPosition.y + elementsSize > canvasSize){
        console.log('OUT');
    }else{
        playerPosition.y += elementsSize;
        startGame();
    }
} */
