import Frame from './Frame'

test('a New Frame should score 0', () => {
  const frame = new Frame()
  expect(frame.score()).toBe(0)
})

test('rolling 3, score should be 3', () => {
  const frame = new Frame()
  frame.roll(3)
  expect(frame.score()).toBe(3)
})

test('rolling 3,2 score should be 5', () => {
  const frame = new Frame()
  frame.roll(3)
  frame.roll(2)
  expect(frame.score()).toBe(5)
})

test('rolling 3,2,3 score should be 5', () => {
  const frame = new Frame()
  frame.roll(3)
  frame.roll(2)
  frame.roll(3)
  expect(frame.score()).toBe(5)
})

test('rolling 3,7,3 score should be 13', () => {
  const frame = new Frame()
  frame.roll(3)
  frame.roll(7)
  frame.roll(3)
  expect(frame.score()).toBe(13)
})

test('rolling 10,7,3 score should be 20', () => {
  const frame = new Frame()
  frame.roll(10)
  frame.roll(7)
  frame.roll(3)
  expect(frame.score()).toBe(20)
})

test('rolling 10,10,10 score should be 30', () => {
  const frame = new Frame()
  frame.roll(10)
  frame.roll(7)
  frame.roll(3)
  expect(frame.score()).toBe(20)
})

test('a frame should have incompleteRolls after one call', () => {
  const frame = new Frame()
  frame.roll(1)
  expect(frame.incompleteRolls()).toBe(true)
})

test('a frame should not have incompleteRolls or after two common rolls', () => {
  const frame = new Frame()
  frame.roll(1)
  frame.roll(7)
  expect(frame.incompleteRolls()).toBe(false)
})

test('a frame should have incompleteScore after one call', () => {
  const frame = new Frame()
  frame.roll(1)
  expect(frame.incompleteScore()).toBe(true)
})

test('a frame should not have a complete score after two common calls', () => {
  const frame = new Frame()
  frame.roll(1)
  frame.roll(2)
  expect(frame.incompleteScore()).toBe(false)
})

test('a frame should have an incomplete score after a spare', () => {
  const frame = new Frame()
  frame.roll(1)
  frame.roll(9)
  expect(frame.incompleteScore()).toBe(true)
})

test('a frame should have an incomplete score after a strike', () => {
  const frame = new Frame()
  frame.roll(10)
  expect(frame.incompleteScore()).toBe(true)
})

test('a frame should have an incomplete score after a strike and a roll', () => {
  const frame = new Frame()
  frame.roll(10)
  frame.roll(7)
  expect(frame.incompleteScore()).toBe(true)
})

test('a frame should have a complete score after a strike and two rolls', () => {
  const frame = new Frame()
  frame.roll(10)
  frame.roll(7)
  frame.roll(3)
  expect(frame.incompleteScore()).toBe(false)

  const frame2 = new Frame()
  frame2.roll(10)
  frame2.roll(10)
  frame2.roll(10)
  expect(frame2.incompleteScore()).toBe(false)
})
