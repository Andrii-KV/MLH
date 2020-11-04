const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
import {field,story,gender } from "../../data/helpers";
const path = require('path');
const data = require("../../data/testData.json");
const inputValues4 = require('../../helpers/inputValues4');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick');


describe('My Little Hero', ()=> {

    describe('Getting to the page', ()=> {

        it('TC-001 Title is correct ', ()=> {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            browser.maximizeWindow();
            browser.deleteAllCookies();
            expect(browser.getTitle()).toEqual('MLH trial');
        });

    });








    describe("CREATE A STORY",()=>{

        it('should create a story with required fields only', function () {
            $(sel.name).setValue("Nick");
            $$(sel.radioBtn)[gender.HE].click();
            $(sel.age).setValue(38);
            $(sel.dropdownSelections).click();
            $$(sel.dropdownStory)[story.comedy].click();
            $(sel.submitButton).click();
            expect($(sel.storyPage).isDisplayed()).toEqual(true);

        });

        it('should create a story with all fields', function () {
            const filePath = path.join(__dirname, '../../data/2.jpg');
            const remoteFilePath = browser.uploadFile(filePath);
            $(sel.tryAgainBtn).click();
            $(sel.name).setValue("Nick");
            $$(sel.radioBtn)[gender.HE].click();
            $(sel.age).setValue("38");
            $(sel.dropdownSelections).click();
            $$(sel.dropdownStory)[story.comedy].click();
            browser.execute(function () {
                document.getElementsByTagName('input')[6].style.display = 'block';
            });
            $('.ant-upload input').waitForDisplayed();

            $('.ant-upload input').setValue(remoteFilePath);
            $(sel.submitButton).click();
            expect($(sel.storyPage).isDisplayed()).toEqual(true);
        });

    });

    describe.skip("Verify valid input",()=>{

        it('Verify name letters input (1) length', function () {
            browser.refresh();
            $(sel.name).setValue("N");
            expect($(sel.name).getValue()).toEqual("N");
        });

        it('Verify name letters input (70) length', function () {
            browser.refresh();
            $(sel.name).setValue("Character Count Tool  Character Counter is a free character counter to");
            expect($(sel.name).getValue()).toEqual("Character Count Tool  Character Counter is a free character counter to");
        });

        it('Verify name numbers input (1) length', function () {
            browser.refresh();
            $(sel.name).setValue("1");
            expect($(sel.name).getValue()).toEqual("1");
        });

        it('Verify name numbers input (70) length', function () {
            browser.refresh();
            $(sel.name).setValue("1234567890123456789012345678901234567890123456789012345678901234567890");
            expect($(sel.name).getValue()).toEqual("1234567890123456789012345678901234567890123456789012345678901234567890");
        });

        it('Verify name symbols input (70) length', function () {
            browser.refresh();
            $(sel.name).setValue("ͳϙϾͼϚϛϡϠϕϔ⨊⨇⨄⨆⨌⨨⨧⨢⨟⨞⅟⅘Ⅶ⁰₂ⅺⅱⅳ≹←→▶ÄäãɒÆ$₶﷼₷₴₮_+-=[]{}﷼₾|/?><.,!@#$%^&*()");
            expect($(sel.name).getValue()).toEqual("ͳϙϾͼϚϛϡϠϕϔ⨊⨇⨄⨆⨌⨨⨧⨢⨟⨞⅟⅘Ⅶ⁰₂ⅺⅱⅳ≹←→▶ÄäãɒÆ$₶﷼₷₴₮_+-=[]{}﷼₾|/?><.,!@#$%^&*()");
        });

    });

    describe.skip("mainFunctionality",()=>{

        it('TEST', function () {
            $(sel.name).setValue(data.name);
            $$(sel.radioBtn)[data.gender.she].click();
            $(sel.age).setValue(data.age);
            $(sel.dropdownSelections).click();
            $$(sel.dropdownStory)[story.comedy].click();

            expect($(sel.submitButton).isEnabled()).toEqual(true);

        });
        it('TEST1', function () {
            inputValues4(data.name, data.gender.she, data.age, data.storyType)
            expect($(sel.submitButton).isEnabled()).toEqual(true);

        });

        it('TEST2', function () {
            browser.refresh();
            inputValues4AndClick(data.name, data.gender.he, data.age, data.storyType)
            expect($(sel.tryAgainBtn).isDisplayed()).toEqual(true);

        });

    });

});
