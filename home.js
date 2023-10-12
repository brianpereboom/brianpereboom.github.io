function generateLink(loc) {
    return window.location.origin + '?page=' + encodeURIComponent(loc);
}

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
                
                const imageFileElement = urlElements[i].getElementsByTagName('image')[0];

                if (imageFileElement) {
                    const loc = urlElements[i].getElementsByTagName('loc')[0].textContent;

                    // Create an anchor element and set the href attribute
                    const imageLink = document.createElement('a');
                    imageLink.classList.add('carousel-link');
                    imageLink.href = generateLink(loc);
                    imageLink.target = "_top";

                    const imageDiv = document.createElement('div');
                    imageDiv.classList.add('carousel-item');
                    if (!carousel.childElementCount) imageDiv.classList.add('active');
                    
                    const imageFile = imageFileElement.textContent;
                    image.src = `Articles/${loc}/${imageFile}`;
                    image.alt = loc.split('/').pop();

                    var imageWidth = image.width;
                    var imageHeight = image.height;
                    var widthRatio = viewportWidth / imageWidth;
                    var heightRatio = viewportHeight / imageHeight;
                    var scale = Math.min(widthRatio, heightRatio);
                    image.style.width = (scale * imageWidth) + 'px';
                    image.style.height = (scale * imageHeight) + 'px';

                    imageLink.appendChild(image);
                    imageDiv.appendChild(imageLink);
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