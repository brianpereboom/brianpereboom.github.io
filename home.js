function generateCarousel(viewportWidth, viewportHeight) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'articlemap.xml', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const xmlDoc = xhr.responseXML;
            const urlElements = Array.from(xmlDoc.getElementsByTagName('url'));

            urlElements.sort(() => Math.random() - 0.5);

            const carousel = document.getElementById('carouselAutoplaying').children[0];
    
            for (let i = 0; i < urlElements.length; ++i) {
                const image = document.createElement('img');
                image.classList.add('d-block', 'carousel-image');
                
                const imageFile = urlElements[i].getElementsByTagName('image')[0];
                console.log(urlElements[i]);

                if (imageFile) {
                    const loc = urlElements[i].getElementsByTagName('loc')[0].textContent;
                    image.src = `Articles/${loc}/${imageFile}`;
                    image.alt = loc.split('/').pop();

                    console.log(image.src, image.alt);

                    const imageDiv = document.createElement('div');
                    imageDiv.classList.add('carousel-item');
                    if (i === 0) imageDiv.classList.add('active');

                    var imageWidth = image.width;
                    var imageHeight = image.height;
                    var widthRatio = viewportWidth / imageWidth;
                    var heightRatio = viewportHeight / imageHeight;
                    var scale = Math.min(widthRatio, heightRatio);
                    image.style.width = (scale * imageWidth) + 'px';
                    image.style.height = (scale * imageHeight) + 'px';

                    imageDiv.appendChild(image);
                    carousel.appendChild(imageDiv);

                    if (carousel.childElementCount === 3) { break; }
                }
            }
        }
    };
    xhr.send();
}

window.addEventListener('load', function() {
    document.body.style.height = (window.innerHeight - 25) + 'px';

    generateCarousel(window.innerWidth, window.innerHeight);
});