let chars = [];
let codes = [70, 108, 97, 103, 58, 160, 84, 121, 112, 105, 110, 103, 95, 66, 114, 101, 97, 107, 115, 95, 84, 104, 105, 110, 103, 115];
document.body.onkeypress = function(event) {
  if (-1 < document.getElementById('aboutTitle').innerText.indexOf("Flag")) {
    return
  }
  chars.push(event.which || event.keyCode);
  if (4 < chars.length) {
    chars.shift();
  }
  if (chars[0] === 108 && chars[1] === 105 && chars[2] === 102 && chars[3] === 101) {
    let t = document.getElementById('aboutTitle');
    setTimeout(function() {
      t.innerText = t.innerText + "|";
    }, 1000);
    setTimeout(function() {
      for(let i = 0; i < 9; i++) {
        setTimeout(function() {t.innerText = t.innerText.slice(0, -2) + "|"}, i * 100);
      }
    }, 1200);
    setTimeout(function() {
      for(let i = 0; i < codes.length; i++) {
        setTimeout(function() {
          let text = t.innerText.replace(/\|$/, "");
          t.innerText = text + String.fromCharCode(codes[i]) + "|";
        }, i * 100);
      }
    }, 2500);
    setTimeout(function() {
        t.innerText = t.innerText.replace(/\|$/, "");
    }, 6000);
  }
};