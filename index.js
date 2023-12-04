function installLumix() {
    alert("In maintenance.");
}

var currentImageIndex = 0;
var galleryImages = document.querySelectorAll('.gallery-image');
var prevBtn = document.getElementById('prev-btn');
var textContainers = ["Pfirst", "Psecond"];

function showImage(index) {
    galleryImages.forEach(function (image, i) {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });

    textContainers.forEach(function (textContainer, i) {
        var text = document.getElementById(textContainer);
        if (text) {
            text.style.display = i === index ? 'block' : 'none';
        }
    });

    prevBtn.disabled = index === 0;
}

function changeImage(offset) {
    currentImageIndex += offset;

    if (currentImageIndex < 0) {
        currentImageIndex = 0;
    } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = galleryImages.length - 1;
    }

    showImage(currentImageIndex);
}

showImage(currentImageIndex);