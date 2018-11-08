// When the user clicks on a section, page scrolls down
function scrollToDiv() {

    let section = "section";
    let id = this.event.target.id;
    let destination = section.concat(id);

    let e = document.getElementById(destination);
    if (!!e && e.scrollIntoView) {
        e.scrollIntoView();
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

