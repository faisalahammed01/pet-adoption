//!----------------Function---------------
//---------Category Pet one by one load----------
const loadPet = async (category) => {
  // console.log(category);

  document.getElementById("loading").style.display = "none";
  // load data
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${category}`
  );
  const data = await res.json();

  displayPet(data.data);
};
//---------Category Pet one by one display----------
const displayPet = (pets) => {
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
      <button ><i class="fa-solid fa-thumbs-up"></i></button>
      <button onclick="lodeAdopt()" class="text-[#0E7A81]">Adopt</button>
      <button onclick="lodeDetails('${card.petId}')" class="text-[#0E7A81]">Details</button>
    </div>
  </div>
</div>`;
    cardContainer.append(cards);
  });
};

// Onclick caed BTN
const btnLoad = (category) => {
  document.getElementById("loading").style.display = "block";
  setTimeout(function () {
    loadPet(category);
  }, 2000);
};

//!-------------Fetch All Pet Categories-------------------------

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
    btn.innerHTML = `<button onclick="btnLoad('${item.category}')" class="flex items-center gap-4 btn btn-ghost rounded-3xl border border-gray-200 "><img class='size-9' src="${item.category_icon}"> ${item.category}</button>`;

    categoriesContainer.append(btn);
  });
};
const lodeDetails = async (petId) => {
  console.log(petId);
  const url = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.petData);
};
// -----------------button details----------------
const displayDetails = (card) => {
  const detailsContainer = document.getElementById("modalContainer");
  detailsContainer.innerHTML = `
      <img class="w-full" src="${card.image}">
      <h2 class="font-extrabold text-2xl py-3">Alessia Max</h2>
      <small class="font-semibold"><p class="py-2">
          <i class="fa-solid fa-qrcode"></i>
          Breed:${card.breed}
          </p>
          <p class="py-2">
          <i class="fa-regular fa-calendar-check"></i>
          Birth:${card.date_of_birth}
          </p>
          <p class="py-2">
          <i class="fa-solid fa-mercury"></i>
          Gender:${card.gender}
          </p>
          <p class="py-2">
          <i class="fa-solid fa-dollar-sign"></i>
          Price:${card.price}
          </p></small>

          <h2 class="font-bold py-3">Details Information</h2>
          <p>${card.pet_details}</p>
  `;

  document.getElementById("customModal").showModal();
};
// -----------------button Details  END-------------------
// Adoprt modal part
function adoptModal() {
  let count = 3;
  setInterval(function () {
    count--;
    if (count >= 0) {
      timeId = document.getElementById("time");
      timeId.innerHTML = count;
    }
    if (count === 0) {
      document.getElementById("close").click();
    }
  }, 1000);
  document.getElementById("showAdopt").click();
}
// ! <------------------All Pets Card part------------------->

const cardLoad = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((card) => cardShow(card.pets))
    .catch((error) => console.log(error));
};
// <-----------------Card Display Show-------------------->
const cardShow = (pets) => {
  const cardContainer = document.getElementById("pets-card");
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
      <button ><i class="fa-solid fa-thumbs-up"></i></button>
      <button onclick="adoptModal()" class="text-[#0E7A81]">Adopt</button>
      <button onclick="lodeDetails('${card.petId}')" class="text-[#0E7A81]">Details</button>
    </div>
  </div>
</div>`;
    cardContainer.append(cards);
  });
};
// ! <------------------Call Functions--------------------->
categoriesLoad();
cardLoad();
