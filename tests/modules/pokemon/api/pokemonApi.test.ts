import { pokemonApi } from '@pokemon/api/pokemonApi';

describe('pokemonApi', () => {
  test('should be configurate as expected', () => {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon';

    expect(pokemonApi.defaults.baseURL).toBe(baseURL);
  });
});
