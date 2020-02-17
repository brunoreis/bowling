import Frame from './Frame'
class Game {
  constructor() {
    this.rolls = []
    this.frames = []
    this.openFrames = []
  }

  score() {
    return this.frames.reduce((total, frame) => {
      return total + frame.score()
    }, 0)
  }

  roll(pins) {
    const incompleteFrames = this.openFrames.filter(frame =>
      frame.incompleteRolls(),
    )
    if (!incompleteFrames.length) {
      const frame = new Frame()
      this.frames.push(frame)
      this.openFrames.push(frame)
    }
    this.openFrames.forEach(frame => frame.roll(pins))
    this.openFrames = this.openFrames.filter(frame => frame.incompleteScore())
  }
}

export default Game
