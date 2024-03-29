function generateLink(loc) {
    return window.location.origin + '?page=' + encodeURIComponent(loc);
}

function loadHome() {
    document.getElementById('content-iframe').src = 'home.html';

    // Reset the URL to "index.html" without any query parameters
    history.pushState({}, document.title, '/');
}

// Function to load external content into the iframe
function loadArticle(loc) {
    // Set the src attribute of the iframe to load the external content
    document.getElementById('content-iframe').src = 'Articles/' + loc + '/';

    // Add current page to URL params
    history.pushState({ page: loc }, document.title, generateLink(loc));

    // Function to resize the iframe based on its content
    document.getElementById('content-iframe').addEventListener('load', function() {
        var iframe = document.getElementById('content-iframe');

        // Set the iframe's height to the content's scrollHeight
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 100 + 'px';
    });
}

// Function to parse the sitemap.xml file and generate the navigation menu
function generateNavbar() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'articlemap.xml', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const xmlDoc = xhr.responseXML;
            const urlElements = xmlDoc.getElementsByTagName('url');
            const navbar = document.getElementById('dynamicNavbar');
            
            // Create an object to store links by category
            const linksByCategory = {};
    
            for (let i = 0; i < urlElements.length; i++) {
                const loc = urlElements[i].getElementsByTagName('loc')[0].textContent;
                const categoryMatch = loc.match(/^([^/]+)\//); // Extract category from the URL
                
                if (categoryMatch) {
                    const category = categoryMatch[1];
                    if (!linksByCategory[category]) {
                        linksByCategory[category] = [];
                    }
                    linksByCategory[category].push({ loc });
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
                    linkAnchor.href = generateLink(linkObj.loc);
                    pageName = linkObj.loc.split('/').pop();
                    linkAnchor.onclick = function () {
                        loadArticle(linkObj.loc);
                        return false;
                    };
                    linkAnchor.textContent = pageName;
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
    // Call the function to generate the navbar from the sitemap
    generateNavbar();

    // Check URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const currentPage = urlSearchParams.get('page');
    if (!currentPage || currentPage === 'home') {
        loadHome();
    } else {
        loadArticle(currentPage);
    }
});

$(document).ready(function() {
    $('.navbar-toggler').on('click', function() {
      $('.navbar-collapse').toggleClass('show');
    });
  });