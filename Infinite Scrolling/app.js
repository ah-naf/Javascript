const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photos = [];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
// Unsplash API
const count = 10;
const apiKey = '8PcANl44pDf1G8sJRYy69FLN4XooX9Bp2sr4Qy0FAoI';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
    }
}

// Helper function set attributes
function set(element, attributes) {
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}


// Create Elements for Links and Photos and Add to DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photos.length;
    photos.forEach(photo => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');

        set(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Creat <img> for photo
        const img = document.createElement('img');

        set(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Event Listener, check when each if finished loading
        img.addEventListener('load', imageLoaded);
        // Put <img> inside <a> , then put inside image container
        item.append(img);
        imageContainer.appendChild(item);
    });
}


// Get photos from Unsplash API
async function get() {
    try {
        const response = await fetch(apiUrl);
        photos = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch Error
        console.log(error);
    }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        get();
    }
});


//On Load
get();