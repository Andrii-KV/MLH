const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
import field from "../../data/helpers";
//const image = require('../../data/2.png');
const path = require('path');




describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        it('TC-001 Title is correct ', function () {
            browser.maximizeWindow();
            browser.deleteAllCookies();
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            let title = browser.getTitle();
            expect(title).toEqual('MLH trial');
        });

    });

    describe('Labels exist', function () {

        it('##### Header is displayed ', function () {
            const header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('##### Sub header is displayed ', function () {
            const subHeader = $(sel.subHeader).isDisplayed();
            expect(subHeader).toEqual(true);
        });

        it('TC-002 Label for name is displayed', function () {
            const label = $$(sel.label)[field.name].isDisplayed();
            expect(label).toEqual(true);
        });

        it('#### Field NAME is displayed', function () {
            const field = $(sel.name).isDisplayed();
            expect(field).toEqual(true);
        });

        it('TC-003 Label for gender is displayed', function () {
            const label = $$(sel.label)[field.gender].isDisplayed();
            expect(label).toEqual(true);
        });

        it('#### Radio button "he" is displayed', function () {
            const btn = $$(sel.radioBtn)[field.HE].isDisplayed();
            expect(btn).toEqual(true);
        });

        it('#### Radio button "she" is displayed', function () {
            const btn = $$(sel.radioBtn)[field.SHE].isDisplayed();
            expect(btn).toEqual(true);
        });

        it('#### Radio button "it" is displayed', function () {
            const btn = $$(sel.radioBtn)[field.IT].isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-004 Label for age is displayed', function () {
            const label = $$(sel.label)[field.age].isDisplayed();
            expect(label).toEqual(true);
        });

        it('#### Field AGE is displayed', function () {
            const field = $(sel.age).isDisplayed();
            expect(field).toEqual(true);
        });

        it('TC-005 Label for story is displayed', function () {
            const label = $$(sel.label)[field.story].isDisplayed();
            expect(label).toEqual(true);
        });

        it('#### Field STORY is displayed', function () {
            const field = $(sel.story).isDisplayed();
            expect(field).toEqual(true);
        });

        it('TC-006 Label for image upload is displayed', function () {
            const label = $$(sel.label)[field.image].isDisplayed();
            expect(label).toEqual(true);
        });

        it('##### Field click or drag and drop is displayed', function () {
            const field = $(sel.dragAndDropField).isDisplayed();
            expect(field).toEqual(true);
        });

        it('##### Submit button is displayed', function () {
            const btn = $(sel.submitButton).isDisplayed();
            expect(btn).toEqual(true);
        });

    });

    describe('Labels are correct', function () {
        it("##### Label for HEADER = My Little Hero", function () {
            const text = $(sel.header).getText();
            expect(text).toEqual(exp.labelHeader);
        });

        it("##### Label for subHEADER = Let's create your own HERO! It's super easy with our application!", function () {
            const text = $(sel.subHeader).getText();
            expect(text).toEqual(exp.labelSubHeader);
        });

        it("TC-007 Label for name = 1. What is your Hero's name?", function () {
            const text = $$(sel.label)[field.name].getText();
            expect(text).toEqual(exp.labelName);
        });

        it("#####  Text in Hero's name placeholder = Hero's name", function () {
            const text = $(sel.name).getAttribute("placeholder");
            expect(text).toEqual(exp.NamePlaceholder);
        });

        it('TC-008 Label for gender name = 2. Please choose a gender.', function () {
            const text = $$(sel.label)[field.gender].getText();
            expect(text).toEqual(exp.labelGender);
        });

        it('Check radio button HE = he', function () {
            const text = $$(sel.radioBtnText)[field.HE].getText();
            expect(text).toEqual(exp.HE);
        });

        it('Check radio button SHE = she', function () {
            const text = $$(sel.radioBtnText)[field.SHE].getText();
            expect(text).toEqual(exp.SHE);
        });

        it('Check radio button IT = it', function () {
            const text = $$(sel.radioBtnText)[field.IT].getText();
            expect(text).toEqual(exp.IT);
        });

        it('TC-009 Label for age name = 3. How old is your Hero?', function () {
            const text = $$(sel.label)[field.age].getText();
            expect(text).toEqual(exp.labelAge);
        });

        it("##### Text in 3. How old is your hero? placeholder = Hero's age", function () {
            expect($(sel.age).getAttribute("placeholder")).toEqual(exp.AgePlaceholder);
        });

        it('TC-0010 Label for story name = 4. What type of story would you like to read?', function () {
            expect($$(sel.label)[field.story].getText()).toEqual(exp.labelStory);
        });

        it('##### Text in 4. What type of story would you like to read? placeholder = Type of the story', function () {
            expect($(sel.story).getText()).toEqual(exp.storyPlaceholder);
        });

        // failed because "." is missing
        it('TC-0011 Label for upload an image name = 5. Upload an image (optional).', function () {
            expect($$(sel.label)[field.image].getText()).toEqual(exp.labelImage);
        });

        it('##### Text in field click or drag and drop = Click or drag and drop', function () {
            expect($(sel.dragAndDropField).getText()).toEqual(exp.textInDragAndDrop);
        });

        it('##### Text in submit button  = Create!', function () {
            expect($(sel.submitButton).getText()).toEqual(exp.textSubmitButton);
        });

    });
    describe("Verify story type names in dropdown menu", function (){
        before(() => {
            $(sel.dropdownSelections).click();
        });

        it('##### Verify story type dropdown menu contains = Overcoming the Monster', function () {
            expect($$(sel.dropdownStory)[field.overcomingTheMonster].getText()).toEqual(exp.story1);
        });

        it('##### Verify story type dropdown menu contains = Rebirth', function () {
            expect($$(sel.dropdownStory)[field.rebirth].getText()).toEqual(exp.story2);
        });

        it('##### Verify story type dropdown menu contains = Quest', function () {
            expect($$(sel.dropdownStory)[field.quest].getText()).toEqual(exp.story3);
        });

        it('##### Verify story type dropdown menu contains = Journey and Return', function () {
            expect($$(sel.dropdownStory)[field.journeyAndReturn].getText()).toEqual(exp.story4);
        });

        it('##### Verify story type dropdown menu contains = Rags and Riches', function () {
            expect($$(sel.dropdownStory)[field.ragsAndRiches].getText()).toEqual(exp.story5);
        });

        it('##### Verify story type dropdown menu contains = Tragedy', function () {
            expect($$(sel.dropdownStory)[field.tragedy].getText()).toEqual(exp.story6);
        });

        it('##### Verify story type dropdown menu contains = Comedy', function () {
            expect($$(sel.dropdownStory)[field.comedy].getText()).toEqual(exp.story7);
        });
    });

    describe("Create a story", ()=>{
        it("Should create a story with required fields only ", () =>{
            $(sel.name).setValue("Nik");
            $$(sel.radioBtn)[field.HE].click();
            $(sel.age).setValue(123);
            $(sel.dropdownSelections).click();
            $$(sel.dropdownStory)[field.overcomingTheMonster].click();
            $(sel.submitButton).click();
            expect($(sel.storyPage).isDisplayed()).toEqual(true);
            $(sel.tryAgainBtn).click();

        });

        it.skip("Should create a story with all fields", () =>{
            $(sel.name).setValue("Nik");
            $$(sel.radioBtn)[field.HE].click();
            $(sel.age).setValue(123);
            $(sel.dropdownSelections).click();
            $$(sel.dropdownStory)[field.overcomingTheMonster].click();
            //$(sel.dragAndDropField).click();
            //browser.uploadFile(path.join(__dirname, '../../data/2.png'));
            $(sel.dragAndDropField).setValue(browser.uploadFile(path.join(__dirname,'../../data/2.jpg')))

            $(sel.submitButton).click();
            browser.pause(1000);
            expect($(sel.storyPage).isDisplayed()).toEqual(true);
        });
    });


});
