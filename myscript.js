var btn = document.getElementById("click").getAttribute("src");
btn.addEventListener("mousedown", function(){
    document.getElementById("mousedown").src="貓咪_變更/cat1_inverse.jpg";
})
btn.addEventListener("mouseup", function(){
    document.getElementById("click").src="貓咪_正常/cat1.jpg";
})

function secound(obj){
    obj.src="貓咪_變更/cat1_inverse.jpg";
    console.log(obj.getAttribute("src"));
}

function first(obj){
    obj.src="貓咪_正常/cat1.jpg";
    console.log(obj.getAttribute("src"));
}