// API Star Wars
const apiUrl = "https://swapi.dev/api/people/";


const characterList = document.getElementById('characterList');
const searchBar = document.getElementById('searchBar');


async function loadCharacters() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayCharacters(data.results);
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
  }
}

function displayCharacters(characters) {
  characterList.innerHTML = '';
  characters.forEach(character => {
    const characterCard = document.createElement('div');
    characterCard.classList.add('character-card');
    characterCard.innerHTML = `
      <h3>${character.name}</h3>
      <p>Height: ${character.height}</p>
      <p>Mass: ${character.mass}</p>
    `;
    characterList.appendChild(characterCard);
  });
}

loadCharacters();

searchBar.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm)
  );
  displayCharacters(filteredCharacters);
});
