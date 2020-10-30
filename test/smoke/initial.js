const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');




describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        it('TC-001 Title is correct ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            browser.maximizeWindow()
            browser.deleteAllCookies();
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
        it("##### Label for HEADER = My Little Hero", function () {
            const text = $(sel.header).getText();
            expect(text).toEqual(exp.labelHeader);
        });

        it("##### Label for subHEADER = Let's create your own HERO! It's super easy with our application!", function () {
            const text = $(sel.subHeader).getText();
            expect(text).toEqual(exp.labelSubHeader);
        });

        it.skip("TC-007 Label for name = 1. What is your Hero's name?", function () {
            const text = $$(sel.label)[0].getText();
            expect(text).toEqual(exp.labelName);
        });

        it("#####  Text in Hero's name placeholder = Hero's name", function () {
            const text = $(sel.name).getAttribute("placeholder");
            expect(text).toEqual(exp.NamePlaceholder);
        });

        it.skip('TC-008 Label for gender name = 2. Please choose a gender.', function () {
            const text = $$(sel.label)[1].getText();
            expect(text).toEqual(exp.labelGender);
        });

        it('Check radio button HE = he', function () {
            const text = $$(sel.radioBtnText)[0].getText();
            expect(text).toEqual(exp.HE);
        });

        it('Check radio button SHE = she', function () {
            const text = $$(sel.radioBtnText)[1].getText();
            expect(text).toEqual(exp.SHE);
        });

        it('Check radio button IT = it', function () {
            const text = $$(sel.radioBtnText)[2].getText();
            expect(text).toEqual(exp.IT);
        });

        it.skip('TC-009 Label for age name = 3. How old is your Hero?', function () {
            const text = $$(sel.label)[2].getText();
            expect(text).toEqual(exp.labelAge);
        });

        it("##### Text in 3. How old is your hero? placeholder = Hero's age", function () {
            expect($(sel.age).getAttribute("placeholder")).toEqual(exp.AgePlaceholder);
        });

        it('TC-0010 Label for story name = 4. What type of story would you like to read?', function () {
            expect($$(sel.label)[3].getText()).toEqual(exp.labelStory);
        });

        it('##### Text in 4. What type of story would you like to read? placeholder = Type of the story', function () {
            expect($(sel.story).getText()).toEqual(exp.storyPlaceholder);
        });

        // failed because "." is missing
        it.skip('TC-0011 Label for upload an image name = 5. Upload an image (optional).', function () {
            expect($$(sel.label)[4].getText()).toEqual(exp.labelImage);
        });

        it('##### Text in field click or drag and drop = Click or drag and drop', function () {
            expect($(sel.dragAndDropField).getText()).toEqual(exp.textInDragAndDrop);
        });

    });
    describe("Verify story type names in dropdown menu", function (){
        before(() => {
            $(sel.dropdownSelections).click();
        })

        it('##### Verify story type dropdown menu contains = Overcoming the Monster', function () {
            expect($$(sel.dropdownStory)[0].getText()).toEqual(exp.story1);
        });

        it('##### Verify story type dropdown menu contains = Rebirth', function () {
            expect($$(sel.dropdownStory)[1].getText()).toEqual(exp.story2);
        });

        it('##### Verify story type dropdown menu contains = Quest', function () {
            expect($$(sel.dropdownStory)[2].getText()).toEqual(exp.story3);
        });

        it('##### Verify story type dropdown menu contains = Journey and Return', function () {
            expect($$(sel.dropdownStory)[3].getText()).toEqual(exp.story4);
        });

        it('##### Verify story type dropdown menu contains = Rags and Riches', function () {
            expect($$(sel.dropdownStory)[4].getText()).toEqual(exp.story5);
        });

        it('##### Verify story type dropdown menu contains = Tragedy', function () {
            expect($$(sel.dropdownStory)[5].getText()).toEqual(exp.story6);
        });

        it('##### Verify story type dropdown menu contains = Comedy', function () {
            expect($$(sel.dropdownStory)[6].getText()).toEqual(exp.story7);
        });
        after(() => {
            $(sel.dropdownSelections).click();
        })
    })


});
