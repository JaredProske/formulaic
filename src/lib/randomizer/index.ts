import seedrandom from 'seedrandom';

export default class Randomizer {
  private readonly generator: seedrandom.prng;

    constructor(seed = 'randomSeed') {
        this.generator = seedrandom(seed);
    }

    getRandomHexColor(): string {
        return '#000000'.replace(/0/g, () => (Math.floor((this.generator() * 16))).toString(16));
    }

    getRandomBool(): boolean {
        return this.generator() < 0.8;
    }
};
