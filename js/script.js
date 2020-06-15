document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".promo-slider")) {
        let sliderButtons = document.querySelectorAll(".buttons-list__button");
        for ( sliderButton of sliderButtons ) {
            sliderButton.onclick = function () {

                let buttonIndex = Array.prototype.indexOf.call(sliderButtons, this);
                let indexPage = document.querySelector(".index-page");
                let slides = document.querySelectorAll('.slider-list__item');
                let titles = document.querySelectorAll('.slider-item__title');
                let links = document.querySelectorAll('.slider-item__link');
                let currentSlide = slides[buttonIndex];
                let currentTitle = titles[buttonIndex];
                let currentLink = links[buttonIndex];

                indexPage.style.backgroundColor = 'var(--bg-slide' + (buttonIndex + 1) + ')';

                indexPage.style.backgroundImage = 'url(../img/promo_slider_' + (buttonIndex + 1) + '.png)';

                for (let slide of slides) {
                    if (!slide.classList.contains('visually-hidden')) {
                        slide.classList.add('visually-hidden');
                    }
                }
                currentSlide.classList.remove('visually-hidden');

                for (let title of titles) {
                    if (title.classList.contains('current-slide')) {
                        title.classList.remove('current-slide');
                    }
                }
                currentTitle.classList.add('current-slide');

                for (let link of links) {
                    if (link.classList.contains('current-slide')) {
                        link.classList.remove('current-slide');
                    }
                }
                currentLink.classList.add('current-slide');

                for ( let sliderButton of sliderButtons) {
                    sliderButton.classList.remove('active');
                }
                this.classList.add('active');
            }
        }
    };

    if (document.querySelector(".contacts__feedback")) {

        let buttonOpen = document.querySelector(".contacts__button");
        let buttonClose = document.querySelector(".feedback__button-close");
        let overlay = document.querySelector(".overlay");
        let feedbackForm = document.querySelector(".contacts__feedback");
        let nameField = document.getElementById("form__user-name-field");
        let emailField = document.getElementById("form__user-email-field");
        let textField = document.getElementById("form__user-comment-field");
        let buttonSubmit = document.querySelector('.form__button');
        let mouseLeaveForm = false;

        function modalOpen() {
          if (overlay.classList.contains('visually-hidden')) {
            overlay.classList.remove('visually-hidden');
          }
            feedbackForm.classList.add('popup');
            nameField.focus();
            nameField.value = "";
            emailField.value = "";
            textField.value = "";
        }

        function modalClose() {
            overlay.classList.add('visually-hidden');
            feedbackForm.classList.remove('popup');
            nameField.classList.remove('input-error');
            emailField.classList.remove('input-error');
            textField.classList.remove('input-error');
        }
    
        buttonOpen.addEventListener ("click", function (evt) {
            evt.preventDefault();
            modalOpen();
        })

        buttonSubmit.addEventListener("click", function(evt) {

         if (!nameField.value) {
            evt.preventDefault();
            nameField.classList.remove('input-error');
            overlay.offsetWidth = overlay.offsetWidth;
            nameField.classList.add('input-error');
         } 

         if (!emailField.value) {
            evt.preventDefault();
            emailField.classList.remove('input-error');
            overlay.offsetWidth = overlay.offsetWidth;
            emailField.classList.add('input-error');
         } 

         if (!textField.value) {
            evt.preventDefault();
            textField.classList.remove('input-error');
            overlay.offsetWidth = overlay.offsetWidth;
            textField.classList.add('input-error');
         } 

        })

        buttonClose.addEventListener ("click", function () {
            modalClose();
        })

        feedbackForm.addEventListener ("mouseleave", function (evt) {
          mouseLeaveForm = false;
        })

        feedbackForm.addEventListener ("mouseenter", function (evt) {
          mouseLeaveForm = true;
        })

        overlay.addEventListener ("click", function () {
            if (!overlay.classList.contains('visually-hidden') && mouseLeaveForm == false) {
              modalClose();
            }
          
        })

        window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
            if (!overlay.classList.contains('visually-hidden')) {
              evt.preventDefault();
              modalClose();
            }
          }
        });
    }   
       
});