const sel = require("../../data/selectors.json");
import { field, gender } from "../../data/testData";

describe("Labels exist", () => {
  before(() => {
    browser.url("");
    browser.maximizeWindow();
  });

  it("TC-001 Header is displayed ", () => {
    expect($(sel.header).isDisplayed()).toEqual(true);
  });

  it("TC-002 Sub header is displayed ", () => {
    expect($(sel.subHeader).isDisplayed()).toEqual(true);
  });

  it("TC-003 Label for name is displayed", () => {
    expect($$(sel.label)[field.name].isDisplayed()).toEqual(true);
  });

  it("TC-004 Field NAME is displayed", () => {
    expect($(sel.name).isDisplayed()).toEqual(true);
  });

  it("TC-005 Label for gender is displayed", () => {
    expect($$(sel.label)[field.gender].isDisplayed()).toEqual(true);
  });

  it('TC-006 Radio button "he" is displayed', () => {
    expect($$(sel.radioBtn)[gender.HE].isDisplayed()).toEqual(true);
  });

  it('TC-007 Radio button "she" is displayed', () => {
    expect($$(sel.radioBtn)[gender.SHE].isDisplayed()).toEqual(true);
  });

  it('TC-008 Radio button "it" is displayed', () => {
    expect($$(sel.radioBtn)[gender.IT].isDisplayed()).toEqual(true);
  });

  it("TC-009 Label for age is displayed", () => {
    expect($$(sel.label)[field.age].isDisplayed()).toEqual(true);
  });

  it("TC-010 Field AGE is displayed", () => {
    expect($(sel.age).isDisplayed()).toEqual(true);
  });

  it("TC-011 Label for story is displayed", () => {
    expect($$(sel.label)[field.story].isDisplayed()).toEqual(true);
  });

  it("TC-012 Field STORY is displayed", () => {
    expect($(sel.story).isDisplayed()).toEqual(true);
  });

  it("TC-013 Label for image upload is displayed", () => {
    expect($$(sel.label)[field.image].isDisplayed()).toEqual(true);
  });

  it("TC-014 Field click or drag and drop is displayed", () => {
    expect($(sel.dragAndDropField).isDisplayed()).toEqual(true);
  });

  it("TC-015 Submit button is displayed", () => {
    expect($(sel.submitButton).isDisplayed()).toEqual(true);
  });
});
