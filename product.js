var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidenav.style.right = 0
})

var closenav = document.getElementById("closenav")

closenav.addEventListener("click",function(){
    sidenav.style.right = "-50%"
})

//Implements javascript for search functionality

var productcontainer = document.getElementById("product-container")

var searchbar = document.getElementById("searchbar")

var productlist = productcontainer.querySelectorAll("div")


searchbar.addEventListener("keyup",function(){

    var entervalue = event.target.value.toUpperCase()

    for(count=0; count<productlist.length; count++){
        
        
        var productname = productlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(entervalue)<0)
        {
            productlist[count].style.display = "none"
        }
        else{
            productlist[count].style.display = "block"
        }
    }
})