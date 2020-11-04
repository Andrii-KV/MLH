const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
import {field,story,gender } from "../../data/helpers";
const path = require('path');
const data = require("../../data/testData.json");
const inputValues4 = require('../../helpers/inputValues4');
const inputeValues4AndClick = require('../../helpers/inputValues4AndClick');


describe('My Little Hero', ()=> {

    describe('Getting to the page', ()=> {

        it('TC-001 Title is correct ', ()=> {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            browser.maximizeWindow();
            browser.deleteAllCookies();
            expect(browser.getTitle()).toEqual('MLH trial');
        });

    });

    describe.skip('Labels exist', ()=> {

        it('##### Header is displayed ', ()=> {
            expect($(sel.header).isDisplayed()).toEqual(true);
        });

        it('##### Sub header is displayed ', ()=> {
            expect($(sel.subHeader).isDisplayed()).toEqual(true);
        });

        it('TC-002 Label for name is displayed', ()=> {
            expect($$(sel.label)[field.name].isDisplayed()).toEqual(true);
        });

        it('#### Field NAME is displayed', ()=> {
            expect($(sel.name).isDisplayed()).toEqual(true);
        });

        it('TC-003 Label for gender is displayed', ()=> {
            expect($$(sel.label)[field.gender].isDisplayed()).toEqual(true);
        });

        it('#### Radio button "he" is displayed', ()=> {
            expect($$(sel.radioBtn)[gender.HE].isDisplayed()).toEqual(true);
        });

        it('#### Radio button "she" is displayed', ()=> {
            expect($$(sel.radioBtn)[gender.SHE].isDisplayed()).toEqual(true);
        });

        it('#### Radio button "it" is displayed', ()=> {
            expect($$(sel.radioBtn)[gender.IT].isDisplayed()).toEqual(true);
        });

        it('TC-004 Label for age is displayed', ()=> {
            expect($$(sel.label)[field.age].isDisplayed()).toEqual(true);
        });

        it('#### Field AGE is displayed', ()=> {
            expect($(sel.age).isDisplayed()).toEqual(true);
        });

        it('TC-005 Label for story is displayed', ()=> {
            expect($$(sel.label)[field.story].isDisplayed()).toEqual(true);
        });

        it('#### Field STORY is displayed', ()=> {
            expect($(sel.story).isDisplayed()).toEqual(true);
        });

        it('TC-006 Label for image upload is displayed', ()=> {
            expect($$(sel.label)[field.image].isDisplayed()).toEqual(true);
        });

        it('##### Field click or drag and drop is displayed', ()=> {
            expect($(sel.dragAndDropField).isDisplayed()).toEqual(true);
        });

        it('##### Submit button is displayed', ()=> {
            expect($(sel.submitButton).isDisplayed()).toEqual(true);
        });

    });

    describe.skip('Verify text in LABELS, PLACEHOLDERS is correct', ()=> {


        it("##### Label for HEADER = My Little Hero", ()=> {
            expect($(sel.header).getText()).toEqual(exp.labelHeader);
        });

        it("##### Label for subHEADER = Let's create your own HERO! It's super easy with our application!", ()=> {
            expect($(sel.subHeader).getText()).toEqual(exp.labelSubHeader);
        });

        it("TC-007 Label for name = 1. What is your Hero's name?", ()=> {
            expect($$(sel.label)[field.name].getText()).toEqual(exp.labelName);
        });

        it("#####  Text in Hero's name placeholder = Hero's name", ()=> {
            expect($(sel.name).getAttribute("placeholder")).toEqual(exp.NamePlaceholder);
        });

        it('TC-008 Label for gender name = 2. Please choose a gender.', ()=> {
            expect($$(sel.label)[field.gender].getText()).toEqual(exp.labelGender);
        });

        it('Check radio button HE = he', ()=> {
            expect($$(sel.radioBtnText)[gender.HE].getText()).toEqual(exp.HE);
        });

        it('Check radio button SHE = she', ()=> {
            expect($$(sel.radioBtnText)[gender.SHE].getText()).toEqual(exp.SHE);
        });

        it('Check radio button IT = it', ()=> {
            expect($$(sel.radioBtnText)[gender.IT].getText()).toEqual(exp.IT);
        });

        it('TC-009 Label for age name = 3. How old is your Hero?', ()=> {
            expect($$(sel.label)[field.age].getText()).toEqual(exp.labelAge);
        });

        it("##### Text in 3. How old is your hero? placeholder = Hero's age", ()=> {
            expect($(sel.age).getAttribute("placeholder")).toEqual(exp.AgePlaceholder);
        });

        it('TC-0010 Label for story name = 4. What type of story would you like to read?', ()=> {
            expect($$(sel.label)[field.story].getText()).toEqual(exp.labelStory);
        });

        it('##### Text in 4. What type of story would you like to read? placeholder = Type of the story', ()=> {
            expect($(sel.story).getText()).toEqual(exp.storyPlaceholder);
        });

        it('TC-0011 Label for upload an image name = 5. Upload an image (optional).', ()=> {
            expect($$(sel.label)[field.image].getText()).toEqual(exp.labelImage);
        });

        it('##### Text in field click or drag and drop = Click or drag and drop', ()=> {
            expect($(sel.dragAndDropField).getText()).toEqual(exp.textInDragAndDrop);
        });

        it('Text in submit button = Create!', ()=> {
            expect($(sel.submitButton).getText()).toEqual(exp.textSubmitButton);
        });



    });

    describe.skip("Verify story type names in dropdown menu", ()=>{
        before(() => {
            $(sel.dropdownSelections).click();
            browser.pause(1000)
        })

        it('##### Verify story type dropdown menu contains = Overcoming the Monster', ()=> {
            expect($$(sel.dropdownStory)[story.overcomingTheMonster].getText()).toEqual(exp.story1);
        });

        it('##### Verify story type dropdown menu contains = Rebirth', ()=> {
            expect($$(sel.dropdownStory)[story.rebirth].getText()).toEqual(exp.story2);
        });

        it('##### Verify story type dropdown menu contains = Quest', ()=> {
            expect($$(sel.dropdownStory)[story.quest].getText()).toEqual(exp.story3);
        });

        it('##### Verify story type dropdown menu contains = Journey and Return', ()=> {
            expect($$(sel.dropdownStory)[story.journeyAndReturn].getText()).toEqual(exp.story4);
        });

        it('##### Verify story type dropdown menu contains = Rags and Riches', ()=> {
            expect($$(sel.dropdownStory)[story.ragsAndRiches].getText()).toEqual(exp.story5);
        });

        it('##### Verify story type dropdown menu contains = Tragedy', ()=> {
            expect($$(sel.dropdownStory)[story.tragedy].getText()).toEqual(exp.story6);
        });

        it('##### Verify story type dropdown menu contains = Comedy', ()=> {
            expect($$(sel.dropdownStory)[story.comedy].getText()).toEqual(exp.story7);
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
            //$$(sel.submitButton)[1].waitForDisplayed();
            browser.pause(1000)
            $$(sel.submitButton)[0].click();
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
            inputeValues4AndClick(data.name, data.gender.he, data.age, data.storyType)
            expect($(sel.tryAgainBtn).isDisplayed()).toEqual(true);

        });

    });

});
