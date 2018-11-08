// When the user clicks on a section, page scrolls down
function scrollToDiv(e) {

    if(!e) {
        e = window.event;
    }

    let section = "section";
    let id = e.target.id || e.srcElement;
    let destination = section.concat(id);

    let elem = document.getElementById(destination);
    if (!!elem && elem.scrollIntoView) {
        elem.scrollIntoView();
    }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

