(function () {
  var token = '1d0d3c13-7c43-4552-96e4-bbc660f1c896';
  var root = document.getElementById('telvoip-chat-root');
  fetch('https://api.telvoip.io/api/v1/conversations/settings/' + token)
    .then(function (response) {
      return response.ok ? response.json() : null;
    })
    .then(function (settings) {
      if (!root || !settings) return;
      root.style.setProperty('--telvoip-webchat-primary-color', settings.primary_color);
      root.dataset.widgetPosition = settings.widget_position === 'left' ? 'left' : 'right';
    })
    .catch(function () {});
})();
