// work with twenty twenty library
$(document).ready(function () {
    if ($.fn.twentytwenty) {
        $(".before-after-container").twentytwenty();
    } else {
        return;
    }
});

// work with anchors link
function scrollToAnchor(anchorId) {
    const targetElement = document.getElementById(anchorId);
    if (targetElement) {
        const offsetTop = targetElement.offsetTop - 50;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
}

const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const anchorId = this.getAttribute("href").substring(1);
        scrollToAnchor(anchorId);
    });
});

// work with faq
const questionItem = document.querySelectorAll(".js-question");

questionItem.forEach((item) => {
    item.addEventListener("click", () => {
        questionItem.forEach((que) => {
            que.classList.remove("active");
        });

        item.classList.add("active");
    });
});
