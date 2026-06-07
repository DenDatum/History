const video = document.getElementById('vid1');

video.onended = function() {
    window.location.href = "origin.html";
};