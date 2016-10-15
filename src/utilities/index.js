export default {
    getRandomHexColor() {
        return '#000000'.replace(/0/g, () => (Math.floor((Math.random() * 16))).toString(16));
    },

    getRandomBool() {
        return Math.random() < .8;
    }
};
