const apiUrl = "https://akabab.github.io/starwars-api/api/all.json";

const characterList = document.getElementById("characterList");
const searchBar = document.getElementById("searchBar");

let characters = [];

const characterImages = {
  "Luke Skywalker": "https://nsabers.es/cdn/shop/articles/opolar_httpss.mj.runWO-xsj2B4pM_A_super_realistic_portrait_of_d96eeb79-b220-46ac-9305-fe7a83dfaf4f_0.png?v=1722400402",
  "C-3PO": "https://images.bauerhosting.com/legacy/empire-images/features/560ebc7b50e6c513721c309f/C-3PO.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80",
  "R2-D2": "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=431%2C0%2C536%2C536",
  "Darth Vader": "https://nsabers.es/cdn/shop/articles/celehey_Generate_an_image_of_Darth_Vader_standing_in_a_dark_o_b4b944ee-2afc-425b-b707-e95eb776c395_1.png?v=1710756391",
  "Leia Organa": "https://swrpggm.com/wp-content/uploads/2020/01/liea2esb.png",
  "Owen Lars": "https://static.wikia.nocookie.net/starwars/images/8/81/Owen-OP.jpg/revision/latest?cb=20070626181249",
  "Beru Whitesun Lars": "https://static.wikia.nocookie.net/starwars/images/7/76/Beru_headshot2.jpg/revision/latest?cb=20111029215429",
  "R5-D4": "https://www.looper.com/img/gallery/the-mandalorian-r5-d4-might-just-have-the-series-best-redemption-story/l-intro-1681921066.jpg",
  "Biggs Darklighter": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsRy66tukIrnTNGYyi1iSw2QmvUGEi_KGdw&s",
  "Obi-Wan Kenobi": "https://www.liveabout.com/thmb/F5lfgFptU9DNTDCT-xNEtot0lQ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EP2-IA-60435_R_8x10-56a83bea3df78cf7729d314a.jpg",
};

async function loadCharacters() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    characters = data;
    displayCharacters(characters);
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  }
}

function displayCharacters(characters) {
  characterList.innerHTML = "";
  characters.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.classList.add("character-card");

    const imageUrl =
      characterImages[character.name] ||
      character.image ||
      "https://via.placeholder.com/200x300?text=No+Image";

    characterCard.innerHTML = `
      <img src="${imageUrl}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p>Height: ${character.height || "Unknown"}</p>
      <p>Mass: ${character.mass || "Unknown"}</p>
      <div class="additional-info">
        <p>Skin Color: ${character.skinColor || "Unknown"}</p>
        <p>Hair Color: ${character.hairColor || "Unknown"}</p>
        <p>Eye Color: ${character.eyeColor || "Unknown"}</p>
        <p>Gender: ${character.gender || "Unknown"}</p>
      </div>
    `;
    characterList.appendChild(characterCard);
  });
}

searchBar.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm)
  );
  displayCharacters(filteredCharacters);
});

loadCharacters();
