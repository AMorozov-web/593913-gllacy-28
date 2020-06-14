document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".promo-slider")) {
        let sliderButtons = document.querySelectorAll(".buttons-list__button");
        for ( sliderButton of sliderButtons ) {
            sliderButton.onclick = function () {
                let buttonIndex = Array.prototype.indexOf.call(sliderButtons, this);
                let indexPage = document.querySelector(".index-page");
                indexPage.style.backgroundColor = 'var(--bg-slide' + (buttonIndex + 1) + ')';
                indexPage.style.backgroundImage = 'url(../img/promo_slider_' + (buttonIndex + 1) + '.png)';
                for (sliderButton of sliderButtons) {
                    sliderButton.classList.remove('active');
                }
                this.classList.add('active');
            }
        }
    };
});