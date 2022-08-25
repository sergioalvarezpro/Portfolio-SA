/**
 * https://jonsuh.com/hamburgers/
 */
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
// Look for .hamburger
let hamburger = document.querySelector(".Header-menu");
let nav = document.querySelector(".Header-nav");
let main = document.querySelector(".Main");

// On click
hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
    main.classList.toggle("block");
    // Do something else, like open/close menu
});


/**Header show/hide */
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll == 0) {
        body.classList.remove(scrollUp);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
});

/**Vertical tabs */
function openTab(event, link) {
    let i,
        tabLink, //Experience-tablink
        tabInfo; //Experience-tabinfo
    const active = " active";

    tabInfo = document.querySelectorAll(".Experience-tabinfo");
    for (i = 0; i < tabInfo.length; i++) {
        tabInfo[i].style.display = "none";
    }

    tabLink = document.querySelectorAll(".Experience-tablink");
    tabSelect = document.querySelector(".Experience-select");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }

    document.getElementById(link).style.display = "block";
    event.currentTarget.className += " active";
}

document.querySelector("#defaultOpen").click();