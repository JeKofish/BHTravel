
document.getElementById("user").addEventListener("click", function() {
    document.getElementById("second").style.display = "none";
});
document.getElementById("client").addEventListener("click", function() {
    document.getElementById("second").style.display = "flex";
    document.getElementById("first").style.height = "600px";
});

