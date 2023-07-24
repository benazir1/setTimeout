let x = document.getElementById("demo");
setTimeout(function(){ x.value="10seconds" }, 1000);
setTimeout(function(){ x.value="9 seconds" }, 2000);
setTimeout(function(){ x.value="8 seconds" }, 3000);
setTimeout(function(){ x.value="7 seconds" }, 4000);

setTimeout(function(){ x.value="6 seconds" }, 5000);
setTimeout(function(){ x.value="5 seconds" }, 6000);
setTimeout(function(){ x.value="4 seconds" }, 7000);

setTimeout(function(){ x.value="3 seconds" }, 8000);
setTimeout(function(){ x.value="2 seconds" }, 9000);
setTimeout(function(){ x.value="1 seconds" }, 10000);
setTimeout("displayImage()",11000);

function displayImage(src, width, height) {
  console.log("hghghgh");  
 var img = document.createElement("img");
 img.src ="./image/pngtree-15-august-happy-independence-day-india-png-image_6094423.png";
 img.width = 400;
 img.height = 600;
 document.body.appendChild(img);

}
