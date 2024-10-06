//!-------------Fetch All Pet Categoriescls-------------------------

const categoriesLoad = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displaybtn(data.categories))
    .catch((error) => console.log(error));
};
//<--------------------Button display Show---------------------------->
const displaybtn = (categories) => {
  const categoriesContainer = document.getElementById("categories");
  categories.forEach((item) => {
    const btn = document.createElement("button");
    btn.innerHTML = ` <div class="flex items-center gap-4 btn btn-ghost rounded-3xl border border-gray-200 "><img class='size-9' src="${item.category_icon}"> ${item.category}</div>`;

    categoriesContainer.append(btn);
  });
};

// ! <------------------All Pets Card part------------------->

const cardLoad = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((card) => cardShow(card.pets))
    .catch((error) => console.log(error));
};
// <-----------------Card Display Show-------------------->
const cardShow = (pets) => {
  const cardContainer = document.getElementById("pet-card");
  pets.forEach((card) => {
    console.log(card);
    const cards = document.createElement("div");
    cards.classList = "card border border-gray-200";
    cards.innerHTML = `
  <figure>
    <img
      src="${card.image}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      Shoes!
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>`;
    cardContainer.append(cards);
  });
};
// ! <------------------Call Functions--------------------->
categoriesLoad();
cardLoad();
