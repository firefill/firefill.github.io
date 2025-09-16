/**
 * Упрощённая защита для production
 * Без агрессивных блокировок
 */

(function() {
  'use strict';
  
  // Работает только в production
  if (window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.includes('netlify') ||
      window.location.hostname.includes('vercel')) {
    return;
  }
  
  // Мягкая защита от правого клика
  document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
      e.preventDefault();
    }
  });
  
  // Отключаем только Ctrl+U (просмотр кода)
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
    }
  });
  
  // Простая защита от iframe
  if (window.top !== window.self) {
    window.top.location = window.self.location;
  }
  
})();
