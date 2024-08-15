const changeMenu = require("../script");
const slideMenu = require("../script");
const $ = require('jquery');
global.$ = global.jQuery = $;

deforeEach( () => {
    return document.body.header;
})

describe("menu", () => {
    describe("menu icon start", () => {
        test("Should change menu icon", () => {
            expect($(".change").length === 0);
        });

        test("Should change menu icon", () => {
            changeMenu()
            expect($(".change").length === 1);
        });
    });

    describe("slide menu", () => {

    })
})