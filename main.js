var button = document.getElementById("share-button");

var modal = document.getElementById("myModal");

var closeBtn = modal.querySelector(".close");
button.addEventListener("click", function() {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});