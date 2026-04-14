const accessKey="CUSoSNiBfzfDBaVyr5ICXj2rQhSsejSsfhOdmCZQKyU";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const loadMoreBtn = document.getElementById("load-more-btn");

let keyword="";
let page=1;

async function searchImages() {
    keyword=searchInput.value;
    const url=`https://api.unsplash.com/search/photos?&page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response=await fetch(url);
    const data=await response.json();

    if(page===1){
        searchResults.innerHTML="";
    }

    const results=data.results;

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResults.appendChild(imageLink);
})
loadMoreBtn.style.display="block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})
loadMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})
