import { inputValues4, inputValues5, inputValues4AndClick, inputValues5AndClick, clearInputBox } from '../../helpers/methods';

import { number, gender, image, name, story } from '../../data/testData';
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('MAIN FUNCTIONALITY', () => {
  before(() => {
    browser.url('');
    browser.maximizeWindow();
  });

  describe('CREATE A STORY', () => {
    it('should create a story with required fields only', function () {
      inputValues4AndClick(name.userHe, gender.HE, number.age, story.comedy);
      expect($(sel.storyPage).isDisplayed()).toEqual(true);
    });

    it('should create a story with all fields (*.jpg)', function () {
      inputValues5AndClick(name.userHe, gender.HE, number.age, story.comedy, image.testImageJpg);
      expect($(sel.storyPage).isDisplayed()).toEqual(true);
    });

    it('should create a story with all fields (*.png)', function () {
      inputValues5AndClick(name.userHe, gender.HE, number.age, story.comedy, image.testImagePng);
      expect($(sel.storyPage).isDisplayed()).toEqual(true);
    });

    afterEach(() => {
      $(sel.tryAgainBtn).waitForDisplayed();
      $(sel.tryAgainBtn).click();
    });
  });

  describe('SUBMIT BUTTON', () => {
    it('SUBMIT button is INACTIVE by default', () => {
      expect($(sel.submitButton).isClickable()).toEqual(false);
    });

    it('SUBMIT button is INACTIVE with NAME field filled', () => {
      $(sel.name).setValue(name.userShe);
      expect($(sel.submitButton).isClickable()).toEqual(false);
    });

    it('SUBMIT button is INACTIVE with NAME,GENDER field filled', () => {
      $(sel.name).setValue(name.userHe);
      $$(sel.gender)[gender.HE].click();
      expect($(sel.submitButton).isClickable()).toEqual(false);
    });

    it('SUBMIT button is INACTIVE with NAME,GENDER,AGE field filled', () => {
      $(sel.name).setValue(name.userHe);
      $$(sel.gender)[gender.HE].click();
      $(sel.age).setValue(number.age);
      expect($(sel.submitButton).isClickable()).toEqual(false);
    });

    it('SUBMIT Button is ACTIVE with REQUIRED fields filled up', () => {
      inputValues4(name.userHe, gender.HE, number.age, story.comedy);
      expect($(sel.submitButton).isClickable()).toEqual(true);
    });

    it('SUBMIT Button is ACTIVE with ALL fields filled up', () => {
      inputValues5(name.userHe, gender.HE, number.age, story.comedy, image.testImageJpg);
      expect($(sel.submitButton).isClickable()).toEqual(true);
    });

    afterEach(() => {
      browser.refresh();
    });
  });

  describe('ERROR MESSAGE', () => {
    afterEach(() => {
      browser.refresh();
    });

    it('should check that ERROR MESSAGE displayed when name field empty', function () {
      $(sel.name).setValue(name.userIt);
      clearInputBox(sel.name);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).isDisplayed()).toEqual(true);
    });

    it('should check that ERROR MESSAGE = "Required" when name field is empty', function () {
      $(sel.name).setValue(name.userIt);
      clearInputBox(sel.name);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).getText()).toEqual(exp['errorMSG.Required']);
    });

    it('should check that ERROR MESSAGE displayed when name field over 71 symbols', function () {
      $(sel.name).setValue(name.user71Symbols);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).isDisplayed()).toEqual(true);
    });

    it('should check that ERROR MESSAGE = "70 symbols max" when user enter name bigger than 70 symbols', function () {
      $(sel.name).setValue(name.user71Symbols);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).getText()).toEqual(exp['errorMSG.70SymbolsMax']);
    });

    it('should check that ERROR MESSAGE displayed when clicking age spinner down', function () {
      $(sel.spinnerAgeDown).click();
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).isDisplayed()).toEqual(true);
    });

    it('should check that ERROR MESSAGE = "looks like unreal age" when clicking age spinner down', function () {
      $(sel.spinnerAgeDown).click();
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).getText()).toEqual(exp['errorMSG.UnrealAge']);
    });

    it('should check that ERROR MESSAGE displayed when input -10 in age field', function () {
      $(sel.age).setValue(number.number2);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).isDisplayed()).toEqual(true);
    });

    it('should check that ERROR MESSAGE = "looks like unreal age" when input -10 in age field', function () {
      $(sel.age).setValue(number.number2);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).getText()).toEqual(exp['errorMSG.UnrealAge']);
    });

    it('should check that ERROR MESSAGE displayed when clicking age spinner down and clear input', function () {
      $(sel.spinnerAgeDown).click();
      clearInputBox(sel.age);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).isDisplayed()).toEqual(true);
    });

    it('should check that ERROR MESSAGE = "Required" when clicking age spinner down and clear input', function () {
      $(sel.spinnerAgeDown).click();
      clearInputBox(sel.age);
      browser.keys('Backspace');
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).getText()).toEqual(exp['errorMSG.Required']);
    });

    it('should check that ERROR MESSAGE displayed when input -10 in age field and clear input', function () {
      $(sel.age).setValue(number.number2);
      clearInputBox(sel.age);
      browser.keys('Backspace');
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).isDisplayed()).toEqual(true);
    });

    it('should check that ERROR MESSAGE = "Required" when input -10 in age field and clear input', function () {
      $(sel.age).setValue(number.number2);
      clearInputBox(sel.age);
      browser.keys('Backspace');
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).getText()).toEqual(exp['errorMSG.Required']);
    });

    it('should throw an error while trying to upload the PDF file', () => {
      inputValues5(name.userIt, gender.IT, number.age, story.journeyAndReturn, image.testImagePdf);
      $(sel.errorMessageImage).waitForDisplayed();
      expect($(sel.errorMessageImage).isDisplayed()).toEqual(true);
    });

    it("error message should be = 'You can only upload JPG/PNG file!' while trying to upload the PDF file", () => {
      inputValues5(name.userIt, gender.IT, number.age, story.journeyAndReturn, image.testImagePdf);
      $(sel.errorMessageImage).waitForDisplayed();
      expect($(sel.errorMessageImage).getText()).toEqual(exp.errorMessageImage);
    });

    it('should throw an error while trying to upload the JPG file 4.1 MB', () => {
      inputValues5(name.userIt, gender.IT, number.age, story.journeyAndReturn, image.testImageJpg41);
      $(sel.errorMessageImage).waitForDisplayed();
      expect($(sel.errorMessageImage).isDisplayed()).toEqual(true);
    });

    it("error message should be = 'Image must be smaller than 4MB!' while trying to upload the JPG over 4.1 MB file", () => {
      inputValues5(name.userIt, gender.IT, number.age, story.journeyAndReturn, image.testImageJpg41);
      $(sel.errorMessageImage).waitForDisplayed();
      expect($(sel.errorMessageImage).getText()).toEqual(exp.errorMessageImageSmaller4Mb);
    });
  });

  describe('TYPE OF STORY SELECTED', () => {
    beforeEach(() => {
      browser.refresh();
      $(sel.dropdownSelections).click();
      $(sel.dropdownMenu).waitForDisplayed();
    });

    it('##### Verify that selected story type is displayed = Overcoming the Monster', () => {
      $$(sel.storyPositionInDropdown)[story.overcomingTheMonster].click();
      $(sel.selectedStoryType).waitForDisplayed();
      expect($(sel.selectedStoryType).getText()).toEqual(exp.OvercomingTheMonster);
    });

    it('##### Verify that selected story type is displayed = Rebirth', () => {
      $$(sel.storyPositionInDropdown)[story.rebirth].click();
      $(sel.selectedStoryType).waitForDisplayed();
      expect($(sel.selectedStoryType).getText()).toEqual(exp.Rebirth);
    });

    it('##### Verify that selected story type is displayed = Quest', () => {
      $$(sel.storyPositionInDropdown)[story.quest].click();
      $(sel.selectedStoryType).waitForDisplayed();
      expect($(sel.selectedStoryType).getText()).toEqual(exp.Quest);
    });

    it('##### Verify that selected story type is displayed = Journey and Return', () => {
      $$(sel.storyPositionInDropdown)[story.journeyAndReturn].click();
      $(sel.selectedStoryType).waitForDisplayed();
      expect($(sel.selectedStoryType).getText()).toEqual(exp.JourneyAndReturn);
    });

    it('##### Verify that selected story type is displayed = Rags and Riches', () => {
      $$(sel.storyPositionInDropdown)[story.ragsAndRiches].click();
      $(sel.selectedStoryType).waitForDisplayed();
      expect($(sel.selectedStoryType).getText()).toEqual(exp.RagsAndRiches);
    });

    it('##### Verify that selected story type is displayed = Tragedy', () => {
      $$(sel.storyPositionInDropdown)[story.tragedy].click();
      $(sel.selectedStoryType).waitForDisplayed();
      expect($(sel.selectedStoryType).getText()).toEqual(exp.Tragedy);
    });

    it('##### Verify that selected story type is displayed = Comedy', () => {
      $$(sel.storyPositionInDropdown)[story.comedy].click();
      $(sel.selectedStoryType).waitForDisplayed();
      expect($(sel.selectedStoryType).getText()).toEqual(exp.Comedy);
    });
  });
});
