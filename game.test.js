import Game from './Game'

test('a New Game should score 0', () => {
  const game = new Game()
  expect(game.score()).toBe(0)
})
