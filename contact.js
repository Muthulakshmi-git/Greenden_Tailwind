var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidenav.style.right = 0
})

var closenav = document.getElementById("closenav")

closenav.addEventListener("click",function(){
    sidenav.style.right = "-50%"
})