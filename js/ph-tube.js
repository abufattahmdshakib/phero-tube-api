//remove btn onclick color all music comedy and drawing btn
function removeActiveClass() {
    const activeButtons = document.getElementsByClassName("active");
    for (let btn of activeButtons) {
        btn.classList.remove("active");
    }
};

//array function for fetch all music comedy and drawing btn
const loadData = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(response => response.json())
        .then(data => {
            showUserbtn(data.categories)
        });
};



//sectiuon 1 array function for fetch videos
const loadVieos = (searchText = "") => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then(response => response.json())
        .then(data => {
            //btn all  call
            removeActiveClass()
            document.getElementById("btn-all").classList.add("active");
            showUserVideos(data.videos);
        });
};


// //Show Details load data
const loadVieoDetails = (videoid) => {
    console.log(videoid);
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoid}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            showDetails(data.video);
        });
};
//Show Details dispaly
const showDetails = (video) => {
    document.getElementById("video_details").showModal();
    const detaileContainer = document.getElementById("detaile_container");
    detaileContainer.innerHTML = `
<div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img class="w-full h-[200px] object-cover"
       src="${video.thumbnail}"/>
  </figure>
  <div class="card-body">
    <h1 class="text-xl font-semibold text-white">${video.title}</h1>
     <p class="flex gap-2 items-center text-lg text-white">${video.authors[0].profile_name} ${video.authors[0].verified == true ? `<img src="./ph-tube-resources/Group 3.png">` : ` `}</p>
    <p class="text-lg text-white">${video.others.views} views</p>
  </div>
</div>
`;
}

//load data for  music comedy and drawing btn
const loadCategorieVideo = (id) => {
    // open api url 
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            removeActiveClass();
            const clickedButton = document.getElementById(`btn-${id}`);
            clickedButton.classList.add("active");
            console.log(clickedButton)
            showUserVideos(data.category);
        });

};




//array function for fetch all music comedy and drawing btn
const showUserbtn = (categories) => {
    const categiryContainer = document.getElementById("categiry-container");
    for (const categorie of categories) {
        const div = document.createElement("div");
        div.innerHTML = `
        <button id="btn-${categorie.category_id}" onclick=" loadCategorieVideo ( ${categorie.category_id})" class="btn btn-sm text-xl p-5 rounded-lg hover:bg-red-400 bg-[#25252520]">${categorie.category}</button> `;
        categiryContainer.append(div);
    };
};




//sectiuon 1 array function for fetch videos
const showUserVideos = (videos) => {
    const videosContainer = document.getElementById("videos-container");
    videosContainer.innerHTML = "";
    if (videos.length == 0) {
        videosContainer.innerHTML = `<div class=" py-8 flex col-span-full flex-col text-center justify-center items-center mx-auto">
                <img src="./ph-tube-resources/Icon.png" alt="">
                <h1 class="text-4xl mt-8  w-96 font-bold ">Oops!! Sorry, There is no content here</h1>
            </div>`;
        return;
    };
    videos.forEach(video => {
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
            <div class="card bg-base-100">
                <figure class="relative">
                    <img class="w-full h-[200px] object-cover" src="${video.thumbnail}" alt="videos" />
                        <span class=" text-lg text-[#FFFFFF] bg-[#171717] absolute bottom-3 right-3 px-2 py-1 rounded-sm">3hrs 56 min ago</span>
                </figure>
                <div class="flex px-0 py-5 gap-3">
                    <div>
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                <img src="${video.authors[0].profile_picture}" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-xl font-semibold">${video.title}</h1>
                        <p class="flex gap-2 items-center text-lg text-gray-500">${video.authors[0].profile_name} ${video.authors[0].verified == true ? `<img src="./ph-tube-resources/Group 3.png">` : ` `}</p>
                        <p class="text-lg text-gray-500">${video.others.views} views</p>
                    </div>
                </div>
                <button onclick= loadVieoDetails('${video.video_id}') class="btn hover:bg-red-400  rounded-lg btn-block">Show Details</button>
            </div>`;
        videosContainer.append(videoCard);
    });
};


document.getElementById("search_input").addEventListener("keyup", (search) => {
const input = search.target.value;
loadVieos (input);
})


// fetch the data call
loadData();