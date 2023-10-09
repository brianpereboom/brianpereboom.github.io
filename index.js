function generateLink(url) {
    return window.location.origin + window.location.pathname + '?page=' + encodeURIComponent(url);
}

function loadHome() {
    document.getElementById('content-iframe').src = 'home.html';

    // Reset the URL to "index.html" without any query parameters
    history.pushState({}, document.title, '/');
}

// Function to load external content into the iframe
function loadArticle(url) {
    // Set the src attribute of the iframe to load the external content
    document.getElementById('content-iframe').src = 'Articles/' + url + '/';

    // Add current page to URL params
    history.pushState({ page: url }, document.title, generateLink(url));
}

// Function to parse the sitemap.xml file and generate the navigation menu
function generateNavbar() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'sitemap.xml', true); // Replace with the actual path to your sitemap file
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const xmlDoc = xhr.responseXML;
            const urlElements = xmlDoc.getElementsByTagName('url');
            const navbar = document.getElementById('dynamicNavbar');
            
            // Create an object to store links by category
            const linksByCategory = {};
    
            for (let i = 0; i < urlElements.length; i++) {
                const url = urlElements[i].getElementsByTagName('loc')[0].textContent;
                
                const categoryMatch = url.match(/^([^/]+)\//); // Extract category from the URL
                
                if (categoryMatch) {
                    const category = categoryMatch[1];
                    if (!linksByCategory[category]) {
                        linksByCategory[category] = [];
                    }
                    linksByCategory[category].push({ url });
                }
            }
    
            // Generate dropdown menus based on categories
            for (const category in linksByCategory) {
                const dropdown = document.createElement('li');
                dropdown.classList.add('nav-item', 'dropdown');
        
                const dropdownToggle = document.createElement('a');
                dropdownToggle.classList.add('nav-link', 'dropdown-toggle');
                dropdownToggle.href = '/';
                dropdownToggle.textContent = category;
                dropdownToggle.setAttribute('data-bs-toggle', 'dropdown');
        
                const dropdownMenu = document.createElement('ul');
                dropdownMenu.classList.add('dropdown-menu');
        
                linksByCategory[category].forEach(linkObj => {
                    const link = document.createElement('li');
                    link.classList.add('dropdown-item');
                    const linkAnchor = document.createElement('a');
                    linkAnchor.href = generateLink(linkObj.url);
                    pageName = linkObj.url.split('/').pop();
                    linkAnchor.onclick = function () {
                        loadArticle(linkObj.url);
                        return false;
                    };
                    linkAnchor.textContent = pageName; // Get the last part of the URL
                    link.appendChild(linkAnchor);
                    dropdownMenu.appendChild(link);
                });
        
                dropdown.appendChild(dropdownToggle);
                dropdown.appendChild(dropdownMenu);
                navbar.appendChild(dropdown);
            }
        }
    };
    xhr.send();
}

window.addEventListener('load', function() {
    // Check URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const currentPage = urlSearchParams.get('page');
    if (!currentPage || currentPage === 'home') {
        loadHome();
    } else {
        loadArticle(currentPage);
    }
  
    // Call the function to generate the navbar from the sitemap
    generateNavbar();
});