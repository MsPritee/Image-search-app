const accessKey = '4UHJKf2ITRhUqikDd9suE0qmA20wFpndhHl06B_fcAs'

const formElement = document.querySelector("frm");
const inputElement = document.getElementById("search-box");
const searchOutput = document.querySelector(".output");
const showMore = document.getElementById("show-more-btn");

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputElement.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchOutput.innerHTML = "";
    }

    results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("output");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild("image");
        imageWrapper.appendChild("imageLink");
        imageWrapper.appendChild("searchOutput");

    })

    page++

    if (page > 1) {
        showMore.style.display = "block";
    }
}


formElement.addEventListener("submit", (event) => {
    event.preventDefault()
    page = 1,
    searchImages
})

showMore.addEventListener("click", () => {
    page = 1,
        searchImages
})