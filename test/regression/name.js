import { name } from '../../data/testData';
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('MLH-2 NAME REGRESSION', () => {
  before(() => {
    browser.url('');
    browser.maximizeWindow();
  });

  it('MLH-2.1 input name one Symbol', function () {
    $(sel.name).setValue(name.userOneSymbol);
    expect($(sel.name).getValue()).toEqual(exp.userOneSymbol);
  });

  it('MLH-2.2 input name one Letter', function () {
    $(sel.name).setValue(name.userOneLetter);
    expect($(sel.name).getValue()).toEqual(exp.userOneLetter);
  });

  it('MLH-2.3 input name one Number', function () {
    $(sel.name).setValue(name.userOneNumber);
    expect($(sel.name).getValue()).toEqual(exp.userOneNumber);
  });

  it('MLH-2.4 input name Letters', function () {
    $(sel.name).setValue(name.userNameLetters);
    expect($(sel.name).getValue()).toEqual(exp.userNameLetters);
  });

  it('MLH-2.5 input name Numbers', function () {
    $(sel.name).setValue(name.userNameNumbers);
    expect($(sel.name).getValue()).toEqual(exp.userNameNumbers);
  });

  it('MLH-2.6 input name Symbols', function () {
    $(sel.name).setValue(name.userNameSymbols);
    expect($(sel.name).getValue()).toEqual(exp.userNameSymbols);
  });

  it('MLH-2.7 input name Letters, Numbers, Symbols', function () {
    $(sel.name).setValue(name.userNameLetNumSym);
    expect($(sel.name).getValue()).toEqual(exp.userNameLetNumSym);
  });

  it('MLH-2.8 input name to upper case Letters', function () {
    $(sel.name).setValue(name.userNameUpperCase);
    expect($(sel.name).getValue()).toEqual(exp.userNameUpperCase);
  });

  it('MLH-2.9 input name to lower case Letters', function () {
    $(sel.name).setValue(name.userNameLowerCase);
    expect($(sel.name).getValue()).toEqual(exp.userNameLowerCase);
  });

  it('MLH-2.10 input name to 70 Symbols', function () {
    $(sel.name).setValue(name.user70Symbols);
    expect($(sel.name).getValue()).toEqual(exp.user70Symbols);
  });

  it('MLH-2.11 input name to 70 Symbols NO ERROR', function () {
    $(sel.name).setValue(name.user70Symbols);
    expect($(sel.errorMessage).isDisplayed()).toEqual(false);
  });

  it('MLH-2.12 input name one Symbol NO ERROR', function () {
    $(sel.name).setValue(name.userOneSymbol);
    expect($(sel.errorMessage).isDisplayed()).toEqual(false);
  });

  it('MLH-2.13 input name one Letter NO ERROR', function () {
    $(sel.name).setValue(name.userOneLetter);
    expect($(sel.errorMessage).isDisplayed()).toEqual(false);
  });

  it('MLH-2.14 input name one Number NO ERROR', function () {
    $(sel.name).setValue(name.userOneNumber);
    expect($(sel.errorMessage).isDisplayed()).toEqual(false);
  });

  afterEach(() => {
    browser.refresh();
  });
});
