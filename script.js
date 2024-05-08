// script.js
function addFloor() {
    const propertiesSection = document.getElementById('properties');
    const template = document.querySelector('#propertyTemplate');
    const newProperty = document.importNode(template.content, true); // Import the template content, true for deep clone
    propertiesSection.appendChild(newProperty);
    updateFloorCount(); // Make sure this function is correctly updating the number of floors
}
function removeFloor() {
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection.children.length > 1) {
        propertiesSection.removeChild(propertiesSection.lastChild);
        updateFloorCount();
    }
}

function updateFloorCount() {
    const floorCount = document.getElementById('properties').children.length;
    document.getElementById('floorCount').textContent = floorCount-1;
}

/*function uploadSketch() {
    const input = document.querySelector('#sketch input[type="file"]');
    const file = input.files[0];
    const image = document.getElementById('sketchImage');
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result;
            image.style.display = 'block'; // Show the image element with the uploaded image
        };
        reader.readAsDataURL(file);
    }
}*/

function uploadSketch() {
    const input = document.querySelector('#sketch .image-upload input[type="file"]');
    const file = input.files[0]; // Get the first file from the file input
    const image = document.getElementById('sketchImage'); // Get the image element

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image.src = e.target.result; // Set the source of the image to the uploaded file
            image.style.display = 'block'; // Make the image visible
        };
        reader.readAsDataURL(file); // Convert the file to a data URL and load it
    }
}

function uploadImages() {
    const input = document.querySelector('#images input[type="file"]');
    const files = input.files;
    const imageContainer = document.querySelector('#images .image-container'); // Ensure this container exists in your HTML
    imageContainer.innerHTML = ''; // Clear existing images
    Array.from(files).forEach(file => {
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '100px'; // Set width as needed
                img.style.height = 'auto';
                img.style.marginRight = '10px';
                imageContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
}

function uploadImages() {
    const input = document.querySelector('#images input[type="file"]');
    const container = document.querySelector('.image-scroll-container');
    Array.from(input.files).forEach(file => {
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageContainer = document.createElement('div');
                imageContainer.className = 'image-container';
                
                const img = document.createElement('img');
                img.src = e.target.result;
                
                const captionInput = document.createElement('input');
                captionInput.type = 'text';
                captionInput.placeholder = 'Enter caption...';

                imageContainer.appendChild(img);
                imageContainer.appendChild(captionInput);
                container.appendChild(imageContainer);
            };
            reader.readAsDataURL(file);
        }
    });
}

function addFloor() {
    const propertiesSection = document.getElementById('properties');
    const template = document.querySelector('#propertyTemplate');
    const newProperty = document.importNode(template.content, true); // Import the template content, deeply

    // Calculate the new floor number based on existing floors
    const floorNumber = propertiesSection.children.length;
    const floorTitle = ordinalSuffixOf(floorNumber) + " Floor"; // e.g., "1st Floor", "2nd Floor"

    // Set the floor title
    newProperty.querySelector('.floor-title').textContent = floorTitle;

    propertiesSection.appendChild(newProperty);
    updateFloorCount();
}

// Helper function to add ordinal suffix to numbers
function ordinalSuffixOf(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

addFloor();