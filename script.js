//BG
let bg=document.querySelector(".Firstblock");

// SINGUP
let mail = document.getElementById("name");
let password = document.getElementById("password");
let Cpassword = document.getElementById("Cpassword");
// SPAN
let spas = document.getElementById("s");
let spal = document.getElementById("l");

// LOGIN
let mail1 = document.getElementById("name1");
let password1 = document.getElementById("password1");

// FORM
let form1 = document.querySelector(".Signup");
let form2 = document.querySelector(".login");

// h1
let h = document.querySelector("#h");

let v =document.querySelector("#v")
// h3 
let h3 = document.querySelector("h3")

// i
let i = document.querySelector("i");

// AD
let ad = document.querySelector(".ad");
let ad1 = document.querySelector(".ad1");
// p
// let p = document.getElementById("p");
// let p1 = document.getElementById("p1")

// modal
let mod = document.querySelector(".submit");
// modal button
let but = document.querySelector("#modal")
let con = 0

spas.addEventListener("click", function () {
    if (con == 0) {
        form1.style.display = "block";
        form1.style.top = "8%";
        ad.style.display = "none";
        con = 1;

    } else {
        form1.style.display = "none";
        form1.style.top = "17%";
        ad.style.display = "block";
        con = 0;
    }
});

spas.addEventListener("mouseover",function(){
    bg.style.backgroundImage="url(https://prd-sc102-cdn.rtx.com/-/media/ca/product-assets/marketing/s/space/space-symposium-graphic_1920x1080.jpg?rev=2a22f490c9c644a5bf69ef3cce59813d)"
    bg.style.transition="3s all ease"
})

spas.addEventListener("mouseout",function(){

    bg.style.backgroundImage="url(https://newsroom.unsw.edu.au/sites/default/files/thumbnails/image/space-mining_1.jpeg)"
    
})



spal.addEventListener("click", function () {
    if (con == 0) {
        form2.style.display = "block";
        form2.style.top = "8%";
        ad1.style.display = "none";
        form1.style.display = "none";
        con = 1;
    } else {
        form2.style.display = "none";
        form2.style.top = "27%";
        ad1.style.display = "block";
        con = 0;
    }
});







spal.addEventListener("mouseover",function(){
    bg.style.backgroundImage="url(https://www.events.unsw.edu.au/sites/default/files/2023-06/Earth%20x%20Space%20-%20EventsWeb.png)"
    bg.style.transition="3s all ease"
})

spal.addEventListener("mouseout",function(){

    bg.style.backgroundImage="url(https://media.allure.com/photos/5efa18a92ef61b00086cd6bf/16:9/w_2560%2Cc_limit/eau-de-space-lede.jpg)"
    
})

bg,addEventListener("click",function(){
    bg.style.backgroundImage="url(https://wallpapers.com/images/hd/black-space-xpmrvus286d8e3tb.jpg)"
})








p.addEventListener("click", function () {
    form2.style.display = "block"
    form1.style.display = "none"
    ad1.style.display = "none"
    spal.style.display = "none"

})



p1.addEventListener("click", function () {
    form1.style.display = "block"
    form2.style.display = "none"
    ad.style.display = "none"

})



function sign() {
    
    if (mail.value == '' || password.value == '' || Cpassword.value == '') {
        alert("Please complete the details!")
    }
    if (password.value !== Cpassword.value) {
        alert("confirm password is not matched")
    }
    else if (password.value.length < 8) {
        alert("Passwors should be atleast 8 character!")
    }
    else {
        mod.style.display = "block"
        mod.style.marginTop = "-40%"
        h.style.display = "none"
        v.style.display = "none"
        form1.style.display = "none"
        ad1.style.display = "none"
        
    }
}



function log() {
    if (mail1.value == '' || password1.value == '') {
        alert("Please complete the details!")
    }
    else if (password1.value.length < 8) {
        alert("Passwors is incorrect!!!")
    }
    else {
        mod.style.display = "block"
        mod.style.marginTop = "-40%"
        h.style.display = "none"
        v.style.display = "none"
        form2.style.display = "none"
        ad.style.display = "none"
    }

}




function next() {
    window.location.href = "https://viewspace.org/"
}


ad.addEventListener("mouseover",function(){
    ad.style.display="none"
    ad1.style.display="block"
})

ad1.addEventListener("mouseout",function(){
    ad1.style.display="none"
    ad.style.display="block"
})


v.addEventListener("click",function(){
    ad.style.display="block"
    ad1.style.display="block"
})