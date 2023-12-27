import { PlatziClass } from "./12.modulos.mjs";

const highway_67 = new PlatziClass({
  name: "JavaScript: OOP",
  videoID: "0123456789",
});

highway_67.play();
highway_67.pause();
// Playing from url https://platzisecret.com/0123456789
// Paused from url https://platzisecret.com/0123456789

highway_67.play();
highway_67.pause();
// Playing from url https://platzisecret.com/0123456789
// Paused from url https://platzisecret.com/0123456789

highway_67.play();
highway_67.pause();
// Playing from url https://platzisecret.com/0123456789
// Paused from url https://platzisecret.com/0123456789

console.log(highway_67);
console.log(highway_67.name);
console.log(highway_67.videoID);
// PlatziClass { name: 'JavaScript: OOP', videoID: '0123456789' }
// JavaScript: OOP
// 0123456789
