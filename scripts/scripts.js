function scrollToDiv() {

    let section = "section";
    let id = this.event.target.id;
    let destination = section.concat(id);

    let e = document.getElementById(destination);
    console.log(e);
    if (!!e && e.scrollIntoView) {
        e.scrollIntoView();
    }
}

