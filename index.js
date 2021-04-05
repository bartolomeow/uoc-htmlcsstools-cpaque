const readingTime = require('reading-time');

const stats = readingTime(document.body.innerText);

result = Math.round(stats.minutes);
if (result === 0) result = 1;

document.getElementById("tiempoLectura").innerText = result;