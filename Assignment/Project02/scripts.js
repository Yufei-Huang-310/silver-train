function fetchGalleryData() {
    return fetch("data.json")
      .then((response) => response.json())
      .catch((error) => console.error("Error fetching gallery data:", error));
  }
  
function renderGalleryItem(itemData) {
    const img = document.createElement("img");
    img.src = itemData.url;
  
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");
    galleryItem.dataset.category = itemData.category;
    galleryItem.appendChild(img);
  
    return galleryItem;
  }
  
  function applyFilter(filter) {
    const galleryItems = document.querySelectorAll(".gallery-item");
    galleryItems.forEach((item) => {
      if (filter === "all" || item.dataset.category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Fetch and render gallery data
    fetchGalleryData().then((data) => {
      const gallery = document.querySelector(".gallery");
      data.forEach((itemData) => {
        const galleryItem = renderGalleryItem(itemData);
        gallery.appendChild(galleryItem);
      });
    });
  
    // Add event listeners for filter buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const filter = event.target.dataset.filter;
        applyFilter(filter);
  
        // Set the active filter button
        filterButtons.forEach((btn) => {
          if (btn === event.target) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      });
    });
  
    // Apply 'all' filter on page load
    applyFilter("all");
  });


  document.addEventListener("DOMContentLoaded", () => {
    const navigateButton = document.getElementById("navigateButton");
    navigateButton.addEventListener("click", () => {
      window.location.href = "index2.html";
    });
  });


