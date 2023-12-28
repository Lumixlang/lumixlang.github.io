const currentDate = new Date();
const startDate = new Date(currentDate.getFullYear(), 11, 20); // Month is 0-indexed
const endDate = new Date(currentDate.getFullYear(), 12, 1);
let scripts = document.getElementById("scripts");
if (currentDate >= startDate && currentDate <= endDate) {
    alert("Happy holidays from Lumix :)");
    scripts.innerHTML += `<script src="https://cdnjs.cloudflare.com/ajax/libs/Snowstorm/20131208/snowstorm-min.js"></script>
<script>
    snowStorm.flakesMax = 50;      // Maximum number of snowflakes
    snowStorm.flakesColor = 'rgb(138, 138, 138)'; // Snowflake color
    snowStorm.animationInterval = 50; // Animation interval in milliseconds
</script>`;
}

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
