import Randomizer from '.';

describe('Get a random hex color', () => {
    it('returns a valid hex color', () => {
        const rand = new Randomizer();

        for (let i = 0; i < 1000; i++) {
            const randomColor = rand.getRandomHexColor();
            const testResult = /^#[0-9A-F]{6}$/i.test(randomColor);

            expect(testResult).toBe(true);
        }
    });

    it('can be seeded', () => {
        const coolSeed = 'Welcome to the party, pal.';
        let subject = new Randomizer(coolSeed);
        const firstColors = [];

        for (let i = 0; i < 1000; i++) {
            firstColors.push(subject.getRandomHexColor());
        }

        subject = new Randomizer(coolSeed);
        const secondColors = [];

        for (let i = 0; i < 1000; i++) {
            secondColors.push(subject.getRandomHexColor());
        }

        expect(secondColors).toEqual(firstColors);
    });
});

describe('Get a random bool', () => {
    it('can be seeded', () => {
        const coolSeed = 'Welcome to the party, pal.';
        let rand = new Randomizer(coolSeed);
        const firstBools = [];

        for (let i = 0; i < 10000; i++) {
            firstBools.push(rand.getRandomBool());
        }

        rand = new Randomizer(coolSeed);
        const secondBools = [];

        for (let i = 0; i < 10000; i++) {
            secondBools.push(rand.getRandomBool());
        }
        expect(secondBools).toEqual(firstBools);
    });
});