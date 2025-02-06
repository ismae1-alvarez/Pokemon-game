import type { Pokemon } from '@pokemon/interface/pokemon.interface';

describe('Pokemon interface', () => {
  const pokemon: Pokemon = { id: 1, name: 'bulbasur' };

  test('should have an id property of type number', () => {
    expect(pokemon.id).toEqual(expect.any(Number));
  });

  test('shouldhabe a name property of type string', () => {
    expect(pokemon.name).toEqual(expect.any(String));
  });
});
