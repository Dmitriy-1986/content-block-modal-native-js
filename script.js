document.addEventListener("DOMContentLoaded", function () {
    const btnMoreAbout = document.getElementById("btnMoreAbout");
    const popup = document.getElementById("popup");
    const close = document.getElementById("close");

    btnMoreAbout.addEventListener("click", function () {
        popup.style.display = "block";
    });

    close.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
