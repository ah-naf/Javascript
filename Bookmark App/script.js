const modal = document.getElementById('modal');
const modalSHow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = [];

// Show Modal
function showModal() {
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

// Modal Event Listener
modalSHow.addEventListener('click', showModal);
modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', e => (e.target === modal ? modal.classList.remove('show-modal') : false));

// Validate Form
function validate(nameValue, urlValue) {
    if (!nameValue || !urlValue) {
        alert('Please submit values for both field.');
        return false;
    }
    return true;
}

// Create Bookmark
function buildBookmarks() {
    // Remove all Bookmarks element
    bookmarksContainer.textContent = '';
    // Build items
    bookmarks.forEach(bookmark => {
        const { name, url } = bookmark;
        // Item
        const item = document.createElement('div');
        item.classList.add('item');
        // Close icon

        const closeIcon = document.createElement('i');
        closeIcon.classList.add('fas', 'fa-times');
        closeIcon.setAttribute('title', 'Delete Bookmark');
        closeIcon.setAttribute('onclick', `deleteBookmark('${url}')`);
        // Link Container
        const linkInfo = document.createElement('div');
        linkInfo.classList.add('name');

        // Favicon
        const favicon = document.createElement('img');
        favicon.setAttribute('src', `https://s2.googleusercontent.com/s2/favicons?domain=${url}`);
        // Link
        const link = document.createElement('a');
        link.setAttribute('href', `${url}`);
        link.setAttribute('target', '_blank');
        link.textContent = name;
        // Append to bookmarks container
        linkInfo.append(favicon, link);
        item.append(closeIcon, linkInfo);
        bookmarksContainer.appendChild(item);
    });
}

// Fetch Bookmarks
function fetchBookmarks() {
    // Get bookmarks from loacaStorage if available
    if (localStorage.getItem('bookmarks')) {
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    } else {
        // Create bookmarks array in Localstorage;
        bookmarks = [{
            name: 'Ahnaf Hasan',
            url: 'Ahnaf.com',
        }, ];
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    buildBookmarks();
}

// Delete a bookmark
function deleteBookmark(url) {
    bookmarks.forEach((bookmark, i) => {
        if (bookmark.url === url) {
            bookmarks.splice(i, 1);
        }
    });
    // Update bookmarks arry in localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();
}

// Handle Data from FORM
function storeBookmark(e) {
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if (!urlValue.includes('http://', 'https://')) {
        urlValue = `https://${urlValue}`;
    }
    if (!validate(nameValue, urlValue)) {
        return false;
    }
    const bookmark = {
        name: nameValue,
        url: urlValue,
    };
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();
    bookmarkForm.reset();
    websiteNameEl.focus();
}


// Event Listener
bookmarkForm.addEventListener('submit', storeBookmark);

// On Load, Fetch Bookmarks
fetchBookmarks();