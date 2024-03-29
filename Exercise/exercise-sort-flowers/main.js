console.log('this works')

const flowers = [
  {
    name: "Tulip",
    color: "yellow",
    image:
      "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
  },
  {
    name: "Daffodil",
    color: "yellow",
    image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
  },
  {
    name: "Sunflower",
    color: "yellow",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
  },
  {
    name: "Bluebell",
    color: "blue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
  },
  {
    name: "Rose",
    color: "red",
    image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
  }
];

//---------- RENDER FLOWERS TO PAGE
const ul = document.querySelector("ul");

function renderFlowersToPage(data) {}
renderFlowersToPage(flowers);

//---------- SORTING METHOD AND COMPARE FUNCTION
let filterBtns = document.querySelector(".filters");
let cards = document.querySelectorAll(".card");

function sortingFn(event) {
    if(event.target.classlist.contains('filter-btn')){
        const filterValue = event.target.getAttribute('data-filter')

        if (filterValue === 'ascending'){
            flowers.sorts(function(a,b){
                if(a.name < b.name){
                    return -1
                }
                if(a.name > b.name){
                    return 1
                }
                return 0
            })
            ul.innerHTML = ""
            renderFlowersToPage(flowers)

        } else if (filterValue === 'descending'){
            ul.innerHTML = ""
            
        }
    }
}
filterBtns.addEventListener("click", sortingFn);