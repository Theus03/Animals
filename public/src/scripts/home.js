let url = "";

let elExit = document.getElementById("routeExit");

if (document.location.host != "theus03.github.io") {
    elExit.href = "/index.html";
} else {
    elExit.href = "/Animals/";
}

