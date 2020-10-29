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

        it('TC-002 Label for name', function () {
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-003 Label for gender', function () {
            const label = $$(sel.label)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-004 Label for age', function () {
            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Label for story', function () {
            const label = $$(sel.label)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-006 Label for image upload', function () {
            const text = $$(sel.label)[4].isDisplayed();
            expect(text).toEqual(true);
        });

    });

    describe('Labels are correct', function () {

        it('TC-007 Label for name = 1. What is your HERO\'s name?', function () {
            const text = $$(sel.label)[0].getText();
            expect(text).toEqual(exp.labelName);
        });

        it('TC-008 Label for gender name = 2. Please choose a gender.', function () {
            const text = $$(sel.label)[1].getText();
            expect(text).toEqual(exp.labelGender);
        });

        it('TC-009 Label for age name = 3. How old is your hero?', function () {
            const text = $$(sel.label)[2].getText();
            expect(text).toEqual(exp.labelAge);
        });

        it('TC-0010 Label for story name = 4. What type of story would you like to read?', function () {
            const text = $$(sel.label)[3].getText();
            expect(text).toEqual(exp.labelStory);
        });

        it('TC-0011 Label for story name = 5. Upload an image (optional)', function () {
            const text = $$(sel.label)[4].getText();
            expect(text).toEqual(exp.labelImage);
        });

    });

});
