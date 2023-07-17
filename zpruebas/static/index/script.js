document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;

        const progressBar = document.querySelector(".progress-bar");
        progressBar.style.width = scrollPercent + "%";

        let containerHeader = document.getElementById("container-header");
        let containerHeaderFase2 = document.getElementById("container-header-fase-2");

        if (scrollPercent >= 5) {
            if (!containerHeaderFase2) {
                containerHeaderFase2 = document.createElement("div");
                containerHeaderFase2.id = "container-header-fase-2";
                containerHeader.parentNode.insertBefore(containerHeaderFase2, containerHeader.nextSibling);
                containerHeader.remove();
            }
        } else {
            if (!containerHeader) {
                containerHeader = document.createElement("div");
                containerHeader.id = "container-header";
                containerHeaderFase2.parentNode.insertBefore(containerHeader, containerHeaderFase2.nextSibling);
                containerHeaderFase2.remove();
            }
        }
    });
});
