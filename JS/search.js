const searchBar=document.querySelector(".search-bar");
const searchIcon=document.querySelector(".search-icon-link");
const exeptSearch =document.querySelectorAll("body > div:not(.row-1)");
console.log(exeptSearch);
searchIcon.addEventListener("click", (e)=> {
        e.preventDefault();
        if (searchBar.classList.contains("search-bar-active")){
            searchBar.classList.remove("search-bar-active");
            searchBar.classList.add("search-bar-deactive")
        }
        else {
            searchBar.classList.remove("search-bar-deactive")
            searchBar.classList.add("search-bar-active")
        }
    }
);
exeptSearch.forEach(e=>{
    e.addEventListener("click", (e)=>{
    e.preventDefault();
    if (searchBar.classList.contains("search-bar-active")){
        searchBar.classList.remove("search-bar-active");
        searchBar.classList.add("search-bar-deactive")
    }
})
});