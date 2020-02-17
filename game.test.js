import Game from './Game'

test('a New Game should score 0', () => {
  const game = new Game()
  expect(game.score()).toBe(0)
})

test('if I roll 3, score should be 3', () => {
  const game = new Game()
  game.roll(3)
  expect(game.score()).toBe(3)
})

test('if I roll 3,4 score should be 7', () => {
  const game = new Game()
  game.roll(3)
  game.roll(4)
  expect(game.score()).toBe(7)
})

test('if I roll 3,7,3 score should be 16', () => {
  const game = new Game()
  game.roll(3)
  game.roll(7)
  game.roll(3)
  expect(game.score()).toBe(16)
})
