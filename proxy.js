const proxyUrl = 'https://https://test-km6tioe8l-nykytas-projects.vercel.app//api/proxy?movieId=12345';

fetch(proxyUrl)
  .then(res => res.json())
  .then(data => {
    const player = document.getElementById('videoPlayer');
    const status = document.getElementById('status');

    if (data.stream_url) {
      player.src = data.stream_url;
      player.style.display = 'block';
      status.textContent = 'Плеер готов, смотри видео.';
    } else {
      status.textContent = 'API вернул пустой ответ, ссылки нет.';
      console.error('Проблема с ответом API:', data);
    }
  })
  .catch(error => {
    document.getElementById('status').textContent = 'Ошибка запроса!';
    console.error('Ошибка:', error);
  });
