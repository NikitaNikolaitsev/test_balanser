const movieId = '24602';
const videoSrc = 'https://storage.videobalanser.cc/movies/5647c811a2604fc9219e047d022bfbc10f796a13/ef45d69a96ff6ae0a45f775edc32eb12:2035060100/hls.m3u8';

const proxyUrl = `http://localhost:3000/proxy?url=${encodeURIComponent(videoSrc)}`;

document.addEventListener("DOMContentLoaded", () => {
    const playerContainer = document.getElementById('player-container');
    const status = document.getElementById('status');

    const iframe = document.createElement('iframe');
    iframe.src = `https://iframe.videobalanser.cc/?movieId=${movieId}&src=${proxyUrl}`;
    iframe.width = '100%';
    iframe.height = '480';
    iframe.allowFullscreen = true;
    iframe.style.border = 'none';
    playerContainer.innerHTML = '';
    playerContainer.appendChild(iframe);
    status.textContent = 'Плеер готов, загружаем видео...';
});
