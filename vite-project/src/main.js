import { getRandomPokemon, postDiscoveredPokemon } from "./fetch-helpers.js";
import { renderPokemon, renderError, renderSuccess } from "./dom-helpers.js";

async function getAndRenderPokemon() {
  const { data, error } = await getRandomPokemon();

  if (error) {
    renderSuccess("");
    renderError(error.message);
    return;
  }

  renderPokemon(data);
  renderSuccess(`${data.name} was discovered!`);
  renderError("");
}

const discoverButton = document.querySelector("#discover-button");
discoverButton.addEventListener("click", getAndRenderPokemon);

window.addEventListener("load", getAndRenderPokemon);

const catchForm = document.querySelector("#catch-form");
catchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(catchForm);
  const formValues = Object.fromEntries(formData.entries());
  formValues.isFavorite = catchForm.elements.isFavorite.checked;

  const { data, error } = await postDiscoveredPokemon(formValues);

  if (error) {
    renderError("Error: unable to capture Pokémon. Please try again later");
    return;
  }

  renderSuccess(`${formValues.name} has been captured!`);
  catchForm.reset();
});
