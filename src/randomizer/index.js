import createGenerator from 'seedrandom';

export default class Randomizer {
    constructor(seed = 'randomSeed') {
        this._random = createGenerator(seed);
    }

    getRandomHexColor() {
        return '#000000'.replace(/0/g, () => (Math.floor((this._random() * 16))).toString(16));
    }

    getRandomBool() {
        return this._random() < 0.8;
    }
};
