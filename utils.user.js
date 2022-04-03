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
      
      document.getElementsByTagName("mona-lisa-embed")[0]

      function keydown (evt) {
        if (!evt) evt = event;

        if (evt.ctrlKey && evt.shiftKey && evt.keyCode === 70) {
          const coordinates = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-coordinates")[0].shadowRoot.children[0]
          navigator.clipboard.writeText(coordinates.textContent.split(" ")[1].replace(/[{()}]/g, ''));
        }
      }
    }, false);
    window.addEventListener('load', () => {
      // TODO: Not this
      const vandals = ["Benavoe", "Viewer23", "TheBentoVixen", "HermitCrabParty", "ColoradaStateSupreme", "Loose_Salamanders", "IronyIsFunny234", "CheshireCorner", "Melyndrome", "Available_Humor_73", "ZryptoYT", "veryshortmidget", "DiscordMLP2", "Neeebel", "Bugborger", "Middle_Drink9562", "Infamous_Sun_9854", "DisasterNew9425", "EggCodex", "ICantWinSorry", "BungleFunker", "givememorebeans", "organicgobbler", "livesincondemnation", "PluralPanFry", "boardinglyf", "eybers_"];

      const button = document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].getElementsByClassName("profile-button")[0]

      const label = document.createElement("div");
      label.innerHTML = "(vandal!)";
      
      var observer = new MutationObserver(function(mutations) {
        if (vandals.includes(button.innerText.slice(2))) {
          observer.disconnect();
          button.appendChild(label);
          observer.observe(button, config);
        } else if (button.contains(label)) {
          button.removeChild(label); 
        }
      });
      
      var config = { childList: true };
      
      observer.observe(button, config);
    }, false);
}
