const people = [
    { name: "adri" },
    { name: "becky" },
    { name: "chris" },
    { name: "dillon" },
    { name: "evan" },
    { name: "frank" },
    { name: "georgette" },
    { name: "hugh" },
    { name: "igor" },
    { name: "jacoby" },
    { name: "kristina" },
    { name: "lemony" },
    { name: "matilda" },
    { name: "nile" },
    { name: "ophelia" },
    { name: "patrick" },
    { name: "quincy" },
    { name: "roslyn" },
    { name: "solene" },
    { name: "timothy" },
    { name: "uff" },
    { name: "violet" },
    { name: "wyatt" },
    { name: "xavier" },
    { name: "yadri" },
    { name: "zack" }
  ];
  
  const searchBar = document.querySelector("input");
  const ul = document.querySelector("ul");
  const clearButton = document.getElementById('clear')
  
  //---------- RENDER NAMES TO PAGE
  function renderNamesToPage(data) {}
  renderNamesToPage(people);
  
  //---------- SEARCH DATASET FOR SPECIFIC NAME
  function searchNames(event) {
    console.log(event.target.value)
    let searchQuery =event.target.value;

    const searchedName = people.filter(function(person){
        if (searchQuery){
            return person.name.includes(searchQuery)
        }
    })

    displaySearched(searchedName)
  }
  searchBar.addEventListener("keyup", searchNames);
  
  //---------- DISPLAY ONLY THE SPECIFIC NAME
  function displaySearched(name) {
    console.log('search value', names)
    for (let i = 0; i < names. length; i++){
        let ListItem = document. createElement('li')
        ListItem. TextContent = names [i].name
        ul.appendChild[ListItem]
     }
     }
  
  //---------- CLEAR LIST BEFORE RENDERING SPECIFIC NAME
  function clearList() {}
     ul.innerHTML = ""
  
  //---------- CLEAR FROM WITH BUTTON
  function clearSearchForm() {
    searchBar.reset()
  }
  clearButton.addEventListener('click', clearSearchForm)