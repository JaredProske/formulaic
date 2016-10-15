import Utilities from '../src/Utilities/index.js';

describe('Get a random hex color', () => {
    it('returns a valid hex color', () => {
        for (let i = 0; i < 1000; i++) {
            let randomColor = Utilities.getRandomHexColor();
            let testResult = /^#[0-9A-F]{6}$/i.test(randomColor);

            expect(testResult).to.be.true;
        }
    });
});
