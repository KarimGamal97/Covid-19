
// start sticky navbar

let bodyScroll = document.querySelector("html , body"),

    stickyNav = document.querySelector("nav");

window.addEventListener("scroll" , function(){

    // console.log(bodyScroll.scrollTop);

    if(bodyScroll.scrollTop > 165) {

        stickyNav.style.backgroundColor = "white";

    }else{

        stickyNav.style.backgroundColor = "white";
    }
});

// scroll Top

let myScroll = document.querySelector("#scroll-top");

window.addEventListener("scroll" , function() {

    if (bodyScroll.scrollTop > 300 ) {

        myScroll.style.display = "block";

    } else {

        myScroll.style.display = "none";
    }
});

myScroll.addEventListener("click" , function () {

    window.scrollTo(0,0);
});

