// When the user clicks on a section, page scrolls down
function scrollToDiv(e) {

    if(!e) {
        e = window.event;
    }

    let section = "section";
    let id = e.target.id;
    let destination = section.concat(id);

    let elem = document.getElementById(destination);
    if (!!elem && elem.scrollIntoView) {
        elem.scrollIntoView({behavior: "smooth", block: "center"});
    }
}

// When the user scrolls down 500px from the top of the document, show the button
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    let element = document.getElementById("topScroll");
    element.scrollIntoView({behavior: "smooth"});
}

// Slide show functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slides.length > 0) {
        if (n > slides.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = slides.length
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}

window.onscroll = function() {
    // fixedTop();
    scrollFunction();
};