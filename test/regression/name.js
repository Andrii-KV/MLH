import { age, gender, image, name, story } from '../../data/testData';
import { inputValues4AndClick, inputValues5AndClick, clearInputBox} from '../../helpers/methods';
const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');


describe("NAME REGRESSION", ()=> {
    before(() => {
        browser.url('');
        browser.maximizeWindow();

    });
    beforeEach(()=> {
       browser.refresh();
    })

    it('input name one Symbol', function () {
        $(sel.name).setValue(name.userOneSymbol);
        expect($(sel.name).getValue()).toEqual(exp.userOneSymbol);
    });

    it('input name one Letter', function () {
        $(sel.name).setValue(name.userOneLetter);
        expect($(sel.name).getValue()).toEqual(exp.userOneLetter);
    });

    it('input name one Number', function () {
        $(sel.name).setValue(name.userOneNumber);
        expect($(sel.name).getValue()).toEqual(exp.userOneNumber);
    });

    it('input name Letters', function () {
        $(sel.name).setValue(name.userNameLetters);
        expect($(sel.name).getValue()).toEqual(exp.userNameLetters);
    });

    it('input name Numbers', function () {
        $(sel.name).setValue(name.userNameNumbers);
        expect($(sel.name).getValue()).toEqual(exp.userNameNumbers);
    });

    it('input name Symbols', function () {
        $(sel.name).setValue(name.userNameSymbols);
        expect($(sel.name).getValue()).toEqual(exp.userNameSymbols);
    });

    it('input name Letters, Numbers, Symbols', function () {
        $(sel.name).setValue(name.userNameLetNumSym);
        expect($(sel.name).getValue()).toEqual(exp.userNameLetNumSym);
    });

    it('input name to upper case Letters', function () {
        $(sel.name).setValue(name.userNameUpperCase);
        expect($(sel.name).getValue()).toEqual(exp.userNameUpperCase);
    });

    it('input name to lower case Letters', function () {
        $(sel.name).setValue(name.userNameLowerCase);
        expect($(sel.name).getValue()).toEqual(exp.userNameLowerCase);
    });

    it('input name to 70 Symbols', function () {
        $(sel.name).setValue(name.user70Symbols);
        expect($(sel.name).getValue()).toEqual(exp.user70Symbols);
    });

    it('input name to 70 Symbols NO ERROR', function () {
        $(sel.name).setValue(name.user70Symbols);
        browser.pause(500)
        expect($(sel.errorMessage).isDisplayed()).toEqual(false);
    });

    it('input name to 71 Symbols APPEAR ERROR', function () {
        $(sel.name).setValue(name.user71Symbols);
        $(sel.errorMessage).waitForDisplayed();
        expect($(sel.errorMessage).isDisplayed()).toEqual(true); // Ты меня заметил? Стоит ли оставить этот тест кейс тут?
    });                                                                  //Или mainFunctionalityOfCreateStoryPage покрывает?

    it('input name one Symbol NO ERROR', function () {
        $(sel.name).setValue(name.userOneSymbol);
        browser.pause(500)
        expect($(sel.errorMessage).isDisplayed()).toEqual(false);
    });

    it('input name one Letter NO ERROR', function () {
        $(sel.name).setValue(name.userOneLetter);
        browser.pause(500)
        expect($(sel.errorMessage).isDisplayed()).toEqual(false);
    });

    it('input name one Number NO ERROR', function () {
        $(sel.name).setValue(name.userOneNumber);
        browser.pause(500)
        expect($(sel.errorMessage).isDisplayed()).toEqual(false);
    });

})
