// opean and close navBar
let btnOpean = document.querySelector(".opean");
let btnClose = document.querySelector(".close");
let links = document.querySelector(".links");

btnOpean.onclick = function() {
    links.style.transform = 'translateX(0px)';
    btnOpean.style.display = "none";

    btnClose.style.display = 'block';
}
btnClose.onclick = function() {
    links.style.transform = 'translateX(400px)';
    btnClose.style.display = 'none';

    btnOpean.style.display = 'block';
}



// Start Effect For Boxs
const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) =>{
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) box.classList.add("show");
        else box.classList.remove("show")
    });
};

// Start Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


window.addEventListener("scroll", checkBoxes);
checkBoxes()

// Whatsapp contatc
var mybotton = document.getElementById('goup');

window.onscroll = function () {
    // console.log(scrollY)
    'user strict';

    if (window.pageYOffset >= 300){
        mybotton.style.display = "block";        
    }
    else{
        mybotton.style.display = "none";        
    }

};
