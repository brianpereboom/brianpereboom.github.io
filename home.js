window.onload = function() {
    var img = document.querySelector('img');
    var viewportWidth = window.innerWidth;
    var viewportHeight = window.innerHeight;

    document.body.style.height = (viewportHeight - 25) + 'px';

    img.onload = function() {
        var imageWidth = img.width;
        var imageHeight = img.height;
        var widthRatio = viewportWidth / imageWidth;
        var heightRatio = viewportHeight / imageHeight;
        var scale = Math.min(widthRatio, heightRatio);

        img.style.width = (scale * imageWidth) + 'px';
        img.style.height = (scale * imageHeight) + 'px';
    };
};