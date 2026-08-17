const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeajrzjn";

export async function getRandomPokemon() {
  try {
    const id = Math.floor(Math.random() * 150) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) throw new Error(`Fetch failed. Status: ${response.status}`);

    const data = await response.json();

    const pokemonObj = {
      name: data.name,
      types: data.types.map((t) => t.type.name).join(", "),
      sprite: data.sprites.front_default,
    };

    return { data: pokemonObj, error: null };
  } catch (error) {
    return { data: null, error };
  }
}

export async function postDiscoveredPokemon(formData) {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error(`Fetch failed. Status: ${response.status}`);

    const responseData = await response.json();

    return { data: responseData, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
