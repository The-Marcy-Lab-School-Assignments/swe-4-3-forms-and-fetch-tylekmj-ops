// export const getRandomPokemon = async () => {
//     let randomID = Math.round(Math.random() * 150) + 1

//   fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });
// }

export const getRandomPokemon = async () => { 
  try {
    let randomID = Math.round(Math.random() * 150) + 1

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`);
  
    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    const types = ``
    console.log(data)
    data.types.forEach((obj) => (types += obj.type.name))
    console.log(types)

    // const pokemons = data.map((pokemon) => ({
    //   id: user.id,
    //   name: user.name,
    //   username: user.username,
    //   email: user.email
    // }));

    let pokeObj = {
      name: data.name,
      types: data.types,
      sprite: data.sprites.front_default
    }
    
    console.log(pokeObj)
  } catch (error) {
    console.log("Error caught! " + error.message);
    return { data: null, error: error };
  }
};
