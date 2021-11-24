var mySwiper = new Swiper(".swiper-container", {
    effect: "",
    loop: false,
    speed: 800,
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: "true"
    }
})

var btnNext = document.querySelector(".swiper-button-next"),
    btnPrev = document.querySelector(".swiper-button-prev"),
    sliderText = document.querySelector(".slide-text"),
    sliderNumber = document.querySelector(".swiper-slide .number");

      btnNext.addEventListener("click", transitiomSlideNext);
      btnPrev.addEventListener("click", transitiomSlidePrev);

function transitiomSlideNext() {
    var slideActiveText = document.querySelector(".swiper-slide-active .slide-text"),
        slidePrevText = document.querySelector(".swiper-slide-Prev .slide-text");

    slidePrevText.classList.remove("playText");
    slideActiveText.classList.add("playText");
}

function transitiomSlidePrev() {
    var slideActiveText = document.querySelector(".swiper-slide-active .slide-text"),
        slideNextText = document.querySelector(".swiper-slide-Next .slide-text");

    slideNextText.classList.remove("playText");
    slideActiveText.classList.add("playText");
}

