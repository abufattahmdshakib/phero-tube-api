//array function for fetch all music comedy and drawing btn
const loadData = () => {
    // fetch the data btn
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(response => response.json())
        .then(data => {
            showUserbtn(data.categories)
        })
} 
//sectiuon 1 array function for fetch videos
const loadVieos = () => {
    // fetch the data videos
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(response => response.json())
    .then(data => {
        showUserVideos(data.videos)
    })
}
//array function for fetch all music comedy and drawing btn
const showUserbtn = (categories) => {
    //categiry-container Id  for deynamic btn
    const categiryContainer = document.getElementById("categiry-container");
    //for loop
    for (const categorie of categories) {
        const div = document.createElement("div");
        // div innerhtml for appendchild
        div.innerHTML = `
        <button class="btn btn-sm text-xl p-5 rounded-lg hover:bg-[#FF1F3D]  hover:text-white bg-[#25252520]">${categorie.category}</button>
        `;
        categiryContainer.append(div);
    }
}

//sectiuon 1 array function for fetch videos
const showUserVideos = (videos) => {
const videosContainer = document.getElementById("videos-container");
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
                        <h1 class="text-xl font-semibold">Midnight Serenade</h1>
                        <p class="flex gap-2 items-center text-lg text-gray-500">${video.authors[0].profile_name} <img src="./ph-tube-resources/Group 3.png"></p>
                        <p class="text-lg text-gray-500">${video.others.views} views</p>
                    </div>
                </div>
            </div>
    `;
    videosContainer.append(videoCard);
});
}

// fetch the data call
loadData()