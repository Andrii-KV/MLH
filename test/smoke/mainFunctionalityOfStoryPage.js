import {
  inputValues4AndClick,
  ageInTheStoryText,
  inputValues5AndClick,
  numToText,
  genderInComedyStory,
  nameInComedyStory,
  nameInStorySubHeader,
} from '../../helpers/methods';
import {number, gender, image, name, story, field, comedyStoryText} from '../../data/testData';

const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('MLH-5 STORY PAGE FUNCTIONALITY', () => {
  before(() => {
    browser.url('');
    browser.maximizeWindow();
  });

  describe('MLH-5.1 IMAGE ON THE STORY PAGE', () => {

    it('MLH-5.1.0 VERIFY THAT STORY PAGE HAS NO IMAGE BY DEFAULT', () => {
      inputValues4AndClick(name.userHe, gender.HE, number.age, story.comedy);
      expect($(sel.storyImage).getAttribute('src')).toEqual(exp.defaultImageArea);
      $(sel.tryAgainBtn).click();
    });

    it('MLH-5.1.1 VERIFY THAT UPLOADED IMAGE IS VISIBLE', () => {
      inputValues5AndClick(name.userHe, gender.HE, number.age, story.comedy, image.testImageJpg);
      expect($(sel.storyImage).getAttribute('src')).not.toEqual(exp.defaultImageArea);
      $(sel.tryAgainBtn).click();
    });
  });

  describe('MLH-5.2 NAME, GENDER, AGE OF A THE STORY PAGE', () => {

    it('MLH-5.2.0 VERIFY THAT SUBHEADER CONTAINS OUR HERO NAME = "Nick" ', () => {
      inputValues4AndClick(name.userHe, gender.HE, number.age, story.comedy);
      expect($(sel.subHeaderStory).getText().includes(name.userHe)).toEqual(true);
    });

    it('MLH-5.2.1 VERIFY THAT SUBHEADER CONTAINS OUR HERO NAME = "Nick" IN THE RIGHT PLACE', () => {
      inputValues4AndClick(name.userHe, gender.HE, number.age, story.comedy);
      expect(nameInStorySubHeader(name.userHe)).toEqual(exp.userNameHe);
    });

    it('MLH-5.2.2 VERIFY THAT STORY GENERATED WITH OUR HERO NAME = "Nick" ', () => {
      inputValues4AndClick(name.userHe, gender.HE, number.age, story.comedy);
      expect(nameInComedyStory(name.userHe)).toEqual(exp.userNameHe);
    });

    it('MLH-5.2.3 VERIFY THAT STORY CREATED WITH GENDER = HE in body of a story', () => {
      inputValues4AndClick(name.userHe, gender.HE, number.age, story.comedy);
      expect(genderInComedyStory(name.userHe,number.age)).toEqual(exp.genderStoryHe);
    });
    //
    it('MLH-5.2.4 VERIFY THAT STORY CREATED WITH GENDER = SHE in body of a story', () => {
      inputValues4AndClick(name.userShe, gender.SHE, number.age, story.comedy);
      expect(genderInComedyStory(name.userShe,number.age)).toEqual(exp.genderStoryShe);
    });
    //
    it('MLH-5.2.5 VERIFY THAT STORY CREATED WITH GENDER = IT in body of a story', () => {
      inputValues4AndClick(name.userIt, gender.IT, number.age, story.comedy);
      expect(genderInComedyStory(name.userIt,number.age)).toEqual(exp.genderStoryIt);
    });
    //
    it('MLH-5.2.6 VERIFY THAT AGE OF A HERO = "fifty" in a body of a CREATED STORY', () => {
      inputValues4AndClick(name.userIt, gender.IT, number.age, story.comedy);
      expect(ageInTheStoryText()).toEqual(numToText(number.age));
    });

    it('MLH-5.2.7 VERIFY THAT MORAL SECTION IS DISPLAYED IN A BODY OF A CREATED STORY', () => {
      inputValues4AndClick(name.userIt, gender.IT, number.age, story.comedy);
      expect($$(sel.storyPageComedyText)[comedyStoryText.moral].isDisplayed()).toEqual(true);
    });

    it('MLH-5.2.8 VERIFY THAT MORAL SECTION GAS MORAL TEXT IN A CREATED STORY', () => {
      inputValues4AndClick(name.userIt, gender.IT, number.age, story.comedy);
      expect($$(sel.storyPageComedyText)[comedyStoryText.moral].getText()).toEqual(exp.comedyStoryMoral);
    });

    it('MLH-5.2.9 VERIFY THAT TRY AGAIN BUTTON IS DISPLAYED IN A CREATED STORY PAGE', () => {
      inputValues4AndClick(name.userIt, gender.IT, number.age, story.comedy);
      expect($(sel.tryAgainBtn).isDisplayed()).toEqual(true);
    });

    it('MLH-5.2.10 VERIFY THAT TRY AGAIN BUTTON IS CLICKABLE IN A CREATED STORY PAGE', () => {
      inputValues4AndClick(name.userIt, gender.IT, number.age, story.comedy);
      expect($(sel.tryAgainBtn).isClickable()).toEqual(true);
    });

    it('MLH-5.2.11 VERIFY THAT TRY AGAIN BUTTON HAS A TEXT: "Try again!"', () => {
      inputValues4AndClick(name.userIt, gender.IT, number.age, story.comedy);
      expect($(sel.tryAgainBtn).getText()).toEqual(exp.tryAgainBtnText);
    });

    afterEach(() => {
      $(sel.tryAgainBtn).waitForDisplayed();
      $(sel.tryAgainBtn).click();
    });
  });
});
