let videoContainer = document.getElementById("video-container");
let video = document.getElementById("video");
let content = document.getElementById("content");

video.addEventListener("ended",()=>{
    videoContainer.style.display = "none";
    content.style.display = "block";
})