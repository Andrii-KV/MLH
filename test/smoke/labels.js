const sel = require('../../data/selectors.json');
import { field, gender, story } from '../../data/testData';

describe('MLH-3 LABELS АRЕ DISPLAYED', () => {
  before(() => {
    browser.url('');
    browser.maximizeWindow();
  });

  it('MLH-3.1 Header is displayed ', () => {
    expect($(sel.header).isDisplayed()).toEqual(true);
  });

  it('MLH-3.2 Sub header is displayed ', () => {
    expect($(sel.subHeader).isDisplayed()).toEqual(true);
  });

  it('MLH-3.3 Label for name is displayed', () => {
    expect($$(sel.label)[field.name].isDisplayed()).toEqual(true);
  });

  it('MLH-3.4 Field NAME is displayed', () => {
    expect($(sel.name).isDisplayed()).toEqual(true);
  });

  it('MLH-3.5 Label for gender is displayed', () => {
    expect($$(sel.label)[field.gender].isDisplayed()).toEqual(true);
  });

  it('MLH-3.6 Radio button "he" is displayed', () => {
    expect($$(sel.radioBtn)[gender.HE].isDisplayed()).toEqual(true);
  });

  it('MLH-3.7 Radio button "she" is displayed', () => {
    expect($$(sel.radioBtn)[gender.SHE].isDisplayed()).toEqual(true);
  });

  it('MLH-3.8 Radio button "it" is displayed', () => {
    expect($$(sel.radioBtn)[gender.IT].isDisplayed()).toEqual(true);
  });

  it('MLH-3.9 Label for age is displayed', () => {
    expect($$(sel.label)[field.age].isDisplayed()).toEqual(true);
  });

  it('MLH-3.10 Field AGE is displayed', () => {
    expect($(sel.age).isDisplayed()).toEqual(true);
  });

  it('MLH-3.11 Label for story is displayed', () => {
    expect($$(sel.label)[field.story].isDisplayed()).toEqual(true);
  });

  it('MLH-3.12 Field STORY is displayed', () => {
    expect($(sel.story).isDisplayed()).toEqual(true);
  });

  it('MLH-3.13 Label for image upload is displayed', () => {
    expect($$(sel.label)[field.image].isDisplayed()).toEqual(true);
  });

  it('MLH-3.14 Field click or drag and drop is displayed', () => {
    expect($(sel.dragAndDropField).isDisplayed()).toEqual(true);
  });

  it('MLH-3.15 Submit button is displayed', () => {
    expect($(sel.submitButton).isDisplayed()).toEqual(true);
  });

  // should add same thing for drop down menu ???????????????????????????
});
