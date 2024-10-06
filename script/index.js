//!Fetch All Pet Categoriescls

const categoriesLoad = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayVideo(data.categories))
    .catch((error) => console.log(error));
};
//display Categories
const displayVideo = (categories) => {
  const categoriesContainer = document.getElementById("categories");
  categories.forEach((item) => {
    const card = document.createElement("button");
    // card.classList = "btn";
    card.innerHTML = ` <div class="flex items-center gap-4 btn btn-ghost rounded-3xl"><img class='size-9' src="${item.category_icon}"> ${item.category}</div>`;

    categoriesContainer.append(card);
  });
};

// ! Call Funcations
categoriesLoad();
displayVideo();
