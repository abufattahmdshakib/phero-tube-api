//array function for fetch all music comedy and drawing btn
const loadData = () => {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(response => response.json())
        .then(data => {
            showUser(data.categories)
        })
}

const showUser = (categories) => {
    //categiry-container Id  for deynamic btn
    const categiryContainer = document.getElementById("categiry-container");
    //for loop
    for (const categorie of categories) {
        const div = document.createElement("div");
        // div innerhtml for appendchild
        div.innerHTML = `
        <button class="btn btn-sm text-xl p-5 rounded-lg hover:bg-[#FF1F3D]  hover:text-white bg-[#25252520]">${categorie.category}</button>
        `;
        categiryContainer.appendChild(div);
    }
}
// fetch the data call
loadData()