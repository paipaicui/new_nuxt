  //初始化设备比例
  (function (doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        // 根据设备的比例调整初始font-size大小
        if (clientWidth > 1242) clientWidth = 750;
        docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
      };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);
