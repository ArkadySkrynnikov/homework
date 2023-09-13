function initSlider(options){

    options = options || {
        dots: true,
        autoplay: true,
        autoplayInterval: 5000
    }

    function moveSlider(num) {
        let imageOfBanner = document.querySelector(".active");
        imageOfBanner.classList.remove("active");
        let numOfImage = document.querySelector(".n" + num)
        numOfImage.classList.add("active");
        if(options.dots){
            sliderDots.querySelector(".active").classList.remove("active");
            sliderDots.querySelector(".n" + num).classList.add("active");
        }
    }

    let sliderDots = document.querySelector(".slider__dots");
    let banners = document.querySelectorAll(".banner");

    initImages();

    if(options.dots){
        initDots();
    }

    if(options.autoplay){
        initAutoplay();
    }


    function initImages() {
        banners.forEach((image, index) => {
            image.classList.add(`n${index}`)
            image.setAttribute("data-index",index)
            if(index === 0){
                image.classList.add("active")
            } else {
                ""
            }
        });
    }

    function initDots() {
        banners.forEach((image, index) => {
            let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
            dot.addEventListener("click", function() {
                moveSlider(this.dataset.index);    
            })
        })
    }

    function initAutoplay() {
        setInterval(() => {
            let imageOfBanner = document.querySelector(".active");
            let curNumber = +imageOfBanner.dataset.index;
            let nextNumber = curNumber === banners.length - 1? 0 : curNumber + 1;
            moveSlider(nextNumber);
        }, options.autoplayInterval);
    }
}

let sliderOptions = {
    dots: true,
    autoplay: true,
    autoplayInterval: 5000
}

document.addEventListener("DOMContentLoaded",function(){
    initSlider(sliderOptions)
});