//!----------------Function---------------
//
const loadPet = () => {
  document.getElementById("loading").style.display = "none";
};

// Onclick caed BTN
const btnLoad = () => {
  document.getElementById("loading").style.display = "block";
  setTimeout(function () {
    loadPet();
  }, 2000);
};

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
    const btn = document.createElement("div");
    btn.innerHTML = ` <button onclick="btnLoad()" class="flex items-center gap-4 btn btn-ghost rounded-3xl border border-gray-200 "><img class='size-9' src="${item.category_icon}"> ${item.category}</button>`;

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
    const cards = document.createElement("div");
    cards.classList = "card border border-gray-200";
    cards.innerHTML = `
  <figure>
    <img
      src="${card.image}" />
  </figure>
  <div class="card-body">
        <small><h3 class="text-xl font-bold">${card.pet_name}</h3>
       <p><i class="fa-solid fa-qrcode"></i> Breed:${card.breed}</p>  
       <p><i class="fa-regular fa-calendar"></i> Birth:${card.date_of_birth}</p>
       <p><i class="fa-solid fa-mercury"></i> Gender:${card.gender}</p>
       <p><i class="fa-solid fa-dollar-sign"></i> Price:${card.price}</p></small>
    <div class="flex items-center gap-4">  
      <button class'btn'><i class="fa-solid fa-thumbs-up"></i></button>
      <button class="text-[#0E7A81]">Adopt</button>
      <button class="text-[#0E7A81]">Details</button>
    </div>
  </div>
</div>`;
    cardContainer.append(cards);
  });
};
// ! <------------------Call Functions--------------------->
categoriesLoad();
cardLoad();
