import { GameStatus } from '@pokemon/interface/game-status.enum';

describe('GameStatus enum', () => {
  test('Sholud have a value of "palying"', () => {
    expect(GameStatus.Playing).toBe('playing');
  });

  test('Sholud have a value of "won"', () => {
    expect(GameStatus.Won).toBe('won');
  });

  test('Sholud have a value of "lost"', () => {
    expect(GameStatus.Lost).toBe('lost');
  });
});
