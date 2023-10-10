window.onload = function() {
    var img = document.querySelector('.carousel-image');
    img.onload = function() {
        img.style.width = window.innerWidth + 'px';
        img.style.height = window.innerHeight + 'px';
    };
};