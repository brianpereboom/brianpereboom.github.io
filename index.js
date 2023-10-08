function loadHome() {
    document.getElementById('content-iframe').src = 'home.html'
    localStorage.setItem('currentPage', 'home');
}

// Function to load external content into the iframe
function loadArticle(pageName) {
    // Construct the URL of the external HTML file
    const externalPageURL = 'Articles/' + pageName + '.html';

    // Set the src attribute of the iframe to load the external content
    const iframe = document.getElementById('content-iframe');
    iframe.src = externalPageURL;

    // Store the currently loaded page in localStorage
    localStorage.setItem('currentPage', pageName);
}

// Check if there's a previously loaded page in localStorage
window.addEventListener('load', function() {
    const currentPage = localStorage.getItem('currentPage');
    if (!currentPage || currentPage === 'home') {
        loadHome();
    } else {
        loadArticle(currentPage);
    }
});