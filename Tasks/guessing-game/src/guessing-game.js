class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.$min = min;
        this.$max = max;
    }

    guess() {
        this.binary = Math.ceil((this.$min + this.$max)/2)
        return this.binary
    }

    lower() {
        this.$max = this.binary
    }

    greater() {
        this.$min = this.binary
    }
}

module.exports = GuessingGame;
