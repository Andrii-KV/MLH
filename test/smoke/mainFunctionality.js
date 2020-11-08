import { inputValues4, inputValues5, inputValues4AndClick, inputValues5AndClick,clearInputBox } from '../../helpers/methods';
import { age, gender, image, name, story } from '../../data/testData';
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');
const path = require('path');
// let contentMode = browser.execute(() => {
//   let style = document.defaultView.getComputedStyle(document.querySelector('body'),'::before');
//   return style.getPropertyValue('content')
// });

describe('MAIN FUNCTIONALITY', () => {
  before(() => {
    browser.url('');
    browser.maximizeWindow();
  });

  describe.skip('CREATE A STORY', () => {
    it('should create a story with required fields only', function () {
      inputValues4AndClick(name.userHe, gender.HE, age.number1, story.comedy);
      expect($(sel.storyPage).isDisplayed()).toEqual(true);
    });

    it('should create a story with all fields (*.jpg)', function () {
      inputValues5AndClick(name.userHe, gender.HE, age.number1, story.comedy, image.testImageJpg);
      expect($(sel.storyPage).isDisplayed()).toEqual(true);
    });

    it('should create a story with all fields (*.png)', function () {
      inputValues5AndClick(name.userHe, gender.HE, age.number1, story.comedy, image.testImagePng);
      expect($(sel.storyPage).isDisplayed()).toEqual(true);
    });

    afterEach(() => {
      $(sel.tryAgainBtn).click();
    });
  });

  describe.skip('SUBMIT BUTTON', () => {
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
      $(sel.age).setValue(age.number1);
      expect($(sel.submitButton).isClickable()).toEqual(false);
    });

    it('SUBMIT Button is ACTIVE with REQUIRED fields filled up', () => {
      inputValues4(name.userHe, gender.HE, age.number1, story.comedy);
      expect($(sel.submitButton).isClickable()).toEqual(true);
    });

    it('SUBMIT Button is ACTIVE with ALL fields filled up', () => {
      inputValues5(name.userHe, gender.HE, age.number1, story.comedy, image.testImageJpg);
      expect($(sel.submitButton).isClickable()).toEqual(true);
    });

    afterEach(() => {
      browser.refresh();
    });
  });

  describe("ERROR MESSAGE",()=>{
    afterEach(()=> {
      browser.refresh();
    })


    it('should check that ERROR MESSAGE displayed when name field empty', function () {
      $(sel.name).setValue(name.userIt);
      clearInputBox(sel.name);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).isDisplayed()).toEqual(true)
    });

    it('should check that ERROR MESSAGE = "Required" when name field is empty', function () {
      $(sel.name).setValue(name.userIt);
      clearInputBox(sel.name);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).getText()).toEqual(exp["errorMSG.Required"]);
    });

    it('should check that ERROR MESSAGE displayed when name field over 71 symbols', function () {
      $(sel.name).setValue(name.user71Symbols);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).isDisplayed()).toEqual(true)
    });

    it('should check that ERROR MESSAGE = "70 symbols max" when user enter name bigger than 70 symbols', function () {
      $(sel.name).setValue(name.user71Symbols);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).getText()).toEqual(exp["errorMSG.70SymbolsMax"]);
    });

    it('should check that ERROR MESSAGE displayed when clicking age spinner down', function () {
      $(sel.spinnerAgeDown).click();
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).isDisplayed()).toEqual(true)
    });


    it('should check that ERROR MESSAGE = "looks like unreal age" when clicking age spinner down', function () {
      $(sel.spinnerAgeDown).click();
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).getText()).toEqual(exp["errorMSG.UnrealAge"])
    });

    it('should check that ERROR MESSAGE displayed when input -10 in age field', function () {
      $(sel.age).setValue(age.number2);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).isDisplayed()).toEqual(true)
    });

    it('should check that ERROR MESSAGE = "looks like unreal age" when input -10 in age field', function () {
      $(sel.age).setValue(age.number2);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).getText()).toEqual(exp["errorMSG.UnrealAge"])
    });

    it('should check that ERROR MESSAGE displayed when clicking age spinner down and clear input', function () {
      $(sel.spinnerAgeDown).click();
      clearInputBox(sel.age);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).isDisplayed()).toEqual(true)
    });

    it('should check that ERROR MESSAGE = "Required" when clicking age spinner down and clear input', function () {
      $(sel.spinnerAgeDown).click();
      clearInputBox(sel.age);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).getText()).toEqual(exp["errorMSG.Required"])
    });

    it('should check that ERROR MESSAGE displayed when input -10 in age field and clear input', function () {
      $(sel.age).setValue(age.number2);
      clearInputBox(sel.age);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).isDisplayed()).toEqual(true)
    });

    it('should check that ERROR MESSAGE = "Required" when input -10 in age field and clear input', function () {
      $(sel.age).setValue(age.number2);
      clearInputBox(sel.age);
      $(sel.errorMessage).waitForDisplayed();
      expect($(sel.errorMessage).getText()).toEqual(exp["errorMSG.Required"])
    });

    it("should throw an error while trying to upload the PDF file", ()=> {
      inputValues5(name.userIt,gender.IT, age.number1, story.journeyAndReturn, image.testImagePdf)
      expect($(sel.errorMessageImage).isDisplayed()).toEqual(true);
    })

    it("error message should be = 'You can only upload JPG/PNG file!' while trying to upload the PDF file", ()=> {
      inputValues5(name.userIt,gender.IT, age.number1, story.journeyAndReturn, image.testImagePdf)
      expect($(sel.errorMessageImage).getText()).toEqual(exp.errorMessageImage);
    })



  })
});

