import {
  inputValues4AndClick,
  ageInTheStoryText,
  inputValues5AndClick,
  numToText,
  genderOnTheStoryPage,
  nameInTheStorySubHeader,
  nameInTheStoryText,
} from '../../helpers/methods';
import { age, gender, image, name, story, genderStoryPage, nameStoryPage } from '../../data/testData';

const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('STORY PAGE FUNCTIONALITY', () => {
  before(() => {
    browser.url('');
    browser.maximizeWindow();
  });

  describe('IMAGE ON THE STORY PAGE', () => {
    it('VERIFY THAT STORY PAGE HAS NO IMAGE BY DEFAULT', () => {
      inputValues4AndClick(name.userHe, gender.HE, age.number1, story.comedy);
      expect($(sel.storyImage).getAttribute('src')).toEqual(exp.defaultImageArea);
      $(sel.tryAgainBtn).click();
    });

    it('VERIFY THAT UPLOADED IMAGE IS VISIBLE', () => {
      inputValues5AndClick(name.userHe, gender.HE, age.number1, story.comedy, image.testImageJpg);
      expect($(sel.storyImage).getAttribute('src')).not.toEqual(exp.defaultImageArea);
      $(sel.tryAgainBtn).click();
    });
  });

  describe('NAME, GENDER, AGE OF A THE STORY PAGE', () => {
    it('VERIFY THAT STORY NAME CONTAINS OUR HERO NAME = "Nick" ', () => {
      inputValues4AndClick(name.userHe, gender.HE, age.number1, story.comedy);
      expect($(sel.subHeaderStory).getText().includes(name.userHe)).toEqual(true);
    });

    it('VERIFY THAT STORY NAME CONTAINS OUR HERO NAME = "Nick" IN THE RIGHT PLACE', () => {
      inputValues4AndClick(name.userHe, gender.HE, age.number1, story.comedy);
      expect(nameInTheStorySubHeader()).toEqual(name.userHe);
    });

    it('VERIFY THAT STORY GENERATED WITH OUR HERO NAME = "Nick" ', () => {
      inputValues4AndClick(name.userHe, gender.HE, age.number1, story.comedy);
      expect(nameInTheStoryText(sel.storyPageComedyText, nameStoryPage.He)).toEqual(nameStoryPage.He);
    });

    it('VERIFY THAT STORY CREATED WITH GENDER = HE in body of a story', () => {
      inputValues4AndClick(name.userHe, gender.HE, age.number1, story.comedy);
      expect(genderOnTheStoryPage(sel.storyPageComedyText, genderStoryPage.He)).toEqual(true);
    });

    it('VERIFY THAT STORY CREATED WITH GENDER = SHE in body of a story', () => {
      inputValues4AndClick(name.userShe, gender.SHE, age.number1, story.comedy);
      expect(genderOnTheStoryPage(sel.storyPageComedyText, genderStoryPage.She)).toEqual(true);
    });

    it('VERIFY THAT STORY CREATED WITH GENDER = IT in body of a story', () => {
      inputValues4AndClick(name.userIt, gender.IT, age.number1, story.comedy);
      expect(genderOnTheStoryPage(sel.storyPageComedyText, genderStoryPage.It)).toEqual(true);
    });

    it('VERIFY THAT AGE of a hero = "fifty" in a body of a CREATED STORY', () => {
      inputValues4AndClick(name.userIt, gender.IT, age.number1, story.comedy);
      expect(ageInTheStoryText(sel.storyPageComedyText, age.number1)).toEqual(numToText(age.number1));
    });

    afterEach(() => {
      $(sel.tryAgainBtn).waitForDisplayed();
      $(sel.tryAgainBtn).click();
    });
  });
});
