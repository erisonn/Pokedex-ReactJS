const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


const formattedPokemonTypes = (itemData) => itemData.types && itemData.types.map(type => {
  return {
    'name' : capitalizeFirstLetter(type.type.name),
    'id' : type.slot
  }
})

const formattedPokemonStats = (itemData) => {
  return [
    {'name': itemData.height, 'id': 1},
    {'name': itemData.weight, 'id': 2},
    {'name': itemData.ability, 'id': 3}
  ]
}

const formattedPokemonCombatStats = (itemData) => itemData.stats && itemData.stats.map(stat => {
  return {
    'name': `${capitalizeFirstLetter(stat.stat.name)}: ${stat.base_stat}`,
    'id': stat.stat.url
  }
})


export { formattedPokemonTypes, formattedPokemonStats, formattedPokemonCombatStats }
export default capitalizeFirstLetter;