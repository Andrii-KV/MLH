import { inputValues4, inputValues5, inputValues4AndClick, inputValues5AndClick } from '../../helpers/methods';
import { age, gender, image, name, story } from '../../data/testData';
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('MAIN FUNCTIONALITY', () => {
  before(() => {
    browser.url('');
    browser.maximizeWindow();
  });

  xdescribe('CREATE A STORY', () => {
    it('should create a story with required fields only', function () {
      inputValues4AndClick(name.userHe, gender.HE, age.option1, story.comedy);
      expect($(sel.storyPage).isDisplayed()).toEqual(true);
    });

    it('should create a story with all fields', function () {
      inputValues5AndClick(name.userHe, gender.HE, age.option1, story.comedy, image.testImage);
      expect($(sel.storyPage).isDisplayed()).toEqual(true);
    });

    afterEach(() => {
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
      $(sel.age).setValue(age.option1);
      expect($(sel.submitButton).isClickable()).toEqual(false);
    });

    it('SUBMIT Button is ACTIVE with REQUIRED fields filled up', () => {
      inputValues4(name.userHe, gender.HE, age.option1, story.comedy);
      expect($(sel.submitButton).isClickable()).toEqual(true);
    });

    it('SUBMIT Button is ACTIVE with ALL fields filled up', () => {
      inputValues5(name.userHe, gender.HE, age.option1, story.comedy, image.testImage);
      expect($(sel.submitButton).isClickable()).toEqual(true);
    });

    afterEach(() => {
      browser.refresh();
    });
  });
});
