import { number } from '../../data/testData';
const sel = require('../../data/selectors.json');
const ageValue = number.age;
const exp = require('../../data/expected.json');

describe('MLH-1 AGE REGRESSION', () => {
  before(() => {
    browser.url('');
    browser.maximizeWindow();
  });

  it('MLH-1.1 Check that we able to change the value +1 by clicking spinner up', function () {
    $(sel.age).setValue(ageValue);
    $(sel.spinnerAgeUp).click();
    expect($(sel.age).getValue()).toEqual(ageValue + 1 + '');
  });

  it('MLH-1.2 Check that we able to change the value -1 by clicking spinner down', function () {
    $(sel.age).setValue(ageValue);
    $(sel.spinnerAgeDown).click();
    expect($(sel.age).getValue()).toEqual(ageValue - 1 + '');
  });

  it('MLH-1.3 Check that get the value: 1 by clicking spinner up', function () {
    $(sel.spinnerAgeUp).click();
    expect($(sel.age).getValue()).toEqual(exp.one);
  });

  it('MLH-1.4 Verify that the age field accepts 12 symbols', function () {
    $(sel.age).setValue(number.number3);
    expect($(sel.errorMessage).isDisplayed()).not.toEqual(true);
  });

  it('MLH-1.5 Verify that the age field accepts 1 digit', function () {
    $(sel.age).setValue(number.number4);
    expect($(sel.errorMessage).isDisplayed()).not.toEqual(true);
  });

  it('MLH-1.6 Verify that if input value is longer than a 12-digit integer, error message appears', function () {
    $(sel.age).setValue(number.number5);
    $(sel.errorMessage).waitForDisplayed();
    expect($(sel.errorMessage).isDisplayed()).toEqual(true);
  });

  afterEach(() => {
    browser.refresh();
  });
});
