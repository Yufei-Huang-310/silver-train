console.log('this works')

//---------- DATASET

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

function renderFlowersToPage(results) {
    for(let i = 0; i<results.length; i++){
        let listitem = document.createElement('li');
        listitem.classList.add('card', results[i].color)
        let title = document.createElement('h3')
        title.textContent = results[i].name

        let color = document. createElement('p')
        color.classList.add(results[i].color)
        color.textContent = results[i].color

        let image = document. createElement('img')
        image.setAttribute('src', results[i].image)

        ul. appendChild(listitem)
        listitem.appendChild(title)
        listitem.appendChild(color)
        listitem.appendChild(image)

        
    }
}
renderFlowersToPage(flowers);

//---------- FILTER FLOWERS BY COLOR

let filterBtns = document.querySelector(".filters");
let cards = document.querySelectorAll(".card");

function filterFn(event) {
    console.log(event.target)
    if(event.target.classlist.contains('filter-btn')){
       let activeBtn = filterBtns.querySelector('.active')
       activeBtn.classList.remove('active')

       event.target.classList.add('active')

       const filterValue = event.target.getAttribute('data-filter')

       for(let i = 0; i< cards.length; i++){
        if(cards[i].classList.contains(filterValue) || filterValue === 'all'){
            cards[i].classList.remove('hide')
            cards[i].classList.add('show')
        }else{
            cards[i].classList.remove('show')
            cards[i].classList.add('hide')
        }
       }
    }
}
filterBtns.addEventListener("click", filterFn);