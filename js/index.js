/* Image Slider
---------------------------------------------*/

// Get Slider Items Array.from[Es6 feature]

let sliderImages = Array.from(document.querySelectorAll('.new img'))

// Get Slides Number

let sliderCount = sliderImages.length;

// Set Current Slide

let currentSlide = 1; 

// Slide Number String Element 

let slideNumberElement = document.getElementById('slide-number')

// Previous and Next 

let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')

// Handle Click On Prev And Next Button 

prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

// Create The Main Ul Element 

let paginationElement = document.createElement('ul');

//Set Id on Creatend Element

paginationElement.setAttribute('id', 'pagination-ul');

// Create liS for Pagination Ul 

for (let i = 1; i <= sliderCount; i++){
    // Create The Li 
    let paginationItem = document.createElement('li');
    // Set Custom Attribute
    paginationItem.setAttribute('data-index', i);
    // Set Item Content 
    paginationItem.appendChild(document.createTextNode(i));
    // Append Items to The Main Parent 
    paginationElement.appendChild(paginationItem);
}
// Append Items to Body
document.getElementById('indicators').appendChild(paginationElement)

// Get The New Created Ul
let paginationNewUl = document.getElementById('pagination-ul')

// Get Pagination Items Array.from[Es6 feature]
let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop through all bullets items 
for (let i = 0; i < paginationBullets.length; i++) {
    
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker()
    }

}

// Prev Slide Function
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
    } else {
        currentSlide--;

        theChecker();
    }
}
// Next Slide Function
function nextSlide() {
    
    if (nextButton.classList.contains('disabled')) {
    } else {
        currentSlide++;

        theChecker();
    }
}

// Create The Checker Function

function theChecker() {

    // Set The Slide Number
    slideNumberElement.textContent = 'Slide ' + currentSlide + ' of ' + sliderCount;

    // Remove All Active Classes 
    removeAllActive();
    
    // Set Active Class On Current Slide 
    sliderImages[currentSlide - 1].classList.add('active');

    // Set Active Class On Current pagination Item 
    paginationNewUl.children[currentSlide - 1].classList.add('active');

    // Check If Current Slide Is The First 
    if (currentSlide == 1) {
        prevButton.classList.add('disabled');
    }else{
        prevButton.classList.remove('disabled');
    }
    // Check If Current Slide Is The Last 
    if (currentSlide == sliderCount) {
        nextButton.classList.add('disabled');
    }else{
        nextButton.classList.remove('disabled');

    }
}

theChecker();

// Remove All Active Classes 

function removeAllActive() {

    // Loop Through Images 
    sliderImages.forEach(img => {
        img.classList.remove('active');
    });
    // Loop Through Lis 
    paginationBullets.forEach(li => {
        li.classList.remove('active');
    });
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------

/* Up Button
---------------------------------------------*/

let upButton = document.querySelector('.up')

window.onscroll = function () {
    if (window.pageYOffset >= 1000) {
        upButton.style.display = 'block';
    } else {
        upButton.style.display = 'none';
    }
}

upButton.onclick = function () {
    window.scrollTo(0, 0);
}











