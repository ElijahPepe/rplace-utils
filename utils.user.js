// ==UserScript==
// @name         /r/place utilities
// @namespace    https://github.com/ElijahPepe/rplace-utils
// @version      1.0.0
// @description  Various /r/place utilities
// @author       ElijahPepe
// @match        https://hot-potato.reddit.com/embed*
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
      document.onkeydown = keydown;

      function keydown (evt) {
        if (!evt) evt = event;

        if (evt.ctrlKey && evt.shiftKey && evt.keyCode === 70) {
          const coordinates = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-coordinates")[0].shadowRoot.children[0]
          navigator.clipboard.writeText(coordinates.textContent.split(" ")[1].replace(/[{()}]/g, ''));
        }
      }
    }, false);
}
