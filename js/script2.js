document.addEventListener("DOMContentLoaded", function() {
	console.log("DOM content has loaded!");


document.getElementById("submit").addEventListener("click", function(event){
      event.preventDefault()
      var t = document.getElementById("t").value;


// var t = document.getElementById("t").onSubmit;
if (document.getElementById("f").checked) {
var c = (t - 32) / (9/5);
c = c.toFixed(2);

document.getElementById("calTemp").innerText = "Temp = " + c + "C°";
} else {
  var f = t * 1.8 + 32
  f = f.toFixed(2);

  document.getElementById("calTemp").innerText = "Temp = " + f + "F°";

}

if (t > 90) {
  document.getElementsByTagName("div")[0].style.backgroundColor = "red";
} else if (t < 0) {
  document.getElementsByTagName("div")[0].style.backgroundColor = "blue";
}
  });

});
