class Frame {
  constructor() {
    this.rolls = []
  }

  strike() {
    return this.rolls[0] == 10
  }

  spare() {
    return this.firstTwoRolls() == 10
  }

  firstTwoRolls() {
    return (this.rolls[0] || 0) + (this.rolls[1] || 0)
  }

  incompleteRolls() {
    return this.rolls.length < 2 || (this.rolls.length == 1 && this.strike())
  }

  incompleteScore() {
    return (
      this.incompleteRolls() ||
      ((this.strike() || this.spare()) && this.rolls.length < 3)
    )
  }

  score() {
    if (this.strike() || this.spare()) {
      return this.rolls.reduce((total, value) => total + value, 0)
    } else {
      return this.firstTwoRolls()
    }
  }

  roll(pins) {
    if (this.rolls.length < 3) this.rolls.push(pins)
  }
}

export default Frame
