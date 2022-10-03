const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ 
  filterItem.onclick = (selectedItem)=>{ 
    if(selectedItem.target.classList.contains("item")){
      filterItem.querySelector(".active").classList.remove("active");
      let filterName = selectedItem.target.getAttribute("data-name"); 
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide");
          image.classList.add("show");
        }else{
          image.classList.add("hide"); 
          image.classList.remove("show");
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); 
  }
}

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var box = document.getElementById("box");
function Gradient() {
 box.style.background = 
 "linear-gradient(to right, " 
 + color1.value 
 + ", " 
 + color2.value 
 + ")";
}
color1.addEventListener("input", Gradient);
color2.addEventListener("input", Gradient);


// function gradbox(){
//   color11.select();
//   let color11Value = color1.value;
//   color12.select();
//   let color12Value = color1.value;
//   navigator.clipboard.writeText(`linear-gradient( ${color11Value},${color12Value})`);
 
// }

function createHex() {
  var hexCode1 = "";
  var hexValues1 = "0123456789abcdef";
  
  for ( var i = 0; i < 6; i++ ) {
    hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
  }
  return hexCode1;
}
function generate() { 
  var deg = Math.floor(Math.random() *360);
  var gradient = "linear-gradient(" + deg + "deg, " + "#" + createHex() + ", " + "#" + createHex() +")";
  document.getElementById("output").innerHTML = gradient;
  document.getElementById("bg").style.background = gradient;
  //console.log(hexCode1, hexCode2);
}
document.onload = generate();

