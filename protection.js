/**
 * Защита от копирования кода
 * Дополнительные меры безопасности
 * Работает только в production
 */

(function() {
  'use strict';
  
  // Включаем защиту только в production (когда нет localhost в URL)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🔓 Режим разработки - защита отключена');
    return;
  }
  
  // Отключаем правый клик
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });
  
  // Отключаем F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+S (Save Page)
    if (e.ctrlKey && e.keyCode === 83) {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+A (Select All)
    if (e.ctrlKey && e.keyCode === 65) {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+C (Copy)
    if (e.ctrlKey && e.keyCode === 67) {
      e.preventDefault();
      return false;
    }
  });
  
  // Отключаем выделение текста
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
  });
  
  // Отключаем drag and drop
  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
  });
  
  // Детекция DevTools
  let devtools = {
    open: false,
    orientation: null
  };
  
  const threshold = 160;
  
  setInterval(function() {
    if (window.outerHeight - window.innerHeight > threshold || 
        window.outerWidth - window.innerWidth > threshold) {
      if (!devtools.open) {
        devtools.open = true;
        // Перенаправляем на другую страницу или показываем предупреждение
        document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Arial;"><h1>Доступ ограничен</h1></div>';
      }
    } else {
      devtools.open = false;
    }
  }, 500);
  
  // Отключаем console
  if (typeof console !== 'undefined') {
    console.log = console.warn = console.error = console.info = console.debug = function() {};
  }
  
  // Защита от iframe
  if (window.top !== window.self) {
    window.top.location = window.self.location;
  }
  
  // Дополнительная обфускация
  const _0x1a2b = function() {
    let _0x3c4d = true;
    return function(_0x5e6f, _0x7g8h) {
      const _0x9i0j = _0x3c4d ? function() {
        if (_0x7g8h) {
          const _0x1k2l = _0x7g8h.apply(_0x5e6f, arguments);
          _0x7g8h = null;
          return _0x1k2l;
        }
      } : function() {};
      _0x3c4d = false;
      return _0x9i0j;
    };
  }();
  
})();
