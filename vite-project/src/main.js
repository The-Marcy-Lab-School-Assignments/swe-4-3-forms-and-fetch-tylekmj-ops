// import { renderUsers } from './dom-helpers.js'
import { getRandomPokemon } from './fetch-helpers.js'

const main = () => {
  // getUsers returns a promise!
  getRandomPokemon().then((users) => {
    console.log(users)
  });
}

main();