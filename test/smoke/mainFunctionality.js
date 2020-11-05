import {
  inputValues4,
  inputValues5,
  inputValues4AndClick,
  inputValues5AndClick,
} from "../../helpers/methods";
import { age, gender, image, name, story } from "../../data/testData";
const sel = require("../../data/selectors.json");
const exp = require("../../data/expected.json");

describe("MAIN FUNCTIONALITY", () => {
  before(() => {
    browser.url("");
    browser.maximizeWindow();
  });

  describe("CREATE A STORY", () => {
    it("should create a story with required fields only", function () {
      inputValues4AndClick(name.userHe, gender.HE, age.option1, story.comedy);
      expect($(sel.storyPage).isDisplayed()).toEqual(true);
    });

    it("should create a story with all fields", function () {
      inputValues5AndClick(
        name.userHe,
        gender.HE,
        age.option1,
        story.comedy,
        image["1"]
      );
      expect($(sel.storyPage).isDisplayed()).toEqual(true);
    });

    afterEach(() => {
      $(sel.tryAgainBtn).click();
    });
  });

  describe("SUBMIT BUTTON", () => {
    it("Submit Button is active with required fields filled up", () => {
      inputValues4(name.userHe, gender.HE, age.option1, story.comedy);
      expect($(sel.submitButton).isEnabled()).toEqual(true);
    });

    it("Submit Button is active with all fields filled up", () => {
      inputValues5(
        name.userHe,
        gender.HE,
        age.option1,
        story.comedy,
        image["1"]
      );
      expect($(sel.submitButton).isEnabled()).toEqual(true);
    });

    afterEach(() => {
      browser.refresh();
    });
  });
});
