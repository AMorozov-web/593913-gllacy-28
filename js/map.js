window.onload = function() {
    let mapLink = document.querySelector(".contacts__map");
    let contactsWidget = document.querySelector(".contacts__contact-widget");
    let gllacyMap;
    let gllacyPlaceMark;

    ymaps.ready({
        successCallback: function () {
            mapLink.classList.add('visually-hidden');
            contactsWidget.classList.add("widget-shadow");
            gllacyMap = new ymaps.Map("map", {
                center: [59.939102, 30.326336],
                zoom: 17,
                controls: [],
            }, 
            {
                suppressMapOpenBlock: true
            },
            {
                yandexMapAutoSwitch: true
            });
    
            gllacyPlaceMark = new ymaps.Placemark(
                [59.938635, 30.323118],
            {   
                balloonContent: []
            }, 
            {
                openBalloonOnClick: false,
    
                iconLayout: 'default#image',
    
                iconImageHref: './img/map_pin.svg',
    
                iconImageSize: [80, 140],
    
                iconImageOffset: [-34, -168]
    
            });
    
            gllacyMap.behaviors.disable('scrollZoom')
            gllacyMap.geoObjects.add(gllacyPlaceMark); 
        }
    });
};