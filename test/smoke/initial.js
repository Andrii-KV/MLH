const sel = require("../../data/selectors.json");
const exp = require("../../data/expected.json");
import { field, gender, story, image, name, age } from "../../data/testData";
const path = require("path");
import {
  inputValues4,
  inputValues4AndClick,
  inputValues5AndClick,
} from "../../helpers/methods";

describe("My Little Hero", () => {




  describe.skip("Verify valid input", () => {
    it("Verify name letters input (1) length", function () {
      browser.refresh();
      $(sel.name).setValue("N");
      expect($(sel.name).getValue()).toEqual("N");
    });

    it("Verify name letters input (70) length", function () {
      browser.refresh();
      $(sel.name).setValue(
          "Character Count Tool  Character Counter is a free character counter to"
      );
      expect($(sel.name).getValue()).toEqual(
          "Character Count Tool  Character Counter is a free character counter to"
      );
    });

    it("Verify name numbers input (1) length", function () {
      browser.refresh();
      $(sel.name).setValue("1");
      expect($(sel.name).getValue()).toEqual("1");
    });

    it("Verify name numbers input (70) length", function () {
      browser.refresh();
      $(sel.name).setValue(
          "1234567890123456789012345678901234567890123456789012345678901234567890"
      );
      expect($(sel.name).getValue()).toEqual(
          "1234567890123456789012345678901234567890123456789012345678901234567890"
      );
    });

    it("Verify name symbols input (70) length", function () {
      browser.refresh();
      $(sel.name).setValue(
          "ͳϙϾͼϚϛϡϠϕϔ⨊⨇⨄⨆⨌⨨⨧⨢⨟⨞⅟⅘Ⅶ⁰₂ⅺⅱⅳ≹←→▶ÄäãɒÆ$₶﷼₷₴₮_+-=[]{}﷼₾|/?><.,!@#$%^&*()"
      );
      expect($(sel.name).getValue()).toEqual(
          "ͳϙϾͼϚϛϡϠϕϔ⨊⨇⨄⨆⨌⨨⨧⨢⨟⨞⅟⅘Ⅶ⁰₂ⅺⅱⅳ≹←→▶ÄäãɒÆ$₶﷼₷₴₮_+-=[]{}﷼₾|/?><.,!@#$%^&*()"
      );
    });
  });
});

