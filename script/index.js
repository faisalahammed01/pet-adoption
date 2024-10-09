//!----------------Function---------------
//---------Category Pet one by one load----------
const loadPet = async (category) => {
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
  cardContainer.innerHTML = "";

  if (pets.length == 0) {
    cardContainer.classList.remove("grid");
    cardContainer.innerHTML = `
    <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center bg-[#13131316] rounded-xl p-10">
       <img src="images/error.webp" alt="">
    <h2 class="text-center text-xl font-bold">
        No Information Available
    </h2>
    <p>
    
      There is no information about birds on the website, here there is information about dogs, cats and Rabbits..
    </p>

    </div>
    `;
    return;
  } else {
    cardContainer.classList.add("grid");
  }

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
       <p><i class="fa-solid fa-qrcode"></i> Breed:${
         card.breed !== undefined && card.breed !== null
           ? card.breed
           : "Not available"
       }</p>  
       <p><i class="fa-regular fa-calendar"></i> Birth:${
         card.date_of_birth !== undefined && card.date_of_birth !== null
           ? card.date_of_birth
           : "Not available"
       }</p>
       <p><i class="fa-solid fa-mercury"></i> Gender:${
         card.gender !== undefined && card.gender !== null
           ? card.gender
           : "Not available"
       }</p>
       <p><i class="fa-solid fa-dollar-sign"></i> Price:${
         card.price !== undefined && card.price !== null
           ? card.price
           : "Not available"
       }</p></small>
    <div class="flex items-center gap-4">  
      <button ><i onclick="like('${
        card.image
      }')" class="fa-solid fa-thumbs-up"></i></button>
      <button onclick="adoptModal()" class="text-[#0E7A81]">Adopt</button>
      <button onclick="lodeDetails('${
        card.petId
      }')" class="text-[#0E7A81]">Details</button>
    </div>
  </div>
</div>`;
    cardContainer.append(cards);
  });
};

// Onclick caed BTN
const btnLoad = (category) => {
  document.getElementById("pets-section").classList.add("hidden");
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
  timeId = document.getElementById("time");
  timeId.innerHTML = count;
  const timer = setInterval(function () {
    count--;
    if (count >= 0) {
      timeId.innerHTML = count;
    }
    if (count === 0) {
      timeId.innerHTML = count;
    }
    if (count === 0) {
      clearInterval(timer);
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
       <p><i class="fa-solid fa-qrcode"></i> Breed:${
         card.breed !== undefined && card.breed !== null
           ? card.breed
           : "Not available"
       }</p>  
       <p><i class="fa-regular fa-calendar"></i> Birth:${
         card.date_of_birth !== undefined && card.date_of_birth !== null
           ? card.date_of_birth
           : "Not available"
       }</p>
       <p><i class="fa-solid fa-mercury"></i> Gender:${
         card.gender !== undefined && card.gender !== null
           ? card.gender
           : "Not available"
       }</p>
       <p><i class="fa-solid fa-dollar-sign"></i> Price:${
         card.price !== undefined && card.price !== null
           ? card.price
           : "Not available"
       }</p></small>
    <div class="flex items-center gap-4">  
      <button onclick="like('${
        card.image
      }')" ><i class="fa-solid fa-thumbs-up"></i></button>
      <button onclick="adoptModal()" class="text-[#0E7A81]">Adopt</button>
      <button onclick="lodeDetails('${
        card.petId
      }')" class="text-[#0E7A81]">Details</button>
    </div>
  </div>
</div>`;

    cardContainer.append(cards);
  });
};
// -------------Like Button  End----------------
const like = (image) => {
  const likeContainer = document.getElementById("sideCard");
  const side = document.createElement("div");
  side.innerHTML = `<img src="${image}" alt="">
  `;
  likeContainer.append(side);
};

// ---------------Like Button End---------------
// ! <------------------Call Functions--------------------->
categoriesLoad();
cardLoad();
