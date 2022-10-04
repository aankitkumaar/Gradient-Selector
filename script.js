//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
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

var color1 = document.querySelector(".color11");
var color2 = document.querySelector(".color12");
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

