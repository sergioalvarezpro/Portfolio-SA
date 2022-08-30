/**
 * 
 * *´¨) 
 *¸.•´¸.•*´¨) ¸.•*¨) 
 *(¸.•´ (¸.•` ¤ Content: 
 *                 1. Hamburger Menu
 *                 2. Sticky Header
 *                 3. Vertical Tab
 *                 4. Button Show More
 *                                              oooO
 *                                             (....)     Oooo
 *                                               ...(     (....)
 *                                                ._)      )../
 *                                                         (_/
 *                                            Solo pasaba por aquí
 *                                                  ¡Saludos!
 */

/**
 * 1. Hamburguer Menu
 * Reference: https://jonsuh.com/hamburgers/
 */
function hamburgerMenu() {
    // Look for .hamburger
    let hamburger = document.querySelector('.Header-menu');
    let nav = document.querySelector('.Header-aside');
    let HeaderLiMobile = document.querySelectorAll('.Header-li-mobile');
    let body = document.querySelector('body');
    // On click
    hamburger.addEventListener("click", function () {
        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
        nav.classList.add("aside-active");
        body.classList.add("blur");
        // Do something else, like open/close menu

        if (!hamburger.classList.contains("is-active")) {
            nav.classList.remove("aside-active");
            body.classList.remove("blur");
        }
    });



    for (let li of HeaderLiMobile) {
        li.addEventListener("click", function () {
            hamburger.classList.remove("is-active");
            nav.classList.remove("aside-active");
            body.classList.remove("blur");
            body.classList.remove("scroll-down");
            body.classList.remove("scroll-up");
        });
    }
}

hamburgerMenu();

/**
 * 2. Sticky Header
 */
function stickyHeader() {
    const body = document.body;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

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
}

stickyHeader();

/**
 * 3. Vertical Tab
 */
function openTab(event, link) {
    let tabLink = document.querySelectorAll(".Experience-tablink");
    let tabInfo = document.querySelectorAll(".Experience-tabinfo");

    for (let li of tabLink) {
        li.className = li.className.replace(" active", "");
    }

    for (let info of tabInfo) {
        info.style.display = "none";
    }

    document.getElementById(link).style.display = "block";
    event.currentTarget.className += " active";
}

let defaultOpen = document.querySelector("#defaultOpen");
defaultOpen.click();

/**
 * 4. Button Show More
*/
function showMore() {
    let more = document.querySelectorAll(".Other-showmore");
    let btnShowMore = document.querySelector(".Other-more");

    btnShowMore.addEventListener("click", function () {
        for (let showMore of more) {
            showMore.classList.toggle("Other-active");

            let textBtn = (showMore.classList.contains("Other-active")) ?
                btnShowMore.innerHTML = "Read less" :
                btnShowMore.innerHTML = "Read more";
        };
    });
}

showMore();