import {
  inputValues4,
  inputValues5,
  inputValues4AndClick,
  inputValues5AndClick,
} from "../../helpers/methods";
import { age, gender, image, name, story } from "../../data/testData";
const sel = require("../../data/selectors.json");
const exp = require("../../data/expected.json");

describe("STORY PAGE FUNCTIONALITY", () => {
  before(() => {
    browser.url("");
    browser.maximizeWindow();
  });

  describe("STORY PAGE TEXT", () => {
    before(() => {
      inputValues4AndClick(name.userHe, gender.HE, age.option1, story.comedy);
    });

    it("VERIFY THAT HEADER = My Little Hero", () => {
      expect($(sel.header).getText()).toEqual(exp.labelHeader);
    });

    it("VERIFY SUBHEADER CREATED WITH OUR HERO NAME ", () => {
      expect($(sel.subHeaderStory).getText().includes(name.userHe)).toEqual(
        true
      );
    });
    after(() => {
      $(sel.tryAgainBtn).click();
    });
  });

  describe("IMAGE ON THE STORY PAGE", () => {
    it("VERIFY THAT STORY PAGE HAS NO IMAGE BY DEFAULT", () => {
      inputValues4AndClick(name.userHe, gender.HE, age.option1, story.comedy);
      expect($(sel.storyImage).getAttribute("src")).toEqual(
        exp.defaultImageArea
      );
      $(sel.tryAgainBtn).click();
    });

    it("VERIFY THAT UPLOADED IMAGE IS VISIBLE", () => {
      inputValues5AndClick(
        name.userHe,
        gender.HE,
        age.option1,
        story.comedy,
        image["1"]
      );
      expect($(sel.storyImage).getAttribute("src")).not.toEqual(
        exp.defaultImageArea
      );
      $(sel.tryAgainBtn).click();
    });
  });
});
