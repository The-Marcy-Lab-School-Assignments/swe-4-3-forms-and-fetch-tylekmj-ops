export function renderPokemon(pokemonObj) {
  const list = document.querySelector("#discovered-list");

  const li = document.createElement("li");

  const name = document.createElement("p");
  name.textContent = pokemonObj.name;

  const types = document.createElement("p");
  types.textContent = pokemonObj.types;

  const sprite = document.createElement("img");
  sprite.src = pokemonObj.sprite;
  sprite.alt = pokemonObj.name;

  li.append(name, types, sprite);
  list.append(li);
}

export function renderError(msg) {
  const errorEl = document.querySelector("#error");
  errorEl.textContent = msg;
}

export function renderSuccess(msg) {
  const successEl = document.querySelector("#success");
  successEl.textContent = msg;
}
