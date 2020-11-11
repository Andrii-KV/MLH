import { field, gender, story } from '../../data/testData';
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('MLH-6 VERIFY TEXT IN LABELS, PLACEHOLDERS ARE CORRECT', () => {
  before(() => {
    browser.url('');
    browser.maximizeWindow();
  });

  it('MLH-6.1.0 Title is correct ', () => {
    expect(browser.getTitle()).toEqual(exp.title);
  });

  it('MLH-6.1.1 Label for HEADER = My Little Hero', () => {
    expect($(sel.header).getText()).toEqual(exp.labelHeader);
  });

  it("MLH-6.1.2  Label for subHEADER = Let's create your own HERO! It's super easy with our application!", () => {
    expect($(sel.subHeader).getText()).toEqual(exp.labelSubHeader);
  });

  it("MLH-6.1.3 Label for name = 1. What is your Hero's name?", () => {
    expect($$(sel.label)[field.name].getText()).toEqual(exp.labelName);
  });

  it("MLH-6.1.4  Text in Hero's name placeholder = Hero's name", () => {
    expect($(sel.name).getAttribute('placeholder')).toEqual(exp.NamePlaceholder);
  });

  it('MLH-6.1.5 Label for gender name = 2. Please choose a gender.', () => {
    expect($$(sel.label)[field.gender].getText()).toEqual(exp.labelGender);
  });

  it('MLH-6.1.6 Check radio button HE = he', () => {
    expect($$(sel.radioBtnText)[gender.HE].getText()).toEqual(exp.HE);
  });

  it('MLH-6.1.7 Check radio button SHE = she', () => {
    expect($$(sel.radioBtnText)[gender.SHE].getText()).toEqual(exp.SHE);
  });

  it('MLH-6.1.8 Check radio button IT = it', () => {
    expect($$(sel.radioBtnText)[gender.IT].getText()).toEqual(exp.IT);
  });

  it('MLH-6.1.9 Label for age name = 3. How old is your Hero?', () => {
    expect($$(sel.label)[field.age].getText()).toEqual(exp.labelAge);
  });

  it("MLH-6.1.10 Text in 3. How old is your hero? placeholder = Hero's age", () => {
    expect($(sel.age).getAttribute('placeholder')).toEqual(exp.AgePlaceholder);
  });

  it('MLH-6.1.11 Label for story name = 4. What type of story would you like to read?', () => {
    expect($$(sel.label)[field.story].getText()).toEqual(exp.labelStory);
  });

  it('MLH-6.1.12 Text in 4. What type of story would you like to read? placeholder = Type of the story', () => {
    expect($(sel.story).getText()).toEqual(exp.storyPlaceholder);
  });

  it('MLH-6.1.13 Label for upload an image name = 5. Upload an image (optional).', () => {
    expect($$(sel.label)[field.image].getText()).toEqual(exp.labelImage);
  });

  it('MLH-6.1.14 Text in field click or drag and drop = Click or drag and drop', () => {
    expect($(sel.dragAndDropField).getText()).toEqual(exp.textInDragAndDrop);
  });

  it('MLH-6.1.15 Text in submit button = Create!', () => {
    expect($(sel.submitButton).getText()).toEqual(exp.textSubmitButton);
  });

  describe('MLH-6.2 Verify story type names in dropdown menu', () => {
    before(() => {
      $(sel.dropdownSelections).click();
      $(sel.dropdownMenu).waitForDisplayed();
    });

    it('MLH-6.2.0 Verify story type dropdown menu contains = Overcoming the Monster', () => {
      expect($$(sel.storyPositionInDropdown)[story.overcomingTheMonster].getText()).toEqual(exp.OvercomingTheMonster);
    });

    it('MLH-6.2.1 Verify story type dropdown menu contains = Rebirth', () => {
      expect($$(sel.storyPositionInDropdown)[story.rebirth].getText()).toEqual(exp.Rebirth);
    });

    it('MLH-6.2.2 Verify story type dropdown menu contains = Quest', () => {
      expect($$(sel.storyPositionInDropdown)[story.quest].getText()).toEqual(exp.Quest);
    });

    it('MLH-6.2.3 Verify story type dropdown menu contains = Journey and Return', () => {
      expect($$(sel.storyPositionInDropdown)[story.journeyAndReturn].getText()).toEqual(exp.JourneyAndReturn);
    });

    it('MLH-6.2.4 Verify story type dropdown menu contains = Rags and Riches', () => {
      expect($$(sel.storyPositionInDropdown)[story.ragsAndRiches].getText()).toEqual(exp.RagsAndRiches);
    });

    it('MLH-6.2.5 Verify story type dropdown menu contains = Tragedy', () => {
      expect($$(sel.storyPositionInDropdown)[story.tragedy].getText()).toEqual(exp.Tragedy);
    });

    it('MLH-6.2.6 Verify story type dropdown menu contains = Comedy', () => {
      expect($$(sel.storyPositionInDropdown)[story.comedy].getText()).toEqual(exp.Comedy);
    });
  });
});
