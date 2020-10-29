const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');




describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        it('TC-001 Title is correct ', function () {
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
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('#### Field NAME is displayed', function () {
            const field = $(sel.name).isDisplayed();
            expect(field).toEqual(true);
        });

        it('TC-003 Label for gender is displayed', function () {
            const label = $$(sel.label)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('#### Radio button "he" is displayed', function () {
            const btn = $$(sel.radioBtn)[0].isDisplayed();
            expect(btn).toEqual(true);
        });

        it('#### Radio button "she" is displayed', function () {
            const btn = $$(sel.radioBtn)[1].isDisplayed();
            expect(btn).toEqual(true);
        });

        it('#### Radio button "it" is displayed', function () {
            const btn = $$(sel.radioBtn)[2].isDisplayed();
            expect(btn).toEqual(true);
        });

        it('TC-004 Label for age is displayed', function () {
            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('#### Field AGE is displayed', function () {
            const field = $(sel.age).isDisplayed();
            expect(field).toEqual(true);
        });

        it('TC-005 Label for story is displayed', function () {
            const label = $$(sel.label)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('#### Field STORY is displayed', function () {
            const field = $(sel.story).isDisplayed();
            expect(field).toEqual(true);
        });

        it('TC-006 Label for image upload is displayed', function () {
            const label = $$(sel.label)[4].isDisplayed();
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

        it('TC-007 Label for name = 1. What is your Hero\'s name?', function () {
            const text = $$(sel.label)[0].getText();
            expect(text).toEqual(exp.labelName);
        });

        it('TC-008 Label for gender name = 2. Please choose a gender.', function () {
            const text = $$(sel.label)[1].getText();
            expect(text).toEqual(exp.labelGender);
        });

        it('TC-009 Label for age name = 3. How old is your Hero?', function () {
            const text = $$(sel.label)[2].getText();
            expect(text).toEqual(exp.labelAge);
        });

        it('TC-0010 Label for story name = 4. What type of story would you like to read?', function () {
            const text = $$(sel.label)[3].getText();
            expect(text).toEqual(exp.labelStory);
        });

        // failed because "." is missing
        it('TC-0011 Label for upload an image name = 5. Upload an image (optional).', function () {
            const text = $$(sel.label)[4].getText();
            expect(text).toEqual(exp.labelImage);
        });

    });

});
