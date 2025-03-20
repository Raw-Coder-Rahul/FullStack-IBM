let API_KEY = "";

let lower_body = document.getElementById("lower-body");

let search_term = document.getElementById("query").value || "India Gate";

async function getData() {
    try {
        let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`);

        let res = await data.json();
        console.log(res.items);
        showData(res.items);
    }catch(error) {
        console.log(error);
    }
}

getData();

async function showData(arr) {
    document.getElementById("loading").style.display="none";
    arr.forEach(({snippet,id}) => {
        let box = document.createElement("div");
        box.className="video-card";

        let img = document.createElement("img");
        img.src = snippet.thumbnails.medium.url;
        img.className = "thumbnail";

        let title = document.createElement("h2");
        title.innerText = snippet.title;
        title.className = "title";

        let channel_title = document.createElement("p");
        channel_title.innerText = snippet.channelTitle;
        channel_title.className = "channel-name";

        box.append(img , title, channel_title);

        lower_body.append(box);

        box.onclick=()=> {
            let obj = {
                snippet, id
            }

            localStorage.setItem("videoData",JSON.stringify(obj));

            window.location.href = "video.html"; 
        }
    });
}