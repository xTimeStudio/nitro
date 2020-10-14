
// find elements
let prevButtonClick = document.getElementById('show-prev-btn');
let nextButtonClick = document.getElementById('show-next-btn');
let slideImage = document.getElementById('slide-image');
let newsHeader = document.getElementById('news-header');
// subscribe to events
prevButtonClick.addEventListener('click', onShowPrevButtonClick)
nextButtonClick.addEventListener('click', onShowNextButtonClick)


// create images array
let imageUrls = [];
imageUrls.push('https://static9.depositphotos.com/1011646/1236/i/450/depositphotos_12369509-stock-photo-breaking-news-screen.jpg');
imageUrls.push('https://electrek.co/wp-content/uploads/sites/3/2020/07/Tesla-hatchback.jpg?quality=82&strip=all');
imageUrls.push('https://images.thestar.com/A35UNR4tFIwOm3cPO1TOW2wQFoo=/1200x797/smart/filters:cb(2700061000)/https://www.thestar.com/content/dam/thestar/news/gta/2011/12/15/toronto_zoo_tiger_mauled_to_death_by_mate/tiger.jpeg');
imageUrls.push('https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,g=0.5x0.5,f=auto/ce41fca3-947a-4deb-a341-c0cc55480db6.png');

let currentImageIndex = 0;
prevButtonClick.disabled = true;
prevButtonClick.hidden = true;
newsHeader.innerText = "BREAKING NEWS"
slideImage.src = imageUrls[currentImageIndex];
// functions definitions
function onShowPrevButtonClick() {
    currentImageIndex--;
    nextButtonClick.disabled = false;
    nextButtonClick.hidden = false;
    if(currentImageIndex === 0){
        newsHeader.innerText = "BREAKING NEWS"
        newsHeader.style.color = "black";
    }
    if(currentImageIndex === 1) {
        newsHeader.innerText = "NEW TESLA CARS!! HOT SALE";
        newsHeader.style.color = "white";
        }
        if(currentImageIndex === 2) {
        newsHeader.innerText = "Tigers in zoo still live";
        newsHeader.style.color = "blue";
        }
        if(currentImageIndex === 3) {
            newsHeader.innerText = "Bottle flip challenge is end";
            newsHeader.style.color = "yellow";
        }
    // disable prev button if need
    if(currentImageIndex === 0) {
        prevButtonClick.disabled = true;
        prevButtonClick.hidden = true;
    }
    // change src to prev image
    slideImage.src = imageUrls[currentImageIndex];
}

function onShowNextButtonClick() {
    currentImageIndex++;
    if(currentImageIndex === 1) {
    newsHeader.innerText = "NEW TESLA CARS!! HOT SALE";
    newsHeader.style.color = "white"
    }
    if(currentImageIndex === 2) {
    newsHeader.innerText = "Tigers in zoo still live";
    newsHeader.style.color = "blue"
    }
    if(currentImageIndex === 3) {
        newsHeader.innerText = "Bottle flip challenge is end"
        newsHeader.style.color = "yellow"
    }
    prevButtonClick.disabled = false;
    prevButtonClick.hidden = false;

    // disable next button if need
    if(currentImageIndex === (imageUrls.length - 1)) {
        nextButtonClick.disabled = true;
        nextButtonClick.hidden = true;
    }
    // change src to next image
    slideImage.src = imageUrls[currentImageIndex];
}
