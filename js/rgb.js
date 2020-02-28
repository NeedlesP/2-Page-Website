const sliders = document.querySelectorAll("input[type=range]");
const colorCircles = {
  r: document.getElementById("red"),
  g: document.getElementById("green"),
  b: document.getElementById("blue")
};
const colorValue = {
  r: document.querySelectorAll(".value-r"),
  g: document.querySelectorAll(".value-g"),
  b: document.querySelectorAll(".value-b")
};
const colorValueHex = {
  r: document.querySelectorAll(".value-rhex"),
  g: document.querySelectorAll(".value-ghex"),
  b: document.querySelectorAll(".value-bhex")
};
const colorValueHex16 = {
  r: document.getElementById("value-rhex-16"),
  g: document.getElementById("value-ghex-16"),
  b: document.getElementById("value-bhex-16")
};
const colorValueHex1 = {
  r: document.getElementById("value-rhex-1"),
  g: document.getElementById("value-ghex-1"),
  b: document.getElementById("value-bhex-1")
};
const updateColor = ( element ) => { 
  const id = element.attributes["data-target"].value;
  const v = element.value;
  colorCircles[id].style.backgroundColor = "rgb(" +  v*(id === 'r') + ","  +  v*(id === 'g') + "," + v*(id === 'b') + ")";
  console.log(colorValue[id]);
  colorValue[id].forEach( (el) => {
    el.innerHTML = v;
  });
  const hexString = parseInt(v).toString(16);
  colorValueHex[id].forEach((el) => {
    el.innerHTML = hexString.length === 1 ? '0'+hexString : hexString;
  });
  colorValueHex16[id].innerHTML = parseInt(v/16);
  colorValueHex1[id].innerHTML = parseInt(v%16)
}
sliders.forEach( element => {
  element.addEventListener( 'input', () => {
    updateColor( element ); 
  });
});