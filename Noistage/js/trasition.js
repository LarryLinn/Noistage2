const transition = document.getElementById('transition');


setTimeout(function () {
    transition.classList.add('show');
}, 1000);

function redirect(element) {
    var linkHref = element.getAttribute("data-href");
    transition.classList.remove('show');

    var xhr = new XMLHttpRequest();

    xhr.open("HEAD", linkHref, true);
    setTimeout(function (){
       xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                window.location.href = linkHref;
            } else {
                window.location.href = "underconstruction.html";
            }
        }
    };
    xhr.send();
    },1500);
}
