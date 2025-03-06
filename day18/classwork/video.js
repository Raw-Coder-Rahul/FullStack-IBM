let videoData = JSON.parse(localStorage.getItem("videoData"));

let mainContainer = document.getElementById("container");

async function showVideo() {
    let iframe = document.createElement("iframe");

    iframe.src = `https://www.youtube.com/embed/${DataTransfer.id.videoId}`;

    iframe.height = "500px";
    iframe.width = "500px";

    iframe.setAttribute("allowfullscreen");

    mainContainer.append(iframe);
}

showVideo(videoData);
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/OkxiPuCj0hw?si=634F6QT0qu2Sj3Bt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}